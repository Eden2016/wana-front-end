import React, { Component } from "react"
import moment from "moment"

import ExchangeCard from "./familySidebar/ExchangeCard"
import HouseHold from "./familySidebar/HouseHold"
import { getFamilyHousePhotosById } from "../../api/families"
import RequestOfferModal from "./RequestOfferModal/RequestOfferModal"

import "./FamilySidebar.scss"

export default class FamilySidebar extends Component {
  state = {
    activeTab: 0,
    displayEndDate: false,
    startDate: moment(),
    endDate: moment(),
    activeModal: false,
    selectedChildren: [],
  }

  changeActiveTab = activeTab => {
    this.setState({ activeTab })
  }

  handleDisplayEndDate = () => {
    this.setState({
      displayEndDate: true,
    })
  }

  handleStartDateChange = date => {
    this.setState({
      startDate: date,
      endDate: this.state.endDate == "" ? date : this.state.endDate,
    })
  }

  handleEndDateChange = date => {
    this.setState({
      endDate: date,
    })
  }

  activateModal = _ => this.setState({ activeModal: true })
  dismissModal = _ => {
    this.setState({ activeModal: false })
  }

  sendOffer = state => {
    console.log('offer sent handler stub:', state)
  }

  sendRequest = data => {
    console.log('request sent handler stub, data:', data);
    console.log('family sidebar local state:', this.state);
    const { points, endTime, startTime } = data;
    const { activeTab, startDate, endDate } = this.state;
    const formattedRequest = {
      credits: points,
      start_time: `${startDate} {startTime}`,
      end_time: `${endDate} {endTime}`,
    };
    const demoSubmission = {
      "start_time": "2017-12-07 06:00:00",
      "end_time": "2017-12-07 16:30:00",
      "kids": "{}",
      "location": "Test",
      "type": "request",
      "credits": "50",
      "created_by": 4,
      "duration": 10.5,
      "updated_at": "2017-11-30 05:41:51",
      "created_at": "2017-11-30 05:41:51",
      "id": 190
    };
    console.log('formattedRequest', formattedRequest);
  }

  render() {
    const fns = {
      handleDisplayEndDate: this.handleDisplayEndDate,
      handleStartDateChange: this.handleStartDateChange,
      handleEndDateChange: this.handleEndDateChange,
      changeActiveTab: this.changeActiveTab,
      activateModal: this.activateModal,
    }

    const {
      handleDisplayEndDate,
      handleStartDateChange,
      handleEndDateChange,
      sendRequest,
      sendOffer,
      handleStartTimeChange,
      handleEndTimeChange,
    } = this

    const { photos, family } = this.props
    const { activeTab, startDate, startTime, endDate, endTime } = this.state // 0 for request 1 for offer

    return (
      <div className="col col--5-of-12">
        <div className="sidebar">
          { !this.props.ownFamily && <ExchangeCard {...this.state} {...fns} />}
          <HouseHold photos={photos} family={family || {}} traits={this.props.traits} />
          <RequestOfferModal
            delegate={[sendRequest, sendOffer]}
            activeTab={activeTab}
            isOpen={this.state.activeModal}
            dismissModal={this.dismissModal}
            startDate={startDate}
            endDate={endDate}
            startTime={startTime}
            endTime={endTime}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
            handleDisplayEndDate={handleDisplayEndDate}
            children={this.props.children || []}
            selectedChildren={this.state.selectedChildren}
          />
        </div>
      </div>
    )
  }
}
