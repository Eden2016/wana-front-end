import React from "react"
import classnames from "classnames"

const Button = ({ type, color, text, size, children, block, onClick ,style}) => (
  // <button type="submit" className="btn btn--primary btn--block btn--l">
  // "btn btn--primary btn--block btn--l" [``]
  <button
    type={type || "submit"}
    className={classnames("btn", { [`btn--${color}`]: !!color, "btn--block": !!block, [`btn--${size}`]: !!size })}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
)

export default Button
