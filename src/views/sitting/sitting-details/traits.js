import React, { Component } from 'react';

import { getFamilyTraits } from '../../../api/sittings';

class Traits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      traits: null,
    }
  }

  componentDidMount() {
    this.getTraits(this.props.familyInfo.id);
  }

  getTraits = async (id) => {
    const res = await getFamilyTraits(id);
    this.setState({ traits: res.success[0] });
  }

  render() {
    const { traits } = this.state;
    if (!traits) {
      return (<div></div>);
    }

    return (
      <ul className="list list--traits">
        <li className="item">
          <svg className={`icon-${ traits.smoking ? 'yes' : 'no'}-smoking`}><use xlinkHref={`#icon-${ traits.smoking ? 'yes' : 'no'}-smoking`}></use></svg> Non-Smoking Home
        </li>
        <li className="item">
          <svg className={`icon-${ traits.vaccinations ? 'yes' : 'no' }-vaccines`}><use xlinkHref={`#icon-${ traits.vaccinations ? 'yes' : 'no' }-vaccines`}></use></svg> Kids Are Vaccinated
        </li>
        <li className="item">
          <svg className={`icon-${ traits.child_cpr ? 'yes' : 'no' }-cpr`}><use xlinkHref={`#icon-${ traits.child_cpr ? 'yes' : 'no' }-cpr`}></use></svg> Knows Child CPR
        </li>
        <li className="item">
          <svg className={`icon-${ traits.child_first_aid ? 'yes' : 'no' }-first-aid`}><use xlinkHref={`#icon-${ traits.child_first_aid ? 'yes' : 'no' }-first-aid`}></use></svg> Knows Child First-Aid
        </li>
        <li className="item">
          <svg className={`icon-${ traits.guns ? 'yes' : 'no' }-guns`}><use xlinkHref={`#icon-${ traits.guns ? 'yes' : 'no' }-guns`}></use></svg> No Firearms in Home
        </li>
        <li className="item">
          <svg className={`icon-${ traits.outdoor_space ? 'yes' : 'no' }-outdoor-area`}><use xlinkHref={`#icon-${ traits.outdoor_space ? 'yes' : 'no' }-outdoor-area`}></use></svg> Has Outdoor Area
        </li>
        <li className="item">
          <svg className={`icon-${ traits.pool ? 'yes' : 'no' }-pool`}><use xlinkHref={`#icon-${ traits.pool ? 'yes' : 'no' }-pool`}></use></svg> Has Pool
        </li>
        <li className="item">
          <svg className={`icon-${ traits.pets ? 'yes' : 'no' }-pets`}><use xlinkHref={`#icon-${ traits.pets ? 'yes' : 'no' }-pets`}></use></svg> No Pets in Home
        </li>
      </ul>
    )
  }
}

export default Traits;
