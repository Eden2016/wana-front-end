import React from "react"
import classnames from "classnames"
import "./iconInput.scss"

export default ({ placeholder, value, icon, onChange, name, error }) => (
  <div className="input input--text input--has-icon">
    <input
      type="text"
      className={classnames("input__field", {error: error})}
      name={name}
      placeholder={placeholder}
      {...{ value }}
      onChange={onChange}
    />
    <label className="input__icon">
      <svg className={icon}>
        <use xlinkHref={`#${icon}`} />
      </svg>
    </label>
  </div>
)
