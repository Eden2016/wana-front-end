import React, { Component } from 'react';
import NavMenu from "components/global/navmenu"
import Navigation from './navigation';

import { getUserPrivacySettings, changeUserPrivacySettings } from 'api/settings-privacy';

class AccountPrivacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primary_contact_sender: false,
      secondary_contact_info: false,
      child_photo: false,
      child_first_name: false,
      medical_vaccinations_binary: false,
      instruction_for_sleeping: false,
      medical_vaccinations_notes: false,
      instruction_for_eating: false,
    }
  }

  async componentDidMount() {
    const res = await getUserPrivacySettings();
    if (Array.isArray(res)) return;
    this.setData(res.success);
  }

  changeField = async (key) => {
    const res = await changeUserPrivacySettings({ [key]: !this.state[key] });
    this.setData(res.success);
  }

  setData = (data) => {
    this.setState(data);
  }

  render() {
    const {
      primary_contact_sender,
      secondary_contact_info,
      child_photo,
      child_first_name,
      medical_vaccinations_notes,
      medical_vaccinations_binary,
      instruction_for_eating,
      instruction_for_sleeping
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
                  <h1 className="-fontSize-l">Manage Privacy Settings</h1>
                </div>
              </div>
            </div>
            <div className="page-tab__content">
              <div className="container container--s">
                <table id="emailNotificationSettings" className="table table--cards toggle__group" data-target="#optionAll">
                  <thead>
                    <tr>
                      <th>
                        Public Settings
                      </th>
                      <th className="-align-right">
                        Off/On
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>
                        Primary Contact Gender
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={primary_contact_sender} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('primary_contact_sender')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Secondary Contact Info
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={secondary_contact_info} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('secondary_contact_info')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Child Photo
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={child_photo} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('child_photo')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Child First Name
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={child_first_name} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('child_first_name')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Medical Vaccinations Binary
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={medical_vaccinations_binary} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('medical_vaccinations_binary')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Medical Vaccinations Notes
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={medical_vaccinations_notes} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('medical_vaccinations_notes')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Instruction for Eating
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={instruction_for_eating} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('instruction_for_eating')}></label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Instruction for Sleeping
                      </td>
                      <td className="-align-right">
                        <div className="input input--toggle">
                          <input checked={instruction_for_sleeping} onChange={this.changeField} type="checkbox" />
                          <label onClick={() => this.changeField('instruction_for_sleeping')}></label>
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

export default AccountPrivacy;
