import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { changeValue, setSignUpData } from "actions/login"
import NavMenu from "components/global/navmenu"
import SignUp from "components/forms/SignUp"
import cookie from "react-cookies"
import FamilySearchSplash from "./FamilySearchSplash"
import FamiliesYouMayKnow from "./FamiliesYouMayKnow"

import ConfirmationModal from "../../components/wana-ui/ConfirmationModal/index"

class Search extends Component {
  state = {}

  setSignUpData = signUpData => {
    console.log("DATA: ", signUpData)
    const { dispatch, history } = this.props
    dispatch(setSignUpData(signUpData))
    history.push("/signup_complete")
  }

  render() {
    const { loggedIn, history, handleSearchSubmit } = this.props
    return (
      <div className="search-page">
        <NavMenu history={this.props.history} />
        <section className="app__body" style={{ backgroundColor: "#eee" }}>
          <FamilySearchSplash handleSearchSubmit={this.handleSearchSubmit} history={history} />
          <FamiliesYouMayKnow />
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Search)
