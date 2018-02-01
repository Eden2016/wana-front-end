import React from "react"
import ThumbnailGallery from "./ThumbnailGallery"
import FamilyTraits from "./FamilyTraits"

export default ({ thumbs, traits, family = {}, photos = [] }) => (
  <div className="about__panel card card--no-hover">
    <div className="card__head wrapper">
      <div className="wrapper__inner">
        <h6 className="ts--label no--margin">{family && family.name ? family.name + "'s" : "..."} Household</h6>
      </div>
    </div>
    {family.description && (
      <div className="card__body card__body--inset">
        <p>{family.description}</p>
      </div>
    ) || <div style={{padding: "5px 0"}}></div>}
    <FamilyTraits traits={traits} />
    <ThumbnailGallery photos={photos} />
  </div>
)
