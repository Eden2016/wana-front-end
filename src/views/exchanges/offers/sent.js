import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import NavMenu from "components/global/navmenu"
import Icon from "components/wana-ui/icon"
import Button from "components/wana-ui/button"
import MapsBg from "components/wana-ui/MapsBg/MapsBg"
import TinyDropdown from "components/wana-ui/dropdown/tiny-dropdown"
import Confirm from "components/wana-ui/ConfirmationModal/index"

import Header from "../Header"
import MapBanner from "../MapBanner"
import RequestInfoBar from "../RequestInfoBar"
import MessageCard from "../MessageCard"
import ImageCard from "../ImageCard"
// import CancelModal from "../CancelModal"

import { getSentOffer, cancelSentOffer, updateSentOffer } from "../../../api/offers"
import { getFamilyById, getFamilyAddressById } from "../../../api/families"

import { formatTimeForCalendar } from "../../../utils/utils"
import { hourCost } from "../../../config/config"

class SentOffer extends Component {
  state = {
    loaded: false,
    start_time: "2017-11-11 00:05:27",
    end_time: "2017-11-11 01:18:27",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum dolorem sunt quibusdam incidunt alias nam id natus. Necessitatibus commodi illo perspiciatis sit. Suscipit enim ipsam tempore, ratione beatae mollitia?",
    cover: "/assets/img/placeholder/family-hernandezes.png",
    link: "/",
    familyName: "Luis & Elba",
    location: "Palms, Los Angeles, CA",
    cancelModalOpen: false,
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) return
    this.mounted = true
    const { id } = this.props.match.params

    getSentOffer(id).then(res => {
      console.log(res.success)
      const { duration, end_time, start_time, messages, accepted_by: familyId } = res.success
      const { message } = messages[0]

      this.mounted &&
        this.setState({
          loaded: true,
          duration: parseInt(duration),
          end_time,
          start_time,
          message,
        })

      getFamilyById(familyId).then(({ success }) => {
        console.log("family", success)
        this.mounted &&
          this.setState({
            familyName: success[0].name,
            cover: success[0].avatar,
          })
      })

      getFamilyAddressById(familyId).then(({ success }) => {
        console.log("address", success)
        this.mounted &&
          this.setState({
            address: `${success[0].street || ""} ${success[0].state || ""} ${success[0].zipcode || ""}`,
          })
      })
    })
  }

  componentWillUnmount() {
    this.mounted = false
  }

  edit = () => {
    console.log("edit offer")
  }
  cancel = () => {
    this.openModal()
  }

  confrimCancel = () => {
    this.closeModal()
    console.log("TODO: Call cancel modal endpoint")
  }

  closeModal = () => {
    this.setState({
      cancelModalOpen: false,
    })
  }

  openModal = () => {
    this.setState({
      cancelModalOpen: true,
    })
  }

  render() {
    const { loaded, familyName, start_time, end_time, message, cover, link, location, duration } = this.state

    if (!this.props.isAuthenticated && this.props.authError) {
      return <Redirect to="/login" />
    }

    if (!loaded) {
      return <div> Loading... </div>
    }

    return (
      <div className="-bg-light-gray" style={{ minHeight: 100 + "%" }}>
        {console.log(this.props)}
        <Confirm
          isOpen={this.state.cancelModalOpen}
          close={this.closeModal}
          confirm={this.confrimCancel}
          buttonText="Confrim"
          title={null}
          buttonStyle={{ backgroundColor: "#d9534f", color: "white" }}
          style={{ content: { transform: "translate(-50%, 20vh)" } }}
        >
          <p>{`You are about to cancel your request to ${familyName}'family`}</p>
        </Confirm>

        <NavMenu />
        <section className="app__body">
          <div className="content__section">
            <Header>
              You offered to sit for <strong>{familyName}'s Family</strong>
            </Header>

            <MapBanner location={location} />

            <div className="content__section content__section--no-head no--pad">
              <div className="container">
                <RequestInfoBar
                  from={formatTimeForCalendar(start_time)}
                  to={formatTimeForCalendar(end_time)}
                  points={duration * hourCost}
                  edit={this.edit}
                  cancel={this.cancel}
                />

                <div className="row">
                  <div className="col col--7-of-12">
                    <MessageCard header="Message" content={message} />
                  </div>

                  <div className="col col--5-of-12">
                    <ImageCard
                      family={{
                        cover,
                        link,
                        name: familyName,
                        location,
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

export default connect(mapStateToProps)(SentOffer)
