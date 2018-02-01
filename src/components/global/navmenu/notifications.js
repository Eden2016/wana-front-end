import React, { Component } from 'react';

import NotificationsDropdown from './NotificationsDropdown';
import { getUnreadAmountNotifications } from 'api/notifications';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      amount: 0,
    }
  }

  componentDidMount() {
    this.getAmount();
  }

  readNotification = () => {
    this.setState({ amount: this.state.amount - 1 });
  }

  getAmount = async () => {
    const data = await getUnreadAmountNotifications();
    this.setState({ amount: data.success });
  }

  triggerDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render() {
    const { showDropdown, amount } = this.state;
    return(
        <NotificationsDropdown readNotificaiton={this.readNotification}>
          <div className="link link--primary link--icon" data-badge={`${amount}`}>
            <svg className="icon-notification icon--s"><use xlinkHref="#icon-notification"/></svg>
          </div>
        </NotificationsDropdown>
    )
  }
}

export default Notifications;
