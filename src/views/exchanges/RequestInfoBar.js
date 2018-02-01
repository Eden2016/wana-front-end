import React from "react"
import TinyDropdown from "components/wana-ui/dropdown/tiny-dropdown"

export default ({ from = {}, to = {}, points = "", cancel, edit }) => (
  <div className="bar bar--l bar--overlap card card--shadow">
    <div className="card__body wrapper">
      <div className="wrapper__inner">
        <ul className="list list--inline list--padded">
          <li className="item">
            <ul className="date-group">
              <li>
                <div className="date">
                  <span className="day">{from.day}</span>
                  <span className="month">{from.month}</span>
                </div>
                <div className="time">{from.time}</div>
              </li>
              <li className="divider">&ndash;</li>
              <li>
                <div className="date">
                  <span className="day">{to.day}</span>
                  <span className="month">{to.month}</span>
                </div>
                <div className="time">{to.time}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="wrapper__inner -align-right">
        <ul className="list list--inline list--padded">
          <li className="item">
            <span className="tag tag--secondary tag--s">Earn up to {points} Points</span>
          </li>
          <li className="item">
            <TinyDropdown className="dropdown--no-caret">
              <ul className="list list--nav">
                <li className="item" onClick={edit}>
                  Edit
                </li>
                <li className="item" onClick={cancel}>
                  Cancel
                </li>
              </ul>
            </TinyDropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
