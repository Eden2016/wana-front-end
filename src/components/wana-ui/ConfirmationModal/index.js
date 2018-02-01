import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactModal from "react-modal"
import Button from "../../forms/Button/Button.js"
import Icon from "../icon/index"

import "./styles.scss"
class ConfirmationModal extends Component {
  render() {
    const {
      buttonText,
      onButtonClick,
      iconType,
      iconColor,
      iconSize,
      iconName,
      title,
      message,
      buttonSize,
      isOpen,
      close,
      confirm,
      buttonStyle,
      style
    } = this.props
    return (
      <ReactModal
        className="modal modal-action confirmation__modal"
        overlayClassName="modal-overlay modal-action"
        isOpen={isOpen}
        contentLabel="confirmation modal"
        style={ style }
      >
        <div>
          <div className="modal-content header">
            <p onClick={close} className="confirmation__modal--close">
              X
            </p>
          </div>

          <div
            className="modal-content main"
            style={{ textAlign: "center", backgroundColor: "#fff", paddingBottom: "4vw" }}
          >
            {iconType && <Icon type={iconType} icon={iconName} size={iconSize} color={iconColor} />}

            {title && <h3 className="confirmation__modal--title">{title}</h3>}

            {this.props.children}

            <Button size={buttonSize || "l"} style={buttonStyle} onClick={confirm}>
              {buttonText}
            </Button>
          </div>
        </div>
      </ReactModal>
    )
  }
}

// prop types
ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  iconName: PropTypes.string,
  title: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonStyle: PropTypes.object,
}

export default ConfirmationModal
