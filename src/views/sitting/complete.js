import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CompleteSittingInfo from './info/complete-sitting-info';
import PendingSittingInfo from './info/pending-sitting-info';

class CompleteSittings extends Component {
  constructor(props) {
    super(props);
  }

  setMessage = (name) => {

  }

  render() {
    const { complete, pending } = this.props;
    return (
      <section className="app__body">

        <div className="content__section">
          <div className="section__head bar bar--l">
            <div className="container wrapper">
              <div className="wrapper__inner">
                <h1 className="-fontSize-l">Awaiting Completion</h1>
              </div>
              <div className="wrapper__inner -align-right">
                <ul className="list list--inline list--padded">
                  <li className="item">
                    Pending: <strong>{ pending.length }</strong>
                  </li>
                  <li className="item">|</li>
                  <li className="item">
                    Complete: <strong>{ complete.length }</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container">

            <div className="card-table card-table--list">

              <div className="card-table__head wrapper">
                <div className="wrapper__inner">
                  <span className="ts--label">Pending</span>
                </div>
                <div className="wrapper__inner -align-right">
                  <span className="ts--label">Time Until Auto-Complete</span>
                </div>
              </div>

              {
                !pending.length && <h6>No pending sits...</h6>
              }

              {
                pending.map((sitting, i) =>
                  <PendingSittingInfo key={`pending-${i}`} sitting={sitting} />
                )
              }

            </div>

          </div>
        </div>

        <div className="content__section">
          <div className="container">

            <div className="card-table">

              <div className="card-table__head wrapper">
                <div className="wrapper__inner">
                  <span className="ts--label">Complete</span>
                </div>
              </div>
              {
                !complete.length && <h6>No completed sits...</h6>
              }
              {
                complete.map((sitting, i) =>
                  <CompleteSittingInfo key={`complete-${i}`} sitting={sitting} />
                )
              }

            </div>

          </div>
        </div>
      </section>
    );
  }
};

export default CompleteSittings;
