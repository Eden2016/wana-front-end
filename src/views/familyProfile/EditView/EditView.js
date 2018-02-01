import React, { Component } from "react"
import ReactFilestack, { client as filestack } from "filestack-react"
import { FILESTACK_API_KEY } from "../../../config/config"
const apikey = "Afg12uMqtTpdI9lmVwd89z" //- TODO move to config file
import { v4 } from "node-uuid"

import FamilyProfileSplashHeaderEdit from "./FamilyProfileSplashHeaderEdit"
import ActivityTabsEdit from "./ActivityTabsEdit"
import FamilyMembersTabEdit from "./FamilyMembersTabEdit"
import FamilySidebarEdit from "./FamilySidebarEdit"

import { apiPosRequest as post } from "../../../api/families"

export default class EditView extends Component {
  state = {
    toCall: {},
  }

  client = filestack.init(FILESTACK_API_KEY)

  componentDidMount() {
    let {
      family,
      address,
      mapImg,
      traits,
      experiencedSitter,
      children,
      sits,
      connections,
      favorited,
      photos,
      members,
    } = this.props

    this.setState({
      loading: false,
      uploaded: false,
      preview: family.cover,
      family,
      address,
      mapImg,
      traits,
      experiencedSitter,
      children,
      sits,
      connections,
      favorited,
      photos,
      members,
    })
  }

  uploadCoverImage = () => {
    console.log("calling upload cover")
    const { preview } = this.state
    const { cover } = this.state
    this.setState({
      updatingCover: true,
    })

    this.client
      .upload(
        cover,
        {},
        {
          filename: v4(),
          location: "s3",
        },
      )
      .then(this.updateCover)
      .catch(err => {
        console.log(err)
        this.setState(
          {
            updatingCover: false,
          },
          this.calculateDone,
        )
      })
  }

  updateCover = res => {
    console.log(res)
    post(`/my-profile`, {
      coverUrl: res.url,
    })
      .then(() => {
        this.setState(
          {
            updatingCover: false,
          },
          this.calculateDone,
        )
      })
      .catch(err => {
        this.setState(
          {
            updatingCover: false,
          },
          this.calculateDone,
        )
      })
  }

  calculateDone = () => {
    const { updatingCover, updatingTraits, updatingFamily, updatingAddress } = this.state
    if (!updatingCover && !updatingAddress && !updatingFamily && !updatingCover) {
      this.props.deActivateEditMode(true)
    }
  }

  loading = () => {
    const { updatingCover, updatingTraits, updatingFamily, updatingAddress } = this.state
    return updatingCover || updatingAddress || updatingFamily || updatingCover
  }

  updateTraits = () => {
    console.log("calling update traits")
    this.setState({
      updatingTraits: true,
    })
    post("my-family/traits", this.state.traits)
      .then(res => {
        this.setState(
          {
            updatingTraits: false,
          },
          this.calculateDone,
        )
      })
      .catch(err => {
        console.log(err)
        this.setState(
          {
            updatingTraits: false,
          },
          this.calculateDone,
        )
      })
  }

  updateAddress = () => {
    console.log("calling update address")
    this.setState({
      updatingAddress: true,
    })
    post("my-family/address", this.state.address)
      .then(res => {
        this.setState(
          {
            updatingAddress: false,
          },
          this.calculateDone,
        )
      })
      .catch(err => {
        this.setState(
          {
            updatingAddress: false,
          },
          this.calculateDone,
        )
      })
  }

  updateFamily = () => {
    this.setState({
      updatingFamily: true,
    })
    console.log("calling update family")
    post("my-family", this.state.family)
      .then(res => {
        this.setState(
          {
            updatingFamily: false,
          },
          this.calculateDone,
        )
      })
      .catch(err => {
        this.setState(
          {
            updatingFamily: false,
          },
          this.calculateDone,
        )
      })
  }

