import React, { Component } from "react"
import classnames from "classnames"

export default class ChildrenCard extends Component {
  state = {
    expanded: false,
    activeChild: 0,
    children: [
      {
        avatar: "",
        name: "Isabella Hernandez",
        age: "7 year-old",
        gender: "girl",
        personality: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        allergies: "",
        medication: "",
        vaccinations: "Prefer not to say",
      },
      {
        avatar: "",
        name: "George Hernandez",
        age: "8 year-old",
        gender: "boy",
        personality: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        allergies: "",
        medication: "",
        vaccinations: "Prefer not to say",
      },
    ],
  }

  expand = () => {
    this.setState(ps => ({
      expanded: !ps.expanded,
    }))
  }

  updateActive = activeChild => {
    this.setState({
      activeChild,
    })
  }

  render() {
    const { expanded, children, activeChild: ac } = this.state
    return (
      <div className={classnames("card card--accordion", { "is--expanded": expanded })}>
        <div className="card__head wrapper" onClick={this.expand}>
          <div className="wrapper__inner">
            <span className="ts--label">Kids</span>
          </div>
        </div>
        <div className="card__tabs">
          <ul className="tabs__list tabs__list--avatars">
            {children.map((c, i) => (
              <ChildTab avatar={c.avatar} active={i === ac} click={() => this.updateActive(i)} key={i} />
            ))}
          </ul>
          <ChildCardBody
            name={children[ac].name}
            age={children[ac].age}
            gender={children[ac].gender}
            personality={children[ac].personality}
            medication={children[ac].medication}
            allergies={children[ac].allergies}
            vaccinations={children[ac].vaccinations}
          />
        </div>
      </div>
    )
  }
}

const ChildTab = ({ avatar, active, click }) => (
  <li className={classnames("tab", { "is--active": active })} onClick={click}>
    <div className="avatar">{avatar && <img src={avatar} />}</div>
  </li>
)

const ChildCardBody = ({ name, age, gender, personality, medication, allergies, vaccinations }) => (
  <div className="card__body">
    <div className="tg tg--l margin--s no--margin-lr no--margin-t">
      <span className="tg__title">{name}</span>
      <span className="tg__sub">
        {age} {gender}
      </span>
    </div>
    <div className="well no--pad">
      <div className="well__row">
        <div className="well__section">
          <small className="ts--label margin--xs no--margin-t no--margin-lr">Personality</small>
          <p>{personality || "not provided"}</p>
        </div>
      </div>
      <div className="well__row">
        <div className="well__section">
          <small className="ts--label margin--xs no--margin-t no--margin-lr">Allergies</small>
          <p>{allergies}</p>
        </div>
      </div>
      <div className="well__row">
        <div className="well__section">
          <small className="ts--label margin--xs no--margin-t no--margin-lr">Medication</small>
          <p>{medication}</p>
        </div>
      </div>
      <div className="well__row">
        <div className="well__section">
          <small className="ts--label margin--xs no--margin-t no--margin-lr">Vaccinations</small>
          <p>{vaccinations}</p>
        </div>
      </div>
    </div>
  </div>
)
