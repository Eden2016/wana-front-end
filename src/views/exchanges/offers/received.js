import React, { Component } from "react"
import moment from "moment"
import { Redirect } from "react-router-dom"

import NavMenu from "components/global/navmenu"
import Icon from "components/wana-ui/icon"
import Button from "components/wana-ui/button"
import MapsBg from "components/wana-ui/MapsBg/MapsBg"
import TinyDropdown from "components/wana-ui/dropdown/tiny-dropdown"

import { connect } from "react-redux"

import Header from "../Header"
import MapBanner from "../MapBanner"
import OfferInfoBar from "../OfferInfoBar"
import MessageCard from "../MessageCard"
import ImageCard from "../ImageCard"

import { getRecievedOffer } from "../../../api/offers"
import { getFamilyById, getFamilyAddressById } from "../../../api/families"

import { formatTimeForCalendar } from "../../../utils/utils"

class ReceivedOffer extends Component {
  state = {
    start_time: "2017-11-11 00:05:27",
    end_time: "2017-11-11 01:18:27",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum dolorem sunt quibusdam incidunt alias nam id natus. Necessitatibus commodi illo perspiciatis sit. Suscipit enim ipsam tempore, ratione beatae mollitia?",
    cover: "/assets/img/placeholder/family-hernandezes.png",
    link: "/",
    familyName: "Luis & Elba's Family",
    location: "Palms, Los Angeles, CA",
  }

  declineOffer = id => {}
  acceptOffer = id => {}
  sendMessage = id => {}
  componentDidMount() {
    if(!this.props.isAuthenticated) return
    const { id } = this.props.match.params

    /*
    getRecievedOffer(id).then(() => {
      getFamilyById(familyId)
      getFamilyAddressById(familyId)
    })
    */

  }
  render() {

    // if (!this.props.isAuthenticated && this.props.authError) {
    //   return <Redirect to="/login" />
    // }

    // if (!loaded) {
    //   return <div> Loading... </div>
    // }



    return (
      <div className="-bg-light-gray" style={{ minHeight: 100 + "%" }}>
        <NavMenu />
        <section className="app__body">
          <div className="content__section">
            <Header>
              <strong>{this.state.familyName}'s family</strong> offerd to sit for you
            </Header>

            <MapBanner location={this.state.location} />

            <div className="content__section content__section--no-head no--pad">
              <div className="container">
                <OfferInfoBar
                  from={formatTimeForCalendar(this.state.start_time)}
                  to={formatTimeForCalendar(this.state.end_time)}
                  points="48"
                  decline={this.declineOffer}
                  accept={this.acceptOffer}
                />

                <div className="row">
                  <div className="col col--7-of-12">
                    <MessageCard header="Message" content={this.state.message} />
                  </div>
                  <div className="col col--5-of-12">
                    <ImageCard
                      family={{
                        cover: this.state.cover,
                        link: this.state.link,
                        name: this.state.name,
                        location: this.state.location,
                      }}
                      handleSend={this.sendMessage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  authError: state.auth.authError,
})
export default connect(mapStateToProps)(ReceivedOffer)
