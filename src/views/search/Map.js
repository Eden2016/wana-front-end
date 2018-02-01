import React from "react"
import { GoogleMapReact } from "google-map-react"

export default class MyMapComponent extends React.Component {

  state = {
    // center: [ 60.938043, 30.337157],
    // zoom: 9,
  }

  onChange = ({ center, zoom }) => {
    this.setState({
      center,
      zoom,
    })
  }

  render() {
    return (
      <GoogleMapReact onChange={this.onChange} center={this.state.center} zoom={this.state.zoom} />
    )
  }
}

