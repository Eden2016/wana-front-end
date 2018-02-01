import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import TinyDropdown from '../../wana-ui/dropdown/tiny-dropdown';

import { getNotifications, readNotification } from 'api/notifications';

class NotificationsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      notifications: [],
    }
  }

  componentDidMount() {
    this.getNotifications();
  }

  getNotifications = async () => {
    const data = await getNotifications();
    if (data.success) {
      this.setState({ notifications: data.success.data });
    }
  }

  triggerDropdown = () => {
    const { showDropdown } = this.state;
    this.setState({ showDropdown: !showDropdown });
  }

  handleOutsideClick = (e) => {
    if (this.notificationsNode.contains(e.target)) return;
    this.triggerDropdown();
  }

  readNotification = async (id) => {
    const data = await readNotification(id);
    if (data.success) {
      const newNotifications = this.state.notifications.map(notification => {
        if (notification.id === id) {
          return Object.assign(notificaiton, { status: 1 });
        }
        return notification;
      })
      this.props.readNotification();
      this.setState({ notifications: newNotifications })
    }
  }

  readAll = () => {
    this.state.notifications
      .filter(notification => notification.status === 1)
      .map(notification => this.readNotification(notification.id));
  }

  render() {
    const { showDropdown, notifications } = this.state;

    return (
      <div className="notifications-wrap" onClick={this.triggerDropdown} ref={node => { this.notificationsNode = node }}>
        { this.props.children }
        <TinyDropdown className="notifications-dropdown" active={showDropdown} hideIcon={true}>
          <div className="notifications-dropdown-menu">
            <div className="notifications-dropdown-header">
              <span className="notifications-header-title">
                <svg className="link__icon icon-notification"><use xlinkHref="#icon-notification"/></svg>
                <h3>Activity</h3>
              </span>
              <a style={{ width: '125px' }} onClick={this.readAll} className="btn btn--primary btn--block">Mark All Viewed</a>
            </div>
            <div className="notifications-dropdown-list">
              <ul>
                { !notifications.length && <h5>No notifications...</h5> }
                { notifications
                  .filter(notification => notification.status === 0)
                  .map((notification, i) =>
                    <li key={`notification-${i}`} onMouseEnter={() => this.readNotification(notification.id)}>
                      <div className="notification-header">{ notifications.message }</div>
                      <span className="notification-time">{ moment.duration(moment().diff(notification.created_at)).humanize() }</span>
                      <span className="unread"></span>
                    </li>
                  )
                }
                { notifications.filter(notification => notification.status === 1).length > 0 &&
                  <h5>ALREADY VIEWED</h5>
                }
                { notifications
                  .filter(notification => notification.status === 1)
                  .map((notification, i) =>
                    <li key={`notification-unread-${i}`} onMouseEnter={() => this.readNotification(notification.id)}>
                      <div className="notification-header">{ notifications.message }</div>
                      <span className="notification-time">{ moment.duration(moment().diff(notification.created_at)).humanize() }</span>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </TinyDropdown>
      </div>
    );
  }
}

export default NotificationsDropdown;
