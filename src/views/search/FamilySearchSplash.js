import React, { Component } from "react"
import Banner from "components/wana-ui/banner"
import IconInput from "components/forms/IconInput/IconInput"
import Button from "components/forms/Button/Button"
import classnames from "classnames"
import cookie from "react-cookies"
import { getMyFamilyAddress } from "../../api/families"

class FamilySearchSplash extends Component {
  state = {
    term: "",
    location: "",
    error: null,
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    })

  handleSearchSubmit = e => {
    e.preventDefault()
    const { term, location } = this.state
    if (term.length < 1) {
      // term field is mandatory.
      return this.setState({ error: "Term Field can't be empty" })
    } else {
      this.setState({ error: null })
      this.props.history.push(`/search/${term}/${location}`)
    }
  }

  componentDidMount() {
    cookie.load("token") &&
      getMyFamilyAddress().then(({ success }) => {
        const address = success[0]
        if (address)
          this.setState({
            location: address.zipcode,
          })
      })
  }

  render() {
    const { onChange, handleSubmit } = this
    const { term, location, error } = this.state
    return (
      <Banner
        heading="Find Families in Your Neighborhood"
        subheading="Use points to book a sitter for your kids, or a be a sitter and earn points for FREE!"
        bgImgUrl="../../assets/img/placeholder/banner-search.jpg"
      >
        <form onSubmit={handleSubmit}>
          <div className="row row--tight-gutter -align-left">
            <div className="col col--5-of-12 col--push-1-of-12 col--m-2-of-2">
              <IconInput
                placeholder="Search by name, neighborhood, group, etc..."
                value={term}
                icon="icon-search"
                name="term"
                error={error}
                onChange={onChange}
              />
            </div>
            <div className="col col--3-of-12 col--m-2-of-2">
              <IconInput
                placeholder="City or Zip Code"
                value={location}
                icon="icon-location"
                name="location"
                onChange={onChange}
              />
            </div>
            <div className="col col--2-of-12 col--m-2-of-2">
              <Button size="l" block={true} color="primary" onClick={this.handleSearchSubmit}>
                Search
              </Button>
            </div>
            {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
          </div>
        </form>
      </Banner>
    )
  }
}

export default FamilySearchSplash
