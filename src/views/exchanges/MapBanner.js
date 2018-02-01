import React, { Component } from "react"
import MapsBg from "../../components/wana-ui/MapsBg/MapsBg"


export default ({zoom , location}) => (
  <div className="container">
    <MapsBg location={location} zoom={zoom || 12}>
      <div className="banner banner--m banner--empty" style={{ opacity: 0 }} />
    </MapsBg>
  </div>
)
