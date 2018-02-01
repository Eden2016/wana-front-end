import React from "react"
import Icon from "components/wana-ui/icon"

export default ({ location, dismissModal, title, handleLocationChange }) => (
  <div className="modal-content header">
    <div className="modal__title flex__col">
      <Icon icon="sits" type="box" color="primary" />
      <ul className="list list--inline list--padded">
        <li className="item">
          <h3>{title} Babysitting</h3>
        </li>
        <li className="item">
          <div className="toggle toggle--tabs">
            <label className="toggle__tab">
              <input
                type="radio"
                name="location"
                value="my house"
                checked={location == "my house"}
                onChange={handleLocationChange}
              />
              <span>My House</span>
            </label>
            <label className="toggle__tab">
              <input
                type="radio"
                name="location"
                value="their house"
                checked={location == "their house"}
                onChange={handleLocationChange}
              />
              <span>Their House</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div className="modal__close flex__col -align-right">
      <button className="btn btn--link btn--s btn--icon" onClick={dismissModal}>
        {/* <Icon icon="close"> */}
        <span style={{ fontSize: "2em" }}> X </span>
      </button>
    </div>
  </div>
)
