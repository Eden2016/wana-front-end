import React, { Component } from "react"
import cookie from "react-cookies"
import { withRouter } from "react-router-dom"
import { filterFamilies, filterFamiliesUnauthenticated } from "../../../api/families"

// :term/:location?
class Query extends Component {
  state = {
    keywords: "",
    childrenAge: 0,
    spokenLanguages: "",
    traits: "",
    withPhoto: false,
  }

  handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  componentDidMount() {
    this.performSearch()
  }

  performSearch = () => {
    const { match: { params: { term, location } }, history } = this.props
    if (!cookie.load("token")) {
      filterFamiliesUnauthenticated({
        query: `infant_cpr pool smoking outdoor_space Buddhism Mandarin`,
      }).then(({ success }) => {
        const families = success[0]
        this.props.delegate({
          total: families.length,
          families,
        })
      }).catch(err => {
        // handle error
        console.log(err)
        history.push("/")
      })
    } else {
      filterFamilies({
        query: `infant_cpr pool smoking outdoor_space Buddhism Mandarin`,
      }).then(({ success }) => {
        const families = success[0]
        this.props.delegate({
          total: families.length,
          families,
        })
      }).catch(err => {
        // handle error
        console.log(err)
        history.push("/")
      })
    }
  }

  render() {
    const { keywords, childrenAge, spokenLanguages, traits, withPhoto } = this.state
    const { handleChange } = this
    return (
      <div className="panel__filters padding--m">
        <div className="well no--pad">
          <div className="well__row">
            <div className="well__section">
              <label className="input input--text">
                <span className="label">Keywords</span>
                <input type="text" name="keywords" className="input__field" value={keywords} />
              </label>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <label className="input">
                <span className="label">Children's Ages</span>
                <input type="range" name={childrenAge} className="input__field" value={childrenAge} />
              </label>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <label className="input input--text">
                <span className="label">Spoken Languages</span>
                <input type="text" name="spokenLanguages" className="input__field" value={spokenLanguages} />
              </label>
            </div>
          </div>
          <TraitsFilter traits={traits} onChange={this.onTraitsChange} />
          <div className="well__row">
            <div className="well__section">
              <label className="checkbox">
                <input type="checkbox" name="withPhoto" checked={withPhoto} onChange={handleChange} />
                <span className="checkbox__label">Only show me profiles with photos</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const TraitsFilter = props => (
  <div className="well__row">
    <div className="well__section">
      <div className="input">
        <span className="label">Household Traits</span>
        <div className="checkbox-group checkbox-group--pills row row--tight-gutter">
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-no-smoking">
                <use xlinkHref="#icon-no-smoking" />
              </svg>
              Non-Smoking
            </span>
          </label>
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-yes-vaccines">
                <use xlinkHref="#icon-yes-vaccines" />
              </svg>
              Kids are Vaccinated
            </span>
          </label>
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-yes-cpr">
                <use xlinkHref="#icon-yes-cpr" />
              </svg>
              Knows Child CPR
            </span>
          </label>
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-yes-first-aid">
                <use xlinkHref="#icon-yes-first-aid" />
              </svg>
              Knowsh Child First-Aid
            </span>
          </label>
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-no-guns">
                <use xlinkHref="#icon-no-guns" />
              </svg>
              No Firearms
            </span>
          </label>
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-yes-outdoor-area">
                <use xlinkHref="#icon-yes-outdoor-area" />
              </svg>
              Has Outdoor Area
            </span>
          </label>
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-no-pool">
                <use xlinkHref="#icon-no-pool" />
              </svg>
              No Pool
            </span>
          </label>
          <label className="checkbox col col--1-of-2">
            <input type="checkbox" />
            <span className="checkbox__label">
              <svg className="icon-no-pets">
                <use xlinkHref="#icon-no-pets" />
              </svg>
              No Pets
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
)

export default withRouter(Query)
