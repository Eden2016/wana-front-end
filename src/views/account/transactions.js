import React, { Component } from 'react';

import Navigation from './navigation';
import Pagination from './pagination';
import { getTransactions } from '../../api/settings-transactions';
import NavMenu from "components/global/navmenu"

class AccountTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: false,
      sortings: false
    }
  }

  render() {
    const { transactions, sortings } = this.state;

    return (
      <div style={{height: '100vh', background: 'whitesmoke'}}>
        <NavMenu history={this.props.history} />
      <div>
        <Navigation />
        <div className="content__section account-settings">
          <div className="section__head bar bar--l bar--panel">
            <div className="container wrapper">
              <div className="wrapper__inner">
                <ul className="list list--inline list--padded">
                  <li className="item">
                    <h1 className="-fontSize-l">Transaction History</h1>
                  </li>
                  <li className="item">
                    <div className="toggle toggle--tabs">
                      <label className="toggle__tab">
                        <input onClick={() => this.setState({ sortings: Object.assign(sortings, { type: 'pending' }) })} type="radio" name="transactions" defaultChecked />
                        <span>Pending</span>
                      </label>
                      <label className="toggle__tab">
                        <input onClick={() => this.setState({ sortings: Object.assign(sortings, { type: 'complete' }) })} type="radio" name="transactions" />
                        <span>Complete</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="wrapper__inner -align-right">
                <ul className="list list--inline list--padded list--tight">
                  <li className="item">
                    <ul className="list list--inline list--divided">
                      <li className="item">
                        <svg className="icon-points -color-tertiary"><use xlinkHref="#icon-points"></use></svg> 100 Available
                      </li>
                      <li className="item">
                        24 On Hold
                      </li>
                    </ul>
                  </li>
                  <li className="item">
                    <button className="btn btn--primary">Buy Points</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="page-tab__content">
            <div className="container">
              <table className="table table--cards">
                <thead>

                  <tr>
                    <th onClick={() => this.triggerSort('date')} className={`sort sort--${sortings.date}`}>
                      Date
                    </th>
                    <th onClick={() => this.triggerSort('activity')} className={`sort sort--${sortings.activity}`}>
                      Activity
                    </th>
                    <th className="sort">
                      Charged
                    </th>
                    <th className="sort">
                      Card
                    </th>
                    <th className="sort -align-center" width="104">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {
                    transactions && transactions.data.map((transaction) =>
                      <tr>
                        <td>
                          { transaction.date.toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' }) }
                        </td>
                        <td>
                          <strong>{ transaction.status }</strong>
                        </td>
                        <td>
                          <span className="-color-black-40">&mdash;</span>
                        </td>
                        <td>
                          <span className="-color-black-40">&mdash;</span>
                        </td>
                        <td className="-align-center">
                          <span className="tag tag--secondary">{ transaction.points }</span>
                        </td>
                      </tr>
                  )
                  }

                  {/* <tr>
                    <td>
                      Oct 24, 2017
                    </td>
                    <td>
                      You're sitting for <strong>Luis & Elba's Family</strong>
                    </td>
                    <td>
                      <span className="-color-black-40">&mdash;</span>
                    </td>
                    <td>
                      <span className="-color-black-40">&mdash;</span>
                    </td>
                    <td className="-align-center">
                      <span className="tag tag--secondary">+ 11</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Oct 22, 2017
                    </td>
                    <td>
                      <strong>Luis & Elba </strong> are sitting for you
                    </td>
                    <td>
                      <strong className="-color-secondary">Free!</strong>
                    </td>
                    <td>
                      <span className="-color-black-40">&mdash;</span>
                    </td>
                    <td className="-align-center">
                      <span className="tag tag--outline">- 11</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Oct 24, 2017
                    </td>
                    <td>
                      You're sat for <strong>Luis & Elba's Family</strong>
                    </td>
                    <td>
                      <span className="-color-black-40">&mdash;</span>
                    </td>
                    <td>
                      <span className="-color-black-40">&mdash;</span>
                    </td>
                    <td className="-align-center">
                      <span className="tag tag--secondary tag--filled">+ 11</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Oct 22, 2017
                    </td>
                    <td>
                      <strong>Luis & Elba </strong> sat for you
                    </td>
                    <td>
                      <strong className="-color-secondary">Free!</strong>
                    </td>
                    <td>
                      <span className="-color-black-40">&mdash;</span>
                    </td>
                    <td className="-align-center">
                      <span className="tag tag--outline tag--filled">- 11</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Oct 20, 2017
                    </td>
                    <td>
                      You purchased <strong>100 Points</strong>
                    </td>
                    <td>
                      $24.99
                    </td>
                    <td>
                      <span className="item item--cc">
                        <span className="icon-cc is--visa"></span> •••• 7890
                      </span>
                    </td>
                    <td className="-align-center">
                      <span className="tag tag--secondary tag--filled">+ 100</span>
                    </td>
                  </tr> */}

                </tbody>
              </table>
              <Pagination
                selectPage={this.selectPage}
                settings={transactions}
                onAmountChange={this.onAmountChange}
              />

            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
};

export default AccountTransactions;
