import React from "react"
import moment from "moment"
import classnames from "classnames"
import Select from "react-select"
import Input from "../../../components/wana-ui/input/index"
import "./edit.scss"
import Loading from "../../../assets/img/load-spin.svg"

import CoverDropzone from "./CoverDropzone"
import states from "./states"

export default ({
  sits,
  connections,
  favorited,
  experiencedSitter,
  preview,
  family,
  address,
  mapImg = "/assets/img/mapPlaceholder.png",
  favOrUnFavFamily,
  deActivateEditMode,
  saveChanges,
  onCoverDrop,
  onCoverDragOver,
  onCoverDragLeave,
  handleFamilyChange,
  handleFamilyAddressChange,
  loading,
}) => {
  let dropzone
  return (
    <div className="banner banner--empty">
      <div
        className="cover container"
        {...preview && { style: { backgroundImage: `url(${preview})` } }}
      >
        <CoverDropzone
          onCoverDrop={onCoverDrop}
          onCoverDragOver={onCoverDragOver}
          onCoverDragLeave={onCoverDragLeave}
          accept="image/jpeg, image/png"
          classes={["cover__dropzone"]}
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
        </CoverDropzone>

        <div className="cover__info cover__info--b -reversed">
          <div className="splash-info-container">
            <div>
              <div>
                <div className="edit__input--container" style={{ marginBottom: "0.5em" }}>
                  <label htmlFor="street">Street</label>
                  <input
                    id="street"
                    name="street"
                    onChange={handleFamilyAddressChange}
                    value={address && address.street}
                    type="text"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="family-zip-container">
                <div className="edit__input--container town">
                  <label htmlFor="street">Town</label>
                  <input
                    id="street"
                    name="Town"
                    onChange={handleFamilyAddressChange}
                    value={address && address.street}
                    type="text"
                  />
                </div>
                <div className="edit__input--container state">
                  <label htmlFor="state">State</label>
                  <Select
                    name="state"
                    value={address && address.state}
                    onChange={handleFamilyAddressChange}
                    options={states}
                    searchable={true}
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                  />
                </div>
                <div className="edit__input--container">
                  <label htmlFor="zipcode">zip code</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    onChange={handleFamilyAddressChange}
                    value={address && address.zipcode}
                    style={{ width: "90px" }}
                  />
                </div>
              </div>
            </div>

            <div className="right__container">
              <div className="edit__input--container family">
                <label htmlFor="familyName"> family name</label>
                <input
                  id="familyName"
                  name="name"
                  style={{ width: "100%" }}
                  onChange={handleFamilyChange}
                  value={family && family.name}
                  type="text"
                />
              </div>

              <div className="edit-privacy-buttons edit-privacy-buttons-edit">
                <button
                  className="btn btn--outline edit-button"
                  {...loading && { disabled: true }}
                  onClick={!loading && deActivateEditMode}
                >
                  Cancel
                </button>
                <button
                  className="btn btn--secondary save__btn"
                  {...loading && { disabled: true }}
                  onClick={!loading && saveChanges}
                >
                  {loading ? (
                    <img src="../../../assets/img/load-spin.svg" style={{ width: "30px", height: "30px" }} />
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
