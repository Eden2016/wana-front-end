import React, { Component } from "react"
import DatePicker from "../../../components/wana-ui/datepickerWrapper/DatePicker"

import RequestOfferTabs from "./RequestOfferTabs"
import "./ExchangeCard.scss"

export default class ExchangeCard extends Component {
  render() {
    const {
      changeActiveTab,
      handleDisplayEndDate,
      handleEndDateChange,
      handleStartDateChange,
      dismissModal,
      activeTab,
      displayEndDate,
      startDate,
      endDate,
      activeModal,
      activateModal,
    } = this.props

    return (
      <div className="exchange__panel card card--shadow">
        <div className="card__head wrapper -bg-primary -border-none">
          <div className="wrapper__inner -reversed">
            <h6 className="ts--label no--margin">Exchange Babysitting</h6>
          </div>
          <div className="wrapper__inner -align-right">
            <RequestOfferTabs activeTab={activeTab} changeActiveTab={changeActiveTab} />
          </div>
        </div>
        <div className="card__body">
          <ul className="date-range">
            <li className="date date__start input input--text input--datepicker is--filled">
              <DatePicker
                selected={startDate}
                placeholderText="Select Start Date"
                onChange={handleStartDateChange}
                id="startDate"
              />
            </li>

            {displayEndDate || (
              <li className="date date__add">
                <button onClick={handleDisplayEndDate} className="btn btn--tertiary btn--outline btn--s">
                  + Add Day
                </button>
              </li>
            )}

            {displayEndDate && (
              <li className="date date__start input input--text input--datepicker is--filled">
                <DatePicker
                  selected={endDate}
                  placeholderText="Select End Date"
                  onChange={handleEndDateChange}
                  id="endDate"
                />
              </li>
            )}
          </ul>
        </div>
        <div className="card__foot">
          {activeTab == 0 && (
            <button onClick={activateModal} className="btn btn--secondary btn--block">
              Request Babysitting
            </button>
          )}
          {activeTab == 1 && (
            <button onClick={activateModal} className="btn btn--secondary btn--block">
              Offer Babysitting
            </button>
          )}
          <button onClick={this.props.showMessageModal} className="btn btn--primary btn--block btn--outline btn--m">Send Message</button>
        </div>
      </div>
    )
  }
}
