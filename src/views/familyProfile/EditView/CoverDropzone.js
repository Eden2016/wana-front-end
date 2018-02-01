import React, { Component } from "react"
import Dropzone from "react-dropzone"

export default class CoverDropZone extends Component {
  state = {
    file: null,
  }
  render() {
    const { onCoverDrop, onCoverDragOver, onCoverDragLeave } = this.props
    return (
      <div className={this.props.classes.join(" ")}>
        {/* onDrop={} onDragOver={} onDragLeave={} */}
        <Dropzone
          onDrop={onCoverDrop}
          onDragOver={onCoverDragOver}
          onDragLeave={onCoverDragLeave}
          style={{ width: "auto", height: "auto", border: "none", backgroundColor: "yellow" }}
        >
          <div className="cover__dropzone--inner">
            <div>
              <img src="/assets/img/upload.png" />
              {this.state.file && <img src={this.state.file} alt="" />}
              <h5>Drag & Drop</h5>
              <p>Upload a new family picture</p>
            </div>
          </div>
        </Dropzone>
      </div>
    )
  }
}
