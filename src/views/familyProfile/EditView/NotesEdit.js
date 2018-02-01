import React, { Component } from "react"
import "./NotesEdit.scss"

export default class NotesEdit extends Component {
  render() {
    return (
      <div className="card__body no--pad-b">
        <h6 className="ts--label no--margin" className="notes__header">
          Notes
        </h6>
        <div className="notes__body">
          <textarea
            name="notes"
            placeholder="Types Notes about your family here"
            name="description"
            value={this.props.description}
            onChange={this.props.handleFamilyChange}
          />
        </div>
      </div>
    )
  }
}
