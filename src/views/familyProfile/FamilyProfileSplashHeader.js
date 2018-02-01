import React from "react"
import moment from "moment"
import classnames from "classnames"

export default ({
  sits,
  connections,
  favorited,
  experiencedSitter,
  family,
  address,
  mapImg = "/assets/img/mapPlaceholder.png",
  favOrUnFavFamily,
  activateEditMode,
  ownFamily
}) => (
  <div className="banner banner--empty">
    <div
      className="cover container"
      {...family && family.cover && { style: { backgroundImage: `url(${family && family.cover})` } }}
    >
      <div className="cover__info cover__info--t">
        <div className="wrapper">
          <div className="wrapper__inner">
            {experiencedSitter && (
              <ul className="tags__list">
                <li className="tag tag--l"> Experienced Sitter</li>
              </ul>
            )}
          </div>

          <div className="wrapper__inner -align-right">
            <ul className="tags__list list list--inline">
              <li className="tag tag--icon">
                <svg className="icon-social-facebook">
                  <use xlinkHref="#icon-social-facebook" />
                </svg>
              </li>

              <li className="tag">{sits} Sits</li>
              <li className="tag">{connections} Connections</li>
              <li className="item margin--s no--margin-r no--margin-tb">
                <button
                  onClick={favOrUnFavFamily}
                  className={classnames("btn btn--icon btn--toggle btn--fav", {
                    "is--active": favorited,
                  })}
                >
                  <svg className="icon-heart -off">
                    <use xlinkHref="#icon-heart" />
                  </svg>

                  <svg className="icon-heart-filled -on">
                    <use xlinkHref="#icon-heart-filled" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cover__info cover__info--b -reversed">
        <div className="splash-info-container">
          <div>
            <ul className="list list--inline">
              <li className="item margin--s no--margin-tb no--margin-l">
                <div className="avatar avatar--xl avatar--square avatar--outlined">
                  {/* <div className="marker" /> */}
                  <div id="profileMap" className="map">
                    <img style={{ height: "100%" }} src={mapImg} />
                  </div>
                </div>
              </li>
              <li className="item">
                <h1 className="heading margin--xs no--margin-lr">{(family && family.name) || "..."}</h1>
                <h2 className="-fontSize-l">
                  {address && address.street ? address.street : "No address provided yet"}
                  <span className="margin--xs no--margin-tb">•</span>
                  {(family && moment(family.created_at).format("MMM Do YY")) || "..."}
                </h2>
              </li>
            </ul>
          </div>
          {ownFamily && (
            <div className="edit-privacy-buttons">
              <button className="btn btn--outline edit-button" onClick={activateEditMode}>
                edit profile
              </button>
              <button className="btn btn--secondary"> privay sitting</button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)
