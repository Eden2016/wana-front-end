import React, { Component } from 'react';

import { getFamily } from 'api/sittings';

class YourSitting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyInfo: null,
    }
  }

  componentDidMount() {
    const { sitting } = this.props;
    this.getFamilyInfo(sitting.created_by);
  }

  getFamilyInfo = async (id) => {
    const res = await getFamily(id);
    if (res.success) {
      this.setState({ familyInfo: res.success[0] });
    }
  }

  render() {
    const { sitting } = this.props;
    const { familyInfo } = this.state;

    if (!familyInfo) {
      return (<div></div>);
    }

    return (
      <Link className="sit card wrapper is--upcoming" to={`/sitting/sit-details/${sitting.id}`}>
        <div className="wrapper__inner">
          <div className="tg tg--s">
            <div className="avatar avatar--square tg__cell" style={{ backgroundImage: `url(${familyInfo.avatar})` }}></div>
            <div className="tg__cell">
              <span className="tg__title">Youre sitting for <strong>{ familyInfo.name } Family</strong></span>
              <span className="tg__sub -emphasized">{ new Date(sitting).toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }) }</span>
            </div>
          </div>
        </div>
        <div className="wrapper__inner -align-right">
          <ul className="list list--inline list--padded">
            <li className="item">
              <svg className="icon-kids"><use></use></svg> 2 Kids
            </li>
            <li className="item">
              <svg className="icon-time"><use></use></svg> { sitting.duration } Hrs
            </li>
            <li className="item tag tag--secondary">
              Earn { Math.round(sitting.duration) } Pts
            </li>
          </ul>
        </div>
      </Link>
    )
  }
}

export default YourSitting;
