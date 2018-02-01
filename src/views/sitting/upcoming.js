import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getUserUpcomingAppointments } from '../../api/sittings';
import YourSitting from './info/your-sitting';
import TheirSitting from './info/their-sitting';

class UpcomingSittings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mySits, theirSits } = this.props.upcoming || { mySits: [], theirSits: [] };
    return (
      <section className="app__body">

        <div className="content__section">
          <div className="section__head bar bar--l">
            <div className="container wrapper">
              <div className="wrapper__inner">
                <h1 className="-fontSize-l">Upcoming Sits</h1>
              </div>
              <div className="wrapper__inner -align-right">
                <ul className="list list--inline list--padded">
                  <li className="item">
                    You&#39;re sitting: <strong>{ mySits.length }</strong>
                  </li>
                  <li className="item">|</li>
                  <li className="item">
                    They&#39;re Sitting: <strong>{ theirSits.length }</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section__content">
            <div className="container">

              <div className="card-table card-table--list">

                <div className="card-table__head wrapper">
                  <div className="wrapper__inner">
                    <span className="ts--label">You&#39;re Sitting</span>
                  </div>
                </div>

                {
                  !mySits.length && <h6>No upcoming sits...</h6>
                }

                {
                  mySits.map((sitting, i) =>
                    <YourSitting key={`your-sitting-${i}`} sitting={sitting} />
                  )
                }

              </div>

              <div className="card-table card-table--list">

                <div className="card-table__head wrapper">
                  <div className="wrapper__inner">
                    <span className="ts--label">They&#39;re Sitting</span>
                  </div>
                </div>

                {
                  !theirSits.length && <h6>No upcoming sits...</h6>
                }

                {
                  theirSits.map((sitting, i) =>
                    <TheirSitting key={`their-sitting-${i}`} sitting={sitting} />
                  )
                }

              </div>

              <hr className="hairline" />

              <div className="info-box info-box--cta info-box--primary wrapper -reversed">
                <div className="info-box__icon info-box__icon--l wrapper__inner">
                  <div className="box-icon box-icon--primary">
                    <svg className="icon-points icon--l"><use></use></svg>
                  </div>
                </div>
                <div className="wrapper__inner">
                  <div className="info-box__content">
                    <span className="-fontSize-xl -fontWeight-3">Earn points that can be used for FREE babysitting!</span>
                    <p>Offer your time to other families in exchange for points! <Link to="#">Learn how it works.</Link></p>
                  </div>
                </div>
                <div className="wrapper__inner -align-right">
                  <Link className="btn btn--reversed" to="/search">Find Families</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default UpcomingSittings;
