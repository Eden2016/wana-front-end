import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PendingSittingInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sitting } = this.props;
    return (
      <div>
        <Link className="sit card wrapper" to={`/sitting/sit-details/${sitting.id}`}>
          <div className="wrapper__inner">
            <div className="tg tg--s">
              <div className="user__group user__group--exchange">
                <div className="avatar has--badge is--approved"></div>
                <div className="divider divider--caret-r"></div>
                <div className="avatar" style={{ backgroundImage: `url(${sitting.created_by[0].avatar})`}}></div>
              </div>
              <div className="tg__cell">
                <span className="tg__title">
                                        <strong>{ sitting.created_by[0].family.name }</strong> sat for your family
                                    </span>
                <span className="tg__sub -emphasized">{ sitting.created_by[0].family.name } approved 3 hours ago. Waiting for your approval.</span>
              </div>
            </div>
          </div>
          <div className="wrapper__inner -align-right -fontWeight-3 -fontSize-xs">
            15 Minutes
          </div>
        </Link>
        {/* <Link className="sit card wrapper" to="#">
          <div className="wrapper__inner">
            <div className="tg tg--s">
              <div className="user__group user__group--exchange">
                <div className="avatar has--badge is--approved"></div>
                <div className="divider divider--caret-r"></div>
                <div className="avatar" style={{ backgroundImage: "url('/assets/img/placeholder/avatar-michelle.png')"}}></div>
              </div>
              <div className="tg__cell">
                <span className="tg__title">
                                        <strong>Melissa & Zach</strong> sat for your family
                                    </span>
                <span className="tg__sub -emphasized">Melissa approved 3 hours ago. Waiting for your approval.</span>
              </div>
            </div>
          </div>
          <div className="wrapper__inner -align-right -fontWeight-3 -fontSize-xs">
            15 Minutes
          </div>
        </Link>

        <Link className="sit card wrapper" to="#">
          <div className="wrapper__inner">
            <div className="tg tg--s">
              <div className="user__group user__group--exchange">
                <div className="avatar"></div>
                <div className="divider divider--caret-r"></div>
                <div className="avatar has--badge is--approved" style={{ backgroundImage: "url('/assets/img/placeholder/avatar-michelle.png')"}}></div>
              </div>
              <div className="tg__cell">
                <span className="tg__title">
                                        <strong>Melissa & Zach</strong> sat for your family
                                    </span>
                <span className="tg__sub -emphasized">You approved 3 hours ago. Waiting for Melissa&#39;s approval.</span>
              </div>
            </div>
          </div>
          <div className="wrapper__inner -align-right -fontWeight-3 -fontSize-xs">
            4 Hours
          </div>
        </Link>

        <Link className="sit card wrapper is--alert" to="#">
          <div className="wrapper__inner">
            <div className="tg tg--s">
              <div className="user__group user__group--exchange">
                <div className="avatar has--badge is--alert"></div>
                <div className="divider divider--caret-r"></div>
                <div className="avatar" style={{ backgroundImage: "url('/assets/img/placeholder/avatar-michelle.png')"}}></div>
              </div>
              <div className="tg__cell">
                <span className="tg__title">
                                        <strong>Luis & Elba</strong> sat for your family
                                    </span>
                <span className="tg__sub -emphasized">Luis made changes to this sit. Waiting for your approval.</span>
              </div>
            </div>
          </div>
          <div className="wrapper__inner -align-right -fontWeight-3 -fontSize-xs -color-warning">
            Paused for approval
          </div>
        </Link> */}
      </div>
    )
  }
}

export default PendingSittingInfo;
