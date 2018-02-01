import React, { Component } from "react"
import DatePicker from "./CustomDatepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment"

import "./DatePicker.css"
export default props => (
  <div className="datepicker__wrapper">
    <DatePicker dateFormat="MMM Do YY" {...props} type="text" className="input__field" />
    <label className="input__icon">
      <svg className="icon-date">
        <use xlinkHref="#icon-date" />
      </svg>
    </label>
  </div>
)
