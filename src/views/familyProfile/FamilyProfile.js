import React, { Component } from "react"
import { Promise } from "es6-promise"
import NavMenu from "components/global/navmenu"
import FamilyProfileSplashHeader from "./FamilyProfileSplashHeader"
import FamliyActivity from "./FamilyActivity"
import FamilySidebar from "./FamilySidebar"
import ActivityTabs from "./ActivityTabs"
import { Redirect } from "react-router-dom"
import cookie from "react-cookies"
import Login from "../login/index"
import { connect } from "react-redux"
import MessageModal from './MessageModal';

import EditView from "./EditView/EditView"

import "./FamilyProfile.scss"

import {
  getFamilyById,
  getFamilyAddressById,
  getFamilyMembersById,
  getFamilyTraitsById,
  getFamilyMap,
  getFamilyHousePhotosById,
  favFamilyById,
  unFavFamilyById,
  getFavFamilies,
} from "../../api/families"

class FamilyProfile extends Component {
  state = {
    // active tab 0 => feed , 1 => family members
    activeTab: 0,
    loading: false,
    family: null,
    traits: null,
    members: [],
    feedDate: [],
    mapImg: null,
    somethingWrong: null,
    joinDate: null,
    photos: [],
    address: {},
    experiencedSitter: false,
    sits: "__",
    connections: "__",
    favorited: false,
    editMode: false,
  }

  mounted = false
  ss = (arg, callback) => {
    this.mounted && this.setState(arg, callback)
  }
  componentDidMount() {
    this.mounted = true
    const { id } = this.props.match.params
    this.loadData(id)
  }

  loadData = id => {
    getFamilyById(id).then(({ success }) =>
      this.ss({
        family: success[0].family,
        sits: success[0].number_of_sits || "0",
        connections: success[0].number_of_connections || "0",
      }),
    )
    getFamilyTraitsById(id).then(({ success }) => this.ss({ traits: success[0] }))

    getFamilyAddressById(id)
      .then(({ success }) => {
        const address = success[0]
        if (success.length === 0)
          return this.ss({
            address: {},
          })
        this.ss({ address: success[0] })
        if (address) {
          getFamilyMap(address.street).then(({ success }) => {
            const mapImg = success
            this.ss({ mapImg })
          })
        }
      })
      .catch(res => {
        this.ss({
          address: "No address",
        })
      })

    getFamilyMembersById(id).then(({ success }) => this.ss({ members: success }))

    // thumbnails
    getFamilyHousePhotosById(id).then(({ success }) => {
      this.ss({
        photos: success,
      })
    })

    // get if a family is favorited or not.
    getFavFamilies().then(({ success }) => {
      const fav = success[0].data.find(ff => ff.id == id)
      if (fav)
        this.ss({
          favorited: true,
        })
    })
  }

  componentWillReceiveProps(nextProps) {
    const { id: pId } = this.props.match.params
    const { id: nId } = nextProps.match.params
    if (pId !== nId) {
      this.loadData(nId)
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  changeActiveTab = activeTab => {
    this.ss({ activeTab })
  }

  favOrUnFavFamily = () => {
    const { id } = this.props.match.params
    const { favorited } = this.state
    ;(favorited && this.unfavorite(id)) || this.favorite(id)
  }

  favorite = id => {
    favFamilyById(id).then(() => {
      this.setState({
        favorited: true,
      })
    })
  }

  unfavorite = id => {
    unFavFamilyById(id).then(() => {
      this.setState({
        favorited: false,
      })
    })
  }
  activateEditMode = () => {
    this.ss({
      editMode: true,
    })
  }
  deActivateEditMode = flag => {
    this.ss({
      editMode: false,
    })
    if (flag) {
      //- MARK didn't think this through.
      this.componentDidMount()
      this.forceUpdate()
    }
  }

  showMessageModal = () => {
    this.setState({ showMessageModal: true });
  }

  handleMessageSend = async (msg) => {
    const res = await sendMessage({ message: msg, recepient_id: this.state.family.family.id });
    this.setState({ showMessageModal: false });
  }

  onClose = () => {
    this.setState({ showMessageModal: false });
  }

  render() {
    const { changeActiveTab } = this
    const { activeTab, family, traits, address, members, mapImg, somethingWrong, photos, editMode } = this.state
    const { id } = this.props.match.params

    if (!cookie.load("token")) {
      return <Redirect to="/login" />
    }

    /* TODO - MESSAGE MODAL IS ALWAYS OPEN - BUG
    <MessageModal showModal={() => this.showMessageModal()} family={family} handleMessageSend={this.handleMessageSend} onRequestClose={this.onClose} />
    */

    return (
      <div>

        <NavMenu history={this.props.history} />
        {(!editMode && (
          <section className="app__body" style={{ backgroundColor: "#eee" }}>
            <FamilyProfileSplashHeader
              family={family}
              address={address}
              mapImg={mapImg}
              experiencedSitter={this.state.experiencedSitter}
              sits={this.state.sits}
              connections={this.state.connections}
              favorited={this.state.favorited}
              favOrUnFavFamily={this.favOrUnFavFamily}
              activateEditMode={this.activateEditMode}
              ownFamily={this.props.ownFamily}
            />

            <ActivityTabs changeActiveTab={changeActiveTab} activeTab={activeTab} />
            <div className="container">
              <div className="row">
                <FamliyActivity activeTab={activeTab} familyId={id} members={members} />
                <FamilySidebar
                  traits={traits}
                  children={members.filter(fm => fm.role == 2)}
                  family={family}
                  photos={photos}
                  ownFamily={this.props.ownFamily}
                />
              </div>
            </div>
          </section>
        )) || (
          <EditView
            family={family}
            address={address}
            mapImg={mapImg}
            traits={traits}
            experiencedSitter={this.state.experiencedSitter}
            children={members.filter(fm => fm.role == 2)}
            sits={this.state.sits}
            connections={this.state.connections}
            favorited={this.state.favorited}
            photos={photos}
            deActivateEditMode={this.deActivateEditMode}
            changeActiveTab={changeActiveTab}
            activeTab={activeTab}
            members={members}
          />
        )}
      </div>
    )
  }
}

// const { id } = this.props.match.params
const mapStateToProps = (state, props) => ({
  ownFamily:
    state.auth.userData && state.auth.userData.family && state.auth.userData.family.id == props.match.params.id,
})

export default connect(mapStateToProps)(FamilyProfile)
