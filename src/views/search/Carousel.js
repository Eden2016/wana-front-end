import React, { Component } from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import Card from "../../components/wana-ui/FamilyCard/FamilyCard"
import "./slider.scss"

class Carousel extends Component {
  componentDidMount() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 500)
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    var mediumSetting= {
      ...settings,
      slidesToShow: 2,
    }
    var smallerSetting= {
      ...settings,
      slidesToShow: 1,
    }

    return (
      <Slider {...settings} responsive={[{ breakpoint: 766, settings: {...mediumSetting} }, { breakpoint: 535, settings: {...smallerSetting} }]}>

          {/* <div style={{background: "blue", height: "150px"}}></div>
          <div style={{background: "red", height: "150px"}}></div>
          <div style={{background: "blue", height: "150px"}}></div>
          <div style={{background: "red", height: "150px"}}></div>
          <div style={{background: "blue", height: "150px"}}></div>
          <div style={{background: "red", height: "150px"}}></div> */}

<div>
          <Card
            href="/profile/1"
            title="Luis & Elba's Family"
            subTitle="2 Kids  •  Mar Vista"
            fbText="You and Luis are friends on Facebook"
            backgroundImage="/assets/img/placeholder/family-hernandezes.png"
            adults={[
              {
                name: "adult one",
                img:
                  "https://vignette4.wikia.nocookie.net/thehungergames/images/1/17/270px-Sweet-emily-rudd-wallpaper.jpg/revision/latest?cb=20140129014835",
              },
              {
                name: "adult two",
                img: "https://s-media-cache-ak0.pinimg.com/564x/36/46/29/364629b6e228bd4885fb56c06b3e0d87.jpg",
              },
            ]}
            children={[{}, {}]}
          />
          </div>
          <div>
          <Card
            href="/profile/1"
            title="Elisha's Family"
            subTitle="1 Child  •  Palms"
            backgroundImage=" /assets/img/placeholder/family-todds.png"
            adults={[{}, {}]}
            children={[{}, {}]}
          />
          </div>
          <div>
          <Card
            href="/profile/1"
            title="Luis & Elba's Family"
            subTitle="2 Kids  •  Mar Vista"
            adults={[{}, {}]}
            children={[{}]}
          />
          </div>
      </Slider>
    )
  }
}

export default Carousel
