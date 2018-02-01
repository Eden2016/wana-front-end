import React, { Component } from "react"
import classnames from "classnames"

class SingleCardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  handleScroll = (e) => {
    // TODO: need to look more into this
    var delta = (e.type === "mousewheel") ? e.wheelDelta : e.detail * -40;
    if (delta < 0 && (this.scrollHeight - this.offsetHeight - this.scrollTop) <= 0) {
      this.scrollTop = this.scrollHeight;
      e.preventDefault();
    } else if (delta > 0 && delta > this.scrollTop) {
      this.scrollTop = 0;
      e.preventDefault();
    }
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  sendMessage = () => {
    if (this.state.inputValue === '') return;
    const { interlocutorFamily } = this.props;
    this.props.sendMessage({ message: this.state.inputValue, interlocutorFamily });
    this.setState({ inputValue: '' });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  render() {
    const { messages, interlocutorFamily, sendMessage, currentFamily } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="chat__card--messages">
        <div className="chatLogs" onWheel={this.handleScroll}>
          {
            messages.map((message, i) => {
              if (interlocutorFamily.id === message.user_id) {
                return (
                  <p key={`message-${i}`} className="message message-right">
                    <img src={interlocutorFamily.avatar} alt=""/>{ message.body }
                  </p>
                )
              } else {
                return (
                  <p key={`message-${i}`} className="message ">
                    <img src={currentFamily.avatar} alt=""/>{ message.body }
                  </p>
                )
              }
            })
          }
        </div>
        <div className="chat__card--input">
          <input placeholder="enter message" value={inputValue} onKeyPress={this.handleKeyPress} onChange={this.handleInputChange} />
          <span onClick={this.sendMessage}>send</span>
        </div>
      </div>
    )
  }
}

const ChatCard = ({ handleClick, open, title, style, closeBox, messages, interlocutorFamily, sendMessage, currentFamily }) => (
  <div className="users__card chat__card" style={style}>
    <div className="users__card--header" onClick={handleClick}>
      <span className="title">{title}</span>
      <span className="close" onClick={closeBox}>
        X
      </span>
    </div>
    <div className={classnames("chat__card--body", { hidden: !open })}>
      <SingleCardBody messages={messages} interlocutorFamily={interlocutorFamily} sendMessage={sendMessage} currentFamily={currentFamily} />
    </div>
  </div>
)

export default ChatCard
