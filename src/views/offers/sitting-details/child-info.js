import React, { Component } from 'react';

class ChildInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { child } = this.props;
    return (
      <div className="card__body">
        <div className="tg tg--l margin--s no--margin-lr no--margin-t">
          <span className="tg__title">{`${child.first_name} ${child.last_name}`}</span>
        </div>
        <div className="well no--pad">
          <div className="well__row">
            <div className="well__section is-halved">
              <div className="tg tg--m">
                <small className="ts--label">Gender</small>
                <span className="tg__main">{ child.gender }</span>
              </div>
            </div>
            <div className="well__section is-halved">
              <div className="tg tg--m">
                <small className="ts--label">DOB</small>
                <span className="tg__main">{ new Date(child.birth_date).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' }) }</span>
              </div>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section is-halved">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Favorite Babysitting Activities</small>
              <ul className="list list--inline">
                {
                  child.favorite_baby_sitting_activities.split('. ').map((activity, i) =>
                    <li key={`activity-${i}`} className="tag tag--primary">
                      { activity }
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Personality</small>
              <p>{ child.personality }</p>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section is-halved">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Instructions for Eating</small>
              <p>{ child.diet }</p>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Instructions for Sleeping</small>
              <p>{ child.sleep }</p>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Allergies</small>
              <p>{ child.allergies }</p>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Medication</small>
              <p>{ child.medication }</p>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Vaccinations</small>
              <p>{ child.vaccinations }</p>
            </div>
          </div>
          <div className="well__row">
            <div className="well__section is-halved">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Pediatrician</small>
              <div className="tg tg--s tg--contact">
                <span className="tg__title">{ child.pediatrician_name }</span>
                <span className="tg__sub margin--xs no--margin-lr">
                                              { `${child.pediatrician_address}` }<br />
                                              { `${child.pediatrician_state}, ${child.pediatrician_zip}`}
                                          </span>
                <span className="tg__title">
                                              { child.pediatrician_phone }
                                          </span>
              </div>
            </div>
            <div className="well__section is-halved">
              <small className="ts--label margin--xs no--margin-t no--margin-lr">Preferred Hospital</small>
              <div className="tg tg--s tg--contact">
                <span className="tg__title">{ child.hospital_name }</span>
                <span className="tg__sub margin--xs no--margin-lr">
                                              { child.hospital_address }<br />
                                              { `${child.hospital_state}, ${child.hospital_zip}` }
                                          </span>
                <span className="tg__title">
                                              { child.hospital_phone }
                                          </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChildInfo;
