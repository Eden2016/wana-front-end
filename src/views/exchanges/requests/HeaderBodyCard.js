/*
* not needed
*/

import React from "react"

export default ({ header, body }) => (
  <div className="card">
    <div className="card__head wrapper">
      <div className="wrapper__inner">
        <span className="ts--label">{header}</span>
      </div>
    </div>
    <div className="card__body">{body && body.map((b, i) => <p key={i}>{b}</p>)}</div>
  </div>
)
