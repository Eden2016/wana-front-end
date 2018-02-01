import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as moment from 'moment';

import { getAppointmentView, getFamily, getFamilyMembers, getCoordinates, acceptReceivedRequest, acceptReceivedOffer } from '../../api/sittings';
import ChildInfo from './sitting-details/child-info';
import AdultInfo from './sitting-details/adult-info';
import SittingsSidebar from './sitting-details/sidebar';
import MapComponent from './sitting-details/map';
import RequestModal from './sitting-details/request-modal';
import ApproveModal from './sitting-details/approve-modal';
import NavMenu from "components/global/navmenu"


class SittingDetails extends Component {
  constructor(props) {
    super(props);
    const location = this.props.location.pathname.split('/');
    this.state = {
      id: Number(location[location.length - 1]),
      sit: null,
      showRequestModal: false,
      showApproveModal: false,
      family: null,
      activeChildId: null,
      activeAdultId: null,
      isChildExpand: false,
      isAdultExpand: false,
      familyInfo: null,
      latLng: null,
    }
  }

  async componentDidMount() {
    const { id } = this.state;
    const res = await getAppointmentView(id);
    if (res.success) {
      this.setState({ sit: res.success });
      this.getLocation(res.success.location);
      this.getFamilyDetails(res.success.created_by);
      this.getFamilyInfo(res.success.created_by);
    }
  }

  getFamilyDetails = async (id) => {
    const res = await getFamilyMembers(id);
    if (res.success) {
      const adult = res.success.find(member => member.role !== 2);
      const child = res.success.find(member => member.role === 2);
      this.setState({ family: res.success, activeAdultId: adult ? adult.id : null, activeChildId: child ? child.id : null });
    }
  }

  getFamilyInfo = async (id) => {
    const res = await getFamily(id);
    if (res.success) {
      this.setState({ familyInfo: res.success[0] });
    }
  }

  accept = async () => {
    const { sit } = this.state;
    let res;
    if (sit.type === 'request') {
      res = await acceptReceivedRequest(null, sit.id);
    } else {
      res = await acceptReceivedOffer(null, sit.id);
    }
  }

  getLocation = async (address) => {
    const data = await getCoordinates(address);
    if (!data.results.length) return;
    this.setState({ latLng: data.results[0].geometry.location });
  }

  buildHeader = () => {
    const { sit, familyInfo } = this.state;
    const { type, status } = sit;
    switch (status) {
      case 0:
        return 'Sitting is Inactive';
        break;
      case 1:
        if (!familyInfo) return '';
        if (type === 'request') {
          return `You're requesting for a sit!`;
        } else {
          `You're offering ${familyInfo.name} a sit`;
        }
        break;
      case 2:
        if (!familyInfo) return '';
        if (type === 'request') {
          return `Your sit has been accepted`;
        } else {
          return `You're going to sit for a ${familyInfo.name}`;
        }
        break;
      case 3:
        return 'This sitting was declined';
        break;
      case 5:
        return `This sitting was cancelled`;
        break;
      case 6:
        if (!familyInfo) return '';
        if (type === 'request') {
          return `${familyInfo.name} sat for you`;
        } else {
          return `You sat for ${getFamilyInfo.name}`;
        }
      default:
        break;
    }
  }

  triggerExpand = (name) => {
    this.setState({ [name]: !this.state[name] })
  }

  getCoordinates = (location) => {

  }

  request = (data) => {
    const { sit } = this.state;
    console.log(data);
  }

