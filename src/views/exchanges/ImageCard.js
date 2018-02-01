import React, { Component } from "react"
import Button from "components/wana-ui/button"

// {
//   cover: "/assets/img/placeholder/family-hernandezes.png",
//   link: "/",
//   name: "Luis & Elba's Family",
//   location: "Palms, Los Angeles, CA",
// }

import { Link } from "react-router-dom"
//  img, familyName, familyLocation, handleSend
// /assets/img/placeholder/family-hernandezes.png
export default ({ family:{cover, name, location, link }, handleSend }) => (
  <div className="fam card">
    <div className="fam__card-image card__image go ar ar--16-9 -reversed" style={{ backgroundImage: `url(${cover})` }}>
      <div className="card__image-b wrapper padding--s">
        <div className="wrapper__inner">
          <div className="tg tg--l">
            <Link className="tg__title" to={ link }>
              {name}
            </Link>
            <span className="tg__sub">{ location }</span>
          </div>
        </div>
        <div className="wrapper__inner -align-right">
          <Button type="outline" color="reversed" size="s" text="Send Message"  onclick={handleSend}/>
        </div>
      </div>
    </div>
  </div>
)


// class ImageCard extends Component {
//   state = {

//   }
//   component
//   render(){

//   }
// }






