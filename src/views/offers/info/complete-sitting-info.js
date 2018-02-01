import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getFamily } from '../../../api/sittings';

class CompleteSittingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyInfo: null
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

    return(
      <Link className="sit card card--table-row wrapper" to={`/sitting/sit-details/${sitting.id}`}>
        <div className="wrapper__inner">
          <div className="tg tg--s">
            <div className="avatar avatar--square is--complete tg__cell"></div>
            <div className="tg__cell">
              <span className="tg__title">
                <strong>{ familyInfo.name }</strong> sat for your family
              </span>
              <span className="tg__sub">Completed { new Date(sitting.end_time).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' }) }</span>
            </div>
          </div>
        </div>
        <div className="wrapper__inner -align-right -fontSize-xs">
          <span className="tag tag--secondary">{ `${Math.round(sitting.duration)}pts` }</span>
          <small>Received from {`${familyInfo.name}`} family</small>
        </div>
      </Link>
    )
  }
}

export default CompleteSittingInfo;