  render() {
    const {
      showApproveModal,
      showRequestModal,
      family,
      activeAdultId,
      activeChildId,
      sit,
      isAdultExpand,
      isChildExpand,
      familyInfo,
      latLng,
    } = this.state;

    if (!sit) {
      return (<div></div>);
    }

    const startDate = new Date(sit.start_time);
    const endDate = new Date(sit.end_time);

    return (
      <section className="app__body" style={{ backgroundColor: '#fff' }}>
        <NavMenu history={this.props.history} />
        { showApproveModal && <ApproveModal points={Math.round(sit.duration)} accept={this.accept} closeModal={() => this.setState({ showApproveModal: false })} /> }
        { showRequestModal && <RequestModal points={Math.round(sit.duration)} sit={sit} request={this.request} closeModal={() => this.setState({ showRequestModal: false })} /> }
        <div className="content__section">
          <div className="section__head bar bar--l bar--panel no--margin -border-none">
            <div className="container wrapper">
              <Link className="back__link link link--back" to="/sitting">
                              <svg className="icon-caret-thin"><use></use></svg>
                              My Upcoming Sits
                          </Link>
              <div className="wrapper__inner -align-center">
                <h1 className="-fontSize-l">{ this.buildHeader() }!</h1>
              </div>
            </div>
          </div>

          <div className="banner banner--m">
            <MapComponent isMarkerShown coords={latLng} />
          </div>
        </div>

        <div className="content__section content__section--no-head no--pad">
          <div className="container">
            <div className="bar bar--l bar--overlap card card--shadow">
              <div className="card__body wrapper">
                <div className="wrapper__inner">
                  <ul className="list list--inline list--padded">
                    <li className="item">
                      <ul className="date-group">
                        <li>
                          <div className="date">
                            <span className="day">{ startDate.toLocaleString('en-us', { day: 'numeric' }) }</span>
                            <span className="month">{ startDate.toLocaleString('en-us', { month: 'short' }) }</span>
                          </div>
                          <div className="time">
                            { startDate.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true }) }
                          </div>
                        </li>
                        <li className="divider">&ndash;</li>
                        <li>
                          <div className="date">
                            <span className="day">{ endDate.toLocaleString('en-us', { day: 'numeric' }) }</span>
                            <span className="month">{ endDate.toLocaleString('en-us', { month: 'short' }) }</span>
                          </div>
                          <div className="time">
                            { endDate.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true }) }
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <ul className="list list--inline list--padded">
                        <li className="item">
                          <svg className="icon-home"><use></use></svg> Their Home
                        </li>
                        <li className="item">
                          <svg className="icon-time"><use></use></svg>{`${Math.round(sit.duration)} Hrs`}
                        </li>
                        <li className="item">
                          <span className="tag tag--secondary tag--s">{`Earn ${Math.round(sit.duration)} Points`}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="wrapper__inner -align-right">
                { sit.status === 2 && <button onClick={() => this.setState({ showRequestModal: true, })} className="sitting-button request-button">
                    Request Changes
                  </button>}
                { sit.status === 1 && <button onClick={() => this.setState({ showApproveModal: true, })} className="sitting-button approve-button">
                    Approve & Complete
                  </button>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col--7-of-12">

                <div className={`card card--accordion ${isAdultExpand ? 'is--expanded' : ''}`}>
                  <div onClick={() => this.triggerExpand('isAdultExpand')} className="card__head wrapper">
                    <div className="wrapper__inner">
                      <span className="ts--label">Adults</span>
                    </div>
                  </div>
                  <div className="card__tabs">
                    <ul className="tabs__list tabs__list--avatars">
                    { family && family.filter(member => member.role !== 2).map((adult, i) =>
                      <li
                        key={`adult-${i}`}
                        onClick={() => this.setState({ activeAdultId: adult.id })}
                        className={`tab`}
                        style={{ borderBottom: adult.id === activeAdultId ? "4px solid #5F70D0" : '' }}
                      ><div className="avatar" style={{ backgroundImage: `url(${adult.avatar})` }}></div></li>)
                    }
                    </ul>
                  </div>
                  { activeAdultId && <AdultInfo adult={family.find(member => member.id === activeAdultId)} /> }
                </div>

                <div className={`card card--accordion ${isChildExpand ? 'is--expanded' : ''}`}>
                  <div onClick={() => this.triggerExpand('isChildExpand')} className="card__head wrapper">
                    <div className="wrapper__inner">
                      <span className="ts--label">Kids</span>
                    </div>
                  </div>
                  <div className="card__tabs">
                    <ul className="tabs__list tabs__list--avatars">
                      { family && family.filter(member => member.role === 2).map((child, i) =>
                        <li
                          key={`child-${i}`}
                          onClick={() => this.setState({ activeChildId: child.id })}
                          className={`tab`}
                          style={{ borderBottom: child.id === activeChildId ? "4px solid #5F70D0" : '' }}
                        ><div className="avatar" style={{ backgroundImage: `url(${child.avatar})` }}></div></li>)
                      }
                    </ul>
                  </div>
                  { activeChildId && <ChildInfo child={family.find(member => member.id === activeChildId)} /> }
                </div>

              </div>
              { sit && <SittingsSidebar familyInfo={familyInfo} sit={sit} /> }
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default withRouter(SittingDetails);
