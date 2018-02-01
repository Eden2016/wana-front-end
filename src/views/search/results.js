import React from "react"
import NavMenu from "components/global/navmenu"
import Map from "../../components/wana-ui/Map/Map"
import FamilyCard from "components/wana-ui/FamilyCard/FamilyCard"
import "./result.scss"
import { filterFamilies } from "../../api/families"
import Query from "./result/Query"

class SearchResults extends React.Component {
  state = {
    total: 0,
    families: [],
  }

  handleSearch = ({ total, families }) => {
    this.setState({
      total,
      families,
    })
  }

  render() {
    const { total, families } = this.state
    return (
      <div>
        <NavMenu />
        <section className="app__body panel__wrapper">
          <div className="panel panel__sidebar">
            <div className="panel__head wrapper">
              <div className="wrapper__inner">
                <svg className="icon-filters">
                  <use xlinkHref="#icon-filters" />
                </svg>
                <span className="ts--label -fontSize-xs">Filters</span>
              </div>
              <div className="wrapper__inner -align-right">
                <ul className="list list--inline">
                  <li className="item">
                    <button className="btn btn--link btn--s">Reset</button>
                  </li>
                  <li className="item">
                    <button className="btn btn--tertiary btn--outline btn--s">Apply</button>
                  </li>
                </ul>
              </div>
            </div>
            <div id="resultsMap" className="panel__map">
              {/* https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places */}
              <Map
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <Query delegate={this.handleSearch} />
          </div>

          <div className="panel panel__body">
            <div className="panel__head wrapper margin--m no--margin-t no--margin-lr">
              <div className="wrapper__inner -fontSize-xs">
                Search Results
                <span className="margin--xs no--margin-tb">•</span>
                <strong className="-fontWeight-3 -color-black">{total} Families</strong>
              </div>
            </div>
            <div className="container container--fluid">
              <div className="card__list card__list--grid">
                {families.map(card => (
                  <FamilyCard
                    href={`/profile/${card.family_id}`}
                    title={card.family.name}
                    subTitle={`${card.children.length} Kids ${
                      card.address && card.address.town ? " • " + card.address.town : " "
                    }`}
                    fbText={card.connected}
                    backgroundImage={card.family.avatar}
                    adults={card.adults}
                    children={card.children}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default SearchResults