  saveChanges = () => {
    const { toCall, tratis } = this.state
    if (!toCall || Object.keys(toCall).length < 1) {
      console.log("retuning from save changes")
      this.calculateDone()
      return
    }

    console.log(this.state.toCall)
    console.log("family", toCall.family)
    console.log("cover", toCall.cover)
    console.log("address", toCall.address)
    console.log("traits", toCall.traits)

    toCall.cover && this.uploadCoverImage()
    toCall.family && this.updateFamily()
    toCall.address && this.updateAddress()
    toCall.traits && this.updateTraits()
  }

  handleFamilyChange = e => {
    const { name, value } = e.target
    const { toCall, family } = this.state

    this.setState({
      family: {
        ...family,
        [name]: value,
      },
      toCall: {
        ...toCall,
        family: true,
      },
    })
  }

  handleTraitsChange = (e, name) => {
    const { toCall, traits } = this.state
    this.setState({
      traits: {
        ...traits,
        [name]: e.value === "YES" ? 1 : 0,
      },
      toCall: {
        ...toCall,
        traits: true,
      },
    })
  }

  handleFamilyAddressChange = e => {
    const { address, toCall } = this.state
    const newObj = {}
    if (e.label && e.label.length > 0) {
      newObj.key = "state"
      newObj.value = e.value
    } else {
      newObj.key = e.target.name
      newObj.value = e.target.value
    }

    this.setState({
      address: {
        ...address,
        [newObj.key]: newObj.value,
      },
      toCall: {
        ...toCall,
        address: true,
      },
    })

    // - FIXME
    // this.setState({
    //   // - TODO
    //   address: {
    //     zipcode: e.target.value,
    //     street: "default",
    //     state: "CA"
    //   },
    //   toCall: {
    //     ...this.state.toCall,
    //     // endpoint => state slice
    //     "my-family/address": "address",
    //   },
    // })
  }

  onCoverDrop = files => {
    console.log("setting preview")
    console.log(files[0])
    const { toCall } = this.state
    this.setState({
      preview: files[0].preview,
      uploaded: true,
      cover: files[0],
      toCall: {
        ...toCall,
        cover: true,
      },
    })

    this.onCoverDragLeave()
  }

  onCoverDragOver = () => {
    // for styling purposes
  }

  onCoverDragLeave = () => {
    // for styling purposes
  }

  render() {
    let {
      family,
      address,
      mapImg,
      traits,
      experiencedSitter,
      children,
      sits,
      connections,
      favorited,
      photos = [],
      members,
      preview,
    } = this.state

    const { deActivateEditMode, activeTab, changeActiveTab } = this.props

    return (
      <section className="app__body" style={{ backgroundColor: "#eee" }}>
        <FamilyProfileSplashHeaderEdit
          preview={preview}
          family={family}
          address={address}
          mapImg={mapImg}
          experiencedSitter={this.state.experiencedSitter}
          sits={this.state.sits}
          connections={this.state.connections}
          favorited={this.state.favorited}
          favOrUnFavFamily={this.favOrUnFavFamily}
          deActivateEditMode={deActivateEditMode}
          onCoverDrop={this.onCoverDrop}
          onCoverDragOver={this.onCoverDragOver}
          onCoverDragLeave={this.onCoverDragLeave}
          saveChanges={this.saveChanges}
          handleFamilyChange={this.handleFamilyChange}
          handleFamilyAddressChange={this.handleFamilyAddressChange}
          loading={this.loading()}
        />

        <ActivityTabsEdit />

        <div className="container">
          <div className="col col--7-of-12">
            <div className="row">
              <FamilyMembersTabEdit members={members || []} />
            </div>
          </div>
          <div className="col col--5-of-12">
            <FamilySidebarEdit
              handleFamilyChange={this.handleFamilyChange}
              handleTraitsChange={this.handleTraitsChange}
              family={family}
              traits={this.state.traits || {}}
              photos={photos}
            />
          </div>
        </div>
      </section>
    )
  }
}
