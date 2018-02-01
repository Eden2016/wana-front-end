import React, { Component } from "react"
import Select from "react-select"
import "react-select/dist/react-select.css"

import "./TraitsEdit.scss"

export default class TraitsEdit extends Component {
  traitTitles = {
    //- TODO smooking is negated ??
    // smoking: "non smoking",
    smoking: "smoking",
    vaccinations: "vaccinations",
    child_cpr: "child cpr",
    child_first_aid: "child first aid",
    guns: "firearm in home",
    outdoor_space: "outdoor area",
    pets: "pets",
    pool: "pool",
  }

  render() {
    let tt = this.traitTitles
    let { traits } = this.props
    if (!traits || Object.keys(traits) < 1) return null

    return (
      <div className="traitsEdit__container">
        <div className="pane__left">
          {Object.keys(tt)
            .slice(0, 4)
            .map((name, i) => {
              let title = tt[name].toUpperCase()
              let value = traits[name] ? "YES" : "NO"
              return (
                <TraitEditBox
                  title={title}
                  key={i}
                  value={value}
                  name={name}
                  handleChange={this.props.handleTraitsChange}
                />
              )
            })}
        </div>

        <div className="pane__right">
          {Object.keys(tt)
            .slice(4)
            .map((name, i) => {
              let title = tt[name].toUpperCase()
              let value = traits[name] ? "YES" : "NO"
              return (
                <TraitEditBox
                  title={title}
                  key={i}
                  value={value}
                  name={name}
                  handleChange={this.props.handleTraitsChange}
                />
              )
            })}
        </div>
      </div>
    )
  }
}

const TraitEditBox = ({ title,name, value, handleChange }) => (
  <div className="box">
    <h6>{title}</h6>
    <Select
      name={title}
      value={value}
      onChange={e => handleChange(e, name)}
      searchable={false}
      clearableValue={false}
      options={[{ value: "YES", label: "YES" }, { value: "NO", label: "NO" }]}
    />
  </div>
)
