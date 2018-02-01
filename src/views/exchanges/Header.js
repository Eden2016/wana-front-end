import React from "react"
import Icon from "components/wana-ui/icon"

// Header
export default ({ children }) => (
  <div className="section__head bar bar--l bar--panel no--margin -border-none">
    <div className="container wrapper">
      <div className="wrapper__inner -align-center">
        <h1 className="-fontSize-l">
        { children }
        </h1>
      </div>
    </div>
  </div>
)

/*

const OfferHeader = () => [
  <a className="back__link link link--back" href="#">
    <Icon icon="caret-thin" />
    {text}
  </a>,
  <div className="wrapper__inner -align-center">
    <h1 className="-fontSize-l"> {header} </h1>
  </div>,
]

const RequestHeader = () => [
  <a className="back__link link link--back" href="#">
    <Icon icon="caret-thin" />
    {text}
  </a>,
  <div className="wrapper__inner -align-center">
    <h1 className="-fontSize-l"> {header} </h1>
  </div>,
]
*/
