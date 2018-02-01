import React from "react"
import Button from "components/wana-ui/button"

export default ({ family = {}, status }) => (
  <div className="card wrapper">
    {console.log(status)}
    <div className="wrapper__inner">
      <div className="tg tg--s">
        <div className="avatar avatar--square tg__cell" style={{ backgroundImage: `url("${family.img}")` }} />
        <div className="tg__cell">
          <span className="tg__title">{family.name}</span>
          <span className="tg__sub -emphasized">Accepted</span>
        </div>
      </div>
    </div>
    <div className="wrapper__inner -align-right">
      {status === "pending" && <PendingCardButtons />}
      {status === "active" && <ActiveCardButtons />}
      {status === "declined" && <DeclinedCardButtons />}
    </div>
  </div>
)

const PendingCardButtons = ({}) => (
  <ul className="list list--inline">
    <li className="item">
      <Button type="outline" color="tertiary" size="s" text="Decline" />
    </li>
    <li className="item">
      <Button type="solid" color="primary" size="s" text="Choose Sitter" />
    </li>
  </ul>
)

const ActiveCardButtons = ({}) => <Button type="solid" color="warning" size="s" text="Cancel" />
const DeclinedCardButtons = ({}) => <span> declined </span>
