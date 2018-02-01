import React from "react"
import Button from "components/wana-ui/button"

export default ({}) => (
  <div className="fam card">
    <div
      className="fam__card-image card__image go ar ar--16-9 -reversed"
      style={{ backgroundImage: 'url("/assets/img/placeholder/family-hernandezes.png")' }}
    >
      <div className="card__image-b wrapper padding--s">
        <div className="wrapper__inner">
          <div className="tg tg--l">
            <a className="tg__title" href="#">
              Luis & Elba's Family
            </a>
            <span className="tg__sub">Palms, Los Angeles, CA</span>
          </div>
        </div>
        <div className="wrapper__inner -align-right">
          <Button type="outline" color="reversed" size="s" text="Send Message" />
        </div>
      </div>
    </div>
  </div>
)
