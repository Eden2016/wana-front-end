import React, { Component } from 'react';

class AdultInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { adult } = this.props;
    return (
      <div className="card__body">
        <div className="tg tg--l margin--s no--margin-lr no--margin-t">
          <span className="tg__title">{`${adult.first_name} ${adult.last_name}`}</span>
          <span className="tg__sub">Father</span>
        </div>
        <div className="well no--pad">
          <div className="well__row">
            <div className="well__section is-halved">
              <div className="tg tg--m">
                <small className="ts--label">Primary Phone</small>
                <span className="tg__main">{ adult.primary_number }</span>
              </div>
            </div>
            <div className="well__section is-halved">
              <div className="tg tg--m">
                <small className="ts--label">Secondary Phone</small>
                <span className="tg__main">{ adult.secondary_number }</span>
              </div>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section is-halved">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Favorite Babysitting Activities</small>
              <ul className="list list--inline">
                {
                  adult.favorite_baby_sitting_activities.split('. ').map((activity, i) =>
                    <li key={`activity-${i}`} className="tag tag--primary">{ activity }</li>
                  )
                }
              </ul>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section is-halved">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Parenting Styles</small>
              <ul className="list list--inline">
                {
                  adult.personality.split('. ').map((fav, i) =>
                    <li key={`style-${i}`} className="tag tag--primary">
                      { fav }
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdultInfo;
