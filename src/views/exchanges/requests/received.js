import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import NavMenu from "components/global/navmenu"
import Icon from "components/wana-ui/icon"
import MapsBg from "components/wana-ui/MapsBg/MapsBg"
import TinyDropdown from "components/wana-ui/dropdown/tiny-dropdown"

import Header from "../Header"
import MapBanner from "../MapBanner"
import ReceivedRequestInfoBar from "./ReceivedRequestInfoBar"
import AdultsCard from "./AdultsCard.js"
import ChildrenCard from "./ChildrenCard"
import SpecialInstructions from "./SpecialInstructions"
import FamCard from "./FamCard"
import ImageCard from "../ImageCard"

import { getRecievedRequest } from "../../../api/requests"
import { getFamilyById, getFamilyAddressById } from "../../../api/families"

import { formatTimeForCalendar } from "../../../utils/utils"
import { hourCost } from "../../../config/config"
import { getRecievedOffer } from "../../../api/offers"

class ReceivedRequest extends React.Component {
  state = {
    id: 70,
    start_time: "2017-12-01 07:25:42",
    end_time: "2017-12-01 09:38:42",
    duration: 2.22,
    kids: "{}",
    location: "21374 Borer Prairie Apt. 494\nDuBuqueland, NY 98334-0235",
    special_instructions: "Repellendus optio ut neque nemo.",
    type: "request",
    credits: 0,
    status: 3,
    created_by: 90,
    accepted_by: null,
    created_at: "2017-11-20 09:14:02",
    updated_at: "2017-11-20 09:14:02",
    deleted_at: null,
    messages: [
      {
        id: 146,
        appointment_id: 70,
        from_user: 2,
        message: "Quod id eligendi doloribus in facere ut.",
        created_at: "2017-11-20 09:14:02",
        updated_at: "2017-11-20 09:14:02",
        deleted_at: null,
      },
      {
        id: 147,
        appointment_id: 70,
        from_user: 2,
        message: "A quaerat et asperiores.",
        created_at: "2017-11-20 09:14:02",
        updated_at: "2017-11-20 09:14:02",
        deleted_at: null,
      },
      {
        id: 148,
        appointment_id: 70,
        from_user: 2,
        message: "Ut quis cupiditate ut illum sint.",
        created_at: "2017-11-20 09:14:02",
        updated_at: "2017-11-20 09:14:02",
        deleted_at: null,
      },
    ],
    pivot: {
      user_id: 2,
      appointment_id: 70,
    },
    familyName: "Elba",
  }
  componentDidMount() {
    if (!this.props.isAuthenticated) return
    const { id } = this.props.match.params
    console.log(id, "<<<<***>>>>")
    getRecievedOffer(id)
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
              <strong>{this.state.familyName}'s family requesting sitting form you</strong>
            </Header>

            <MapBanner location={this.state.location} />

            <div className="content__section content__section--no-head no--pad">
              <div className="container">
                <ReceivedRequestInfoBar
                  from={formatTimeForCalendar(this.state.start_time)}
                  to={formatTimeForCalendar(this.state.end_time)}
                  points={this.state.duration * hourCost}
                  decline={this.decline}
                  accept={this.accept}
                />
                <div className="row">
                  <div className="col col--7-of-12">
                    {/* need request to get members */}
                    <AdultsCard />
                    <ChildrenCard />
                  </div>
                  <div className="col col--5-of-12">
                    <SpecialInstructions value={this.state.special_instructions} />
                    <ImageCard
                      family={{
                        cover: "/assets/img/placeholder/family-hernandezes.png",
                        link: "www.whatever.com",
                        name: "some family",
                        location: "someLocation",
                      }}
                      handleSend={f => f}
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
export default connect()(ReceivedRequest)
