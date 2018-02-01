import React, { Component } from "react"
import classnames from "classnames"

export default class AdultCard extends Component {
  state = {
    activeAdult: 0,
    adults: [
      {
        name: "someone",
        rule: "Father",
        pPhone: "(310) 555-7890",
        sPhone: "(310) 555-7890",
      },
      {
        name: "someOne else",
        rule: "Mother",
        pPhone: "(310) 555-7890",
      },
    ],
    adultExpanded: false,
    childrenExpanded: false,
  }
  expand = () => {
    this.setState(ps => ({
      adultExpanded: !ps.adultExpanded,
    }))
  }

  changeActive = activeAdult => {
    this.setState({
      activeAdult,
    })
  }

  render() {
    const { adultExpanded, childrenExpanded, adults, activeAdult: aa } = this.state
    return (
      <div className={classnames("card card--accordion", { "is--expanded": adultExpanded })}>
        <div className="card__head wrapper" onClick={this.expand}>
          <div className="wrapper__inner">
            <span className="ts--label">Adults</span>
          </div>
        </div>
        <div className="card__tabs">
          <ul className="tabs__list tabs__list--avatars">
            {adults.map((a, i) => <AdultCardTab active={i === aa} click={() => this.changeActive(i)} key={i} />)}
          </ul>
          {adults.length > 0 && (
            <AdultCardBody
              name={adults[aa].name}
              role={adults[aa].role}
              pPhone={adults[aa].pPhone}
              sPhone={adults[aa].sPhone}
            />
          )}
        </div>
      </div>
    )
  }
}

const AdultCardTab = ({ avatar, active, click }) => (
  <li className={classnames("tab", { "is--active": active })} onClick={click}>
    <div className="avatar">{avatar && <img src={avatar} />}</div>
  </li>
)

const AdultCardBody = ({ name, role, pPhone, sPhone }) => (
  <div className="card__body">
    <div className="tg tg--l margin--s no--margin-lr no--margin-t">
      <span className="tg__title">{name}</span>
      <span className="tg__sub">{role}</span>
    </div>
    <div className="well no--pad">
      <div className="well__row">
        {pPhone && (
          <div className="well__section is-halved">
            <div className="tg tg--m">
              <small className="ts--label">Primary Phone</small>
              <span className="tg__main">{pPhone}</span>
            </div>
          </div>
        )}

        {sPhone && (
          <div className="well__section is-halved">
            <div className="tg tg--m">
              <small className="ts--label">Secondary Phone</small>
              <span className="tg__main">{sPhone}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)
