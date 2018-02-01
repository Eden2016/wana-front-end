import React, { Component } from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import NavMenu from "components/global/navmenu"
import Icon from "components/wana-ui/icon"
import Button from "components/wana-ui/button"
import MapsBg from "components/wana-ui/MapsBg/MapsBg"
import TinyDropdown from "components/wana-ui/dropdown/tiny-dropdown"

import Header from "../Header"
import MapBanner from "../MapBanner"
import HeadBodyCard from "./HeaderBodyCard"
import RequestInfoBar from "../RequestInfoBar"
import CardList from "./CardList"

class SentRequest extends Component {
  state = {}

  componentDidMount() {
    if(!this.props.isAuthenticated) return
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
              <strong>You requested sitting from {this.state.familyName}'s family</strong>
            </Header>
            <MapBanner />

            <div className="content__section content__section--no-head no--pad">
              <div className="container">
                <RequestInfoBar />
                <div className="row">
                  <div className="col col--7-of-12">
                    <CardList
                      cards={[
                        {
                          family: { img: "/assets/img/placeholder/family-blocks.png", name: "Melissa & Zach's Family" },
                          status: "pending",
                        },
                        {
                          family: { img: "/assets/img/placeholder/family-blocks.png", name: "family two" },
                          status: "active",
                        },
                      ]}
                    />
                    <div className="card-table">
                      <div className="card-table__head wrapper">
                        <div className="wrapper__inner">
                          <span className="ts--label">Declined</span>
                        </div>
                      </div>
                      <CardList
                        cards={[
                          {
                            family: {
                              img: "/assets/img/placeholder/family-blocks.png",
                              name: "family three",
                            },
                            status: "declined",
                          },
                        ]}
                      />
                    </div>
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
export default connect(mapStateToProps)(SentRequest)
