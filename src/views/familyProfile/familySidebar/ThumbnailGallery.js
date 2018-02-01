import React from "react"

export default ({ photos }) => {
  let more = false
  if(photos.length > 5){
    more = photos.length - 5
  }
  return (
    photos.length > 0 && (
      <div className="card__foot">
        <ul className="list list--thumbs">
          {photos.slice(0, 5).map(({ house_photo: imgSrc }, i) => <Thumb key={i} imgSrc={imgSrc} />)}
          {more && <Thumb imgSrc={photos[6].house_photo} dataMore={`+${photos.length - 5}`} />}
        </ul>
      </div>
    )
  )
}

const Thumb = ({ imgSrc, dataMore }) => (
  <li className="thumb" {...dataMore && { "data-more": dataMore }}>
    {imgSrc && <img src={imgSrc} />}
  </li>
)
