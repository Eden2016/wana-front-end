import React from "react"

export default ({ header, content }) => (
  <div className="card">
    <div className="card__head wrapper">
      <div className="wrapper__inner">
        <span className="ts--label">{header}</span>
      </div>
    </div>
    <div className="card__body">
      <p>{content}</p>
    </div>
  </div>
)
