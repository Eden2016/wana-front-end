import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getFamilyAddress } from '../../../api/sittings';
import Traits from './traits';
import FamilyPhotos from './family-photos';

class SittingsSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
    }
  }

  componentDidMount() {
    this.getAddress(this.props.familyInfo.id);
  }

  getAddress =  async (id) => {
    const res = await getFamilyAddress(id);
    console.log(res);
    this.setState({ address: res.success[0] });
  }

  render() {
    const { sit, familyInfo } = this.props;
    const { address } = this.state;

    if (!sit || !familyInfo) {
      return (<div></div>);
    }

    return (
      <div className="col col--5-of-12">
        <div className="card">
          <div className="card__head wrapper">
            <div className="wrapper__inner">
              <span className="ts--label">Special Instructions</span>
            </div>
          </div>
          <div className="card__body">
            <p>{ sit.special_instructions }</p>
          </div>
        </div>
        <div className="fam card">
          <div className="fam__card-image card__image go ar ar--16-9 -reversed" style={{ backgroundImage: `url(${familyInfo && familyInfo.avatar || ''})` }} />
          <div className="card__image-b wrapper padding--s">
            <div className="wrapper__inner">
              <div className="tg tg--l">
                <Link className="tg__title" to={`/profile/${familyInfo.id}`}>{ familyInfo ? familyInfo.name : '' } Family</Link>
                { address && <span className="tg__sub">{`${address.street}, ${address.state}`}</span> }
              </div>
            </div>
            <div className="wrapper__inner -align-right">
              <button className="btn btn--reversed btn--outline btn--s">Send Message</button>
            </div>
          </div>
        </div>
        <div className="card__body">
          <Traits sit={sit} familyInfo={familyInfo} />
        </div>
        <FamilyPhotos sit={sit} familyInfo={familyInfo} />
      </div>
    )
  }
}

export default SittingsSidebar;
