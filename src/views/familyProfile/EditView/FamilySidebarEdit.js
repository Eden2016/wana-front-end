import React, { Component } from "react"
import NotesEdit from "./NotesEdit"
import TraitsEdit from "./TraitsEdit"
import HouseHoldPhotosEdit from "./HouseHoldPhotosEdit"

export default class FamilySidebarEdit extends Component {
  state = {}
  render() {
    const { description } = this.props.family || {} // just in case

    return (
      <div className="sidebar">
        <div className="card card--no-hover" style={{ width: "100%", overflow: "visible" }}>
          <div className="card__head wrapper">
            <div className="wrapper__inner">
              <h6 className="ts--label no--margin"> about our home </h6>
            </div>
          </div>
          <NotesEdit handleFamilyChange={this.props.handleFamilyChange} description={description} />
          <div className="card__body">
            <TraitsEdit traits={this.props.traits} handleTraitsChange={this.props.handleTraitsChange} />
          </div>
          <div className="card__body">
            <HouseHoldPhotosEdit photos={this.props.photos}/>
          </div>
        </div>
      </div>
    )
  }
}
