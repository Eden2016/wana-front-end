import React, { Component } from 'react';
import Navigation from './navigation';
import NavMenu from "components/global/navmenu"

import { getUserEmailSettings, changeUserEmailSettings } from '../../api/settings-email-prefs';

class AccountEmailPrefs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someone_sends_me_a_message: false,
      a_dispute_has_been_resolved_opened: false,
      a_sit_is_completed_points_sent: false,
      someone_offers_a_sit: false,
      someone_requests_a_sit: false,
      i_have_a_new_connection_on_facebook: false,
      notify_me_for_all_activity: false,
    }
  }

  async componentDidMount() {
    const res = await getUserEmailSettings();
    if (!res.success.length) return;
    this.setData(res.success[0]);
  }

  changeField = async (key) => {
    if (key === 'notify_me_for_all_activity') {
      this.notifyAll();
      return;
    }
    const res = await changeUserEmailSettings({ [key]: !this.state[key] });
    this.setData(res.success);
  }

  setData = (data) => {
    const isNotifyAll = Object.keys(data).reduce((prev, dataKey) => {
      if (!prev) return false;
      if (this.state[dataKey] || this.state[dataKey] === false) {
        if (data[dataKey]) return true;
        return false;
      }
      return prev;
    }, true);

    const state = Object.keys(data).reduce((prev, dataKey) => {
      if (this.state[dataKey] || this.state[dataKey] === false) return Object.assign(prev, { [dataKey]: data[dataKey] });
      return prev;
    }, {});

    this.setState(Object.assign(state, { notify_me_for_all_activity: isNotifyAll }));
  }

  notifyAll = async () => {
    let data;
    if (this.state['notify_me_for_all_activity']) {
      data = Object.keys(this.state).reduce((prev, dataKey) => {
        return Object.assign(prev, { [dataKey]: false });
      }, {})
    } else {
      data = Object.keys(this.state).reduce((prev, dataKey) => {
        return Object.assign(prev, { [dataKey]: true });
      }, {})
    }

    const res = await changeUserEmailSettings(data);
    this.setData(res.success);
  }

  render() {
    const {
      notify_me_for_all_activity,
      someone_sends_me_a_message,
      someone_requests_a_sit,
      a_dispute_has_been_resolved_opened,
      a_sit_is_completed_points_sent,
      someone_offers_a_sit,
      i_have_a_new_connection_on_facebook,
    } = this.state;

    return (
      <div style={{height: '100vh', background: 'whitesmoke'}}>
        <NavMenu history={this.props.history} />
        <div>
          <Navigation />
          <div className="content__section">
            <div className="section__head bar bar--l bar--panel -border-none">
              <div className="container wrapper">
                <div className="wrapper__inner">
                  <h1 className="-fontSize-l">Email Preferences</h1>
                </div>
                <div className="wrapper__inner -align-right">
                  <ul className="list list--inline">
                    <li className="item margin--xs no--margin-tb no--margin-l">
                      Notify me for all activity
                    </li>
                    <li className="item">
                      <div className="input input--toggle input--toggle-all">
                        <input checked={notify_me_for_all_activity} onChange={this.changeField} type="checkbox" />
                        <label onClick={() => this.changeField('notify_me_for_all_activity')}></label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="page-tab__content">
              <div className="container container--s">
                <table id="emailNotificationSettings" className="table table--cards toggle__group" data-target="#optionAll">
                  <thead>
                    <tr>
                      <th>
                        Email Me When:
                      </th>
                      <th className="-align-right">
                        Off/On
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>
                        Someone sends me a message
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={someone_sends_me_a_message} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('someone_sends_me_a_message')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Someone requests a sit
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={someone_requests_a_sit} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('someone_requests_a_sit')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        A dispute has been resolved opened
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={a_dispute_has_been_resolved_opened} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('a_dispute_has_been_resolved_opened')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        A sit is completed points sent
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={a_sit_is_completed_points_sent} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('a_sit_is_completed_points_sent')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Someone offers a sit
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={someone_offers_a_sit} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('someone_offers_a_sit')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        I have a new connection on facebook
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={i_have_a_new_connection_on_facebook} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('i_have_a_new_connection_on_facebook')}></label>
                        </div>
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AccountEmailPrefs;
