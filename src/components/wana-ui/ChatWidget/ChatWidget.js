import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import UsersContainer from './UsersContainer';
import ChatCard from './ChatCard';
import { pusher_api_key } from '../../../config/config';
import { getSubscription, getThreads, getThreadMessages, sendMessage } from 'api/messages';

import './ChatWidget.scss';

const mapStateToProps = (state) => ({
  userInfo: state.auth.userData,
})

class ChatWidget extends Component {
  pusher = null;
  channel = null;
  state = {
    mainWindowOpen: false,
    threads: [{
      id: 1,
      participants: [{
        user_id: 4,
        name: 'Stevens'
      }]
    }],
    chatting: false,
    chatWindowOpen: false,
    openedThread: null,
    messages: [],
    channel: null,
  }

  mainWindowToggle = () => {
    this.setState({ mainWindowOpen: !this.state.mainWindowOpen })
  }

  componentDidMount() {
    this.subscribe();
    this.getThreads();
    this.pusher = new Pusher(pusher_api_key, {
      cluster: "eu",
      encrypted: true,
    })

    this.pusher.connection.bind("error", function(err) {
      console.log(err.error.data.code)
    })

  }

  handleUserClick = (thread) => {
    this.setState({ chatting: true, chatWindowOpen: true, openedThread: thread });
    this.interval = setInterval(async () => {
      const res = await getThreadMessages(thread.thread.id);
      if (res.success) {
        this.setState({ messages: res.success.messages });
      }
    }, 4000);

  }

  subscribe = async () => {
    const res = await getSubscription();
    if (res.success) {
      this.setState({ channel: res.success });
      this.channel = this.pusher.subscribe(res.success.channel_name);
      this.channel.bind('message', data => {
        console.log(data);
      })
    }
  }

  getThreads = () => {
    this.interval2 = setInterval(async () => {
      const res = await getThreads();
      if (res.success) {
        this.setState({ threads: res.success });
      }
    }, 5000);
  }

  closeBox = e => {
    clearInterval(this.interval);
    e.preventDefault();
    this.setState({ chatting: false });
  }

  chatWindowOpen = () => {
    this.setState({ chatWindowOpen: !this.state.chatWindowOpen })
  }

  sendMessage = async (data) => {
    const res = await sendMessage({ message: data.message, recepient_id: data.interlocutorFamily.id });
    if (res.success) {
      this.setState({ messages: this.state.messages.concat(res.success) });
    }
  }

  render() {
    const { mainWindowOpen, chatWindow, chatWindowOpen, chatting, chatPartner, threads, openedThread, messages } = this.state;
    return (
      <div className="chatWidget">
        <UsersContainer
          handleClick={this.mainWindowToggle}
          title={`${threads.length} Threads`}
          open={mainWindowOpen}
          threads={threads}
          main={true}
          onUserClick={this.handleUserClick}
          currentFamily={this.props.userInfo}
        />

        <div style={{ alignSelf: "flex-end", pointerEvents: "all" }}>
          {chatting && (
            <ChatCard
              title={openedThread.family.name}
              interlocutorFamily={openedThread.family}
              currentFamily={this.props.userInfo}
              messages={messages}
              open={chatWindowOpen}
              handleClick={() => this.setState({ chatWindowOpen: !this.state.chatWindowOpen })}
              closeBox={this.closeBox}
              sendMessage={this.sendMessage}
            />
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ChatWidget);
