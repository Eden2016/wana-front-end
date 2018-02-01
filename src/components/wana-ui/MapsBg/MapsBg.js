import React, { Component } from "react"
import PropTypes from "prop-types"
import api from "../../../api/index"

export default class MapsBg extends Component {
  state = {
    imgUrl: "",
  }
  mounted = false

  componentDidMount() {
    this.mounted = true
    const { location, height, width, zoom } = this.props
    api.getGoogleMapBackgroundImage(location, height, width, zoom).then(res => {
      this.mounted && this.setState({
        imgUrl: res.success,
      })
    })
  }

  componentWillUnmount(){
    this.mounted = false
  }

  render() {
    if (!this.state.imgUrl) return null

    let style = {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%,50%",
      backgroundImage: `url(${this.state.imgUrl})`,
      backgroundSize: "cover",
    }
    return (
      <div style={style} id="s">
        {this.props.children}
      </div>
    )
  }
}
