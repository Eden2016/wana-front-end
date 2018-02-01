import React from "react"
import Dropdown from "./Dropdown"

export default props => (
  <div className="bar bar--l bar--overlap card card--shadow">
    <div className="card__body wrapper">
      <div className="wrapper__inner">
        <ul className="list list--inline list--padded">
          <li className="item">
            <ul className="date-group">
              <li>
                <div className="date">
                  <span className="day">17</span>
                  <span className="month">Sep</span>
                </div>
                <div className="time">7:30 AM</div>
              </li>
              <li className="divider">&ndash;</li>
              <li>
                <div className="date">
                  <span className="day">19</span>
                  <span className="month">Sep</span>
                </div>
                <div className="time">4:00 PM</div>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="user__group">
              <div className="avatar avatar--s" />
              <div className="avatar avatar--s" />
              <div className="avatar avatar--s" />
            </div>
          </li>
        </ul>
      </div>
      <div className="wrapper__inner -align-right">
        <ul className="list list--inline list--padded">
          <li className="item">
            <span className="tag tag--outline tag--s">Spend 48 Points</span>
          </li>
          <li className="item">
            {/* dropdown */}
            <Dropdown
              cName="dropdown--no-caret"
              wrapperClass="list list--nav"
              itemsClass="item"
              items={["Edit", "Cancel"]}
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
)
