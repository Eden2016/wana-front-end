import React, { Component } from "react"
import moment from "moment"
import Modal from "react-modal"
import Select from "react-select"
import TinyDropdown from "components/wana-ui/dropdown/tiny-dropdown"
import InputFormField from "components/wana-ui/input"
import Icon from "components/wana-ui/icon"
import DatePicker from "../../../components/wana-ui/datepickerWrapper/DatePicker"
import classnames from "classnames"
import ModalHeader from "./ModalHeader"

import "./RequestOfferModal.scss"
import timeOpts from "./timeopts"

export default class RequestOfferModal extends Component {
  state = {
    secondRow: false,
    endTime: "",
    startTime: "",
    points: 0,
    location: "my house",
  }

  hideDatePicker = () => {
    console.log("hide any active datepicker")
  }

  addSecondRow = () => {
    this.setState({
      secondRow: true,
    })
  }

  removeSecondRow = () => {
    this.setState({
      secondRow: false,
    })
    this.props.handleEndDateChange("")
  }

  handleStartTimeChange = date => {
    this.setState(
      {
        startTime: date.value,
      },
      this.calcPoints,
    )
  }

  handleEndTimeChange = date => {
    this.setState(
      {
        endTime: date.value,
      },
      this.calcPoints,
    )
  }

  handleLocationChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  calcPoints = () => {
    let startDate = this.props.startDate
    let endDate = this.props.endDate === "" ? startDate : this.props.endDate
    let startTime = this.state.startTime
    let endTime = this.state.endTime
    if (startDate != "" && endDate != "" && this.state.endTime && this.state.startTime) {
      let st = `${startDate.format("DD/MM/YYYY")} ${startTime}`
      let et = `${endDate.format("DD/MM/YYYY")} ${endTime}`
      let ms = moment(et, "DD/MM/YYYY HH:mm:ss a").diff(moment(st, "DD/MM/YYYY HH:mm:ss a"))
      let d = moment.duration(ms)
      if (d._isValid) {
        console.log("setting the state...")
        this.setState({
          points: d.asHours() * 12,
        })
      }
    }
  }

  handleStartDateChange = (...args) => {
    this.props.handleStartDateChange(...args)
    this.calcPoints()
  }

  handleEndDateChange = (...args) => {
    this.props.handleEndDateChange(...args)
    this.calcPoints()
  }

  handleSend = () => {
    this.props.delegate[this.props.activeTab]({state: this.state, props: this.props });
  }

  componentDidMount() {
    this.props.handleEndDateChange("")
  }

  render() {
    const props = this.props
    const { dismissModal, activeTab: at, delegate, startDate, endDate, children } = this.props
    const {
      addSecondRow,
      removeSecondRow,
      handleStartTimeChange,
      handleEndTimeChange,
      handleStartDateChange,
      handleEndDateChange,
    } = this
    const { secondRow, active, endTime, startTime } = this.state
    const title = ["Request", "Offer"][at]

    return (
      <Modal
        className="modal modal-action"
        overlayClassName="modal-overlay modal-action"
        {...props}
        contentLabel="Minimal Modal Example"
      >

        <ModalHeader
          location={this.state.location}
          handleLocationChange={this.handleLocationChange}
          title={title}
          dismissModal={dismissModal}
        />

        <div className="modal-content main">
          <div className="input">
            <span className="label">Choose Start & End</span>
            <ul className="date-range">
              <li className="date date__start">
                <DateRow
                  type="Start"
                  dropoff={!secondRow}
                  pickup={true}
                  date={startDate}
                  id="start"
                  handleChange={handleStartDateChange}
                  startTime={startTime}
                  endTime={endTime}
                  handleStartTimeChange={this.handleStartTimeChange}
                  handleEndTimeChange={this.handleEndTimeChange}
                />
              </li>
              {!secondRow && (
                <li className="date date__add">
                  <button className="btn btn--tertiary btn--outline btn--s" onClick={addSecondRow}>
                    + Add Day
                  </button>
                </li>
              )}
              {secondRow && (
                <div>
                  <li className="date date__start">
                    <DateRow
                      type="End"
                      date={endDate}
                      endTime={endTime}
                      dropoff={true}
                      id="end"
                      handleChange={handleEndDateChange}
                      handleEndTimeChange={this.handleEndTimeChange}
                    />
                  </li>
                  <li className="date date__add">
                    <button className="btn btn--tertiary btn--outline btn--s" onClick={removeSecondRow}>
                      - Remove Day
                    </button>
                  </li>
                </div>
              )}
            </ul>
          </div>

          {/* TODO  */}
          {title.toLowerCase() === "request" &&
            children.length > 0 && (
              <div className="input">
                <span className="label">Select Children</span>
                <div className="row row--tight-gutter">
                  {children.map(child => (
                    <ChildRow
                      avatar={"/assets/img/placeholder/childDefault.png"}
                      key={child.id}
                      name={child.first_name}
                    />
                  ))}
                </div>
              </div>
            )}

          <div className="input input--text">
            <span className="label">Message/Special Instructions</span>
            <textarea placeholder="Type your message here..." style={{ width: `calc(100% - 5vw)` }} />
          </div>
          <br />
          <div className="">
            <strong>Total:</strong> <span className="tag tag--tertiary tag--outline">{this.state.points} Points</span>
          </div>
        </div>

        <div className="modal-content footer">
          <button className="btn btn--l btn--primary btn--block" onClick={ this.handleSend }>
            Send {title}
          </button>
        </div>
      </Modal>
    )
  }
}

// type => either "Start" or "End"
const DateRow = ({
  type,
  dropoff,
  pickup,
  id,
  handleChange,
  date,
  startTime,
  endTime,
  handleStartDateChange,
  handleEndDateChange,
  handleStartTimeChange,
  handleEndTimeChange,
}) => {
  const s = { options: timeOpts, clearable: false, searchable: false }
  let twoFours = !dropoff || !pickup
  return (
    <div className="row row--tight-gutter">
      <div className="col col--2-of-4">
        <div className="input input--text input--datepicker is--filled">
          <DatePicker placeholderText={`Select Date`} selected={date} onChange={handleChange} id={`${id}Date`} />
        </div>
      </div>
      {pickup && (
        <div className={classnames("col", { "col--1-of-4": !twoFours, "col--2-of-4": twoFours })}>
          <Select name={`endtime`} {...s} value={startTime} onChange={handleStartTimeChange} placeholder={`Pickup`} />
        </div>
      )}
      {dropoff && (
        <div className={classnames("col", { "col--1-of-4": !twoFours, "col--2-of-4": twoFours })}>
          <Select name={`starttime`} {...s} value={endTime} onChange={handleEndTimeChange} placeholder={`Dropoff`} />
        </div>
      )}
    </div>
  )
}

const ChildRow = ({ avatar, name }) => (
  <div className="entity-card col col--1-of-2 is--selected">
    <div className="card">
      <div className="entity__image avatar" style={{ backgroundImage: `url(${avatar})` }} />
      <div className="group__info tg tg--s">
        <span className="tg__title truncate">{name}</span>
      </div>
    </div>
  </div>
)
