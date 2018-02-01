import React from "react"
import Button from "components/wana-ui/button"

import Card from "./Card"

export default ({ cards }) => {
  if (!cards || cards.length <= 0) return null
  return (
    <div className="card-table card-table--list">
      {cards.map((card, i) => <Card key={i} family={card.family} status={card.status} />)}
    </div>
  )
}
