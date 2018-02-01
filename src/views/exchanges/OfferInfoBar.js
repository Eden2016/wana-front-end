import React from "react"
import Button from "components/wana-ui/button"

export default ({ from, to, points, decline, accept }) => (
  <div className="bar bar--l bar--overlap card card--shadow">
    <div className="card__body wrapper">
      <div className="wrapper__inner">
        <ul className="list list--inline list--padded">
          <li className="item">
            <strong>Availablity:</strong>
          </li>
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
          <li className="item">
            <span className="tag tag--outline tag--s">Cost up to {points} Points</span>
          </li>
        </ul>
      </div>
      <div className="wrapper__inner -align-right">
        <ul className="list list--inline">
          <li className="item">
            <Button type="outline" color="tertiary" size="m" text="Decline" onClick={decline} />
          </li>
          <li className="item">
            <Button type="solid" color="primary" text="Accept Offer" onClick={accept} />
          </li>
        </ul>
      </div>
    </div>
  </div>
)
