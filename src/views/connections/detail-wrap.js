import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NavMenu from 'components/global/navmenu';
import Button from 'components/forms/Button/Button';
import PreviewCard from './components/preview-card';
import ConnectionHeader from './components/connection-header';
import OfferModal from 'views/connections/OfferModal';
import RequestModal from 'views/connections/RequestModal';

import { getFavorites, getPast, getFacebook, addFavorite, removeFavorite } from '../../api/connections';

class DetailWrap extends Component {
  constructor(props) {
    super(props);
    const location = this.props.location.pathname.split('/').filter(item => item.length);
    this.state = {
      location: location[location.length - 1],
      selected: [],
      cards: [],
      isRequestModalOpen: false,
      isOfferModalOpen: false,
    }
  }

  componentDidMount() {
    const { location } = this.state;
    if (location === 'favorites') {
      this.get(getFavorites);
    } else if (location === 'facebook') {
      this.get(getFacebook);
    } else {
      this.get(getPast);
    }
  }

  get = async (getFunc) => {
    const res = await getFunc();
    if (res.success) {
      this.setState({ cards: res.success[0].data });
    }
  }

  deselectAll = () => {
    this.setState({ selected: [] });
  }

  selectAll = () => {
    const { cards } = this.state;
    this.setState({ selected: cards.map(card => card.id) });
  }

  selectCard = (id) => {
    this.setState({ selected: [...this.state.selected, id] });
  }

  deselectCard = (id) => {
    this.setState({ selected: this.state.selected.filter(prevId => prevId !== id) });
  }

  toggleFavorite = (id) => {
    const card = this.state.cards.find(card => card.id === id);
    if (card.favorite) {
      this.unfavorite(id);
    } else {
      this.favorite(id);
    }
  }

  unfavorite = async (id) => {
    const res = await removeFavorite(id);
    if (res.success) {
      this.setState({ cards: this.state.cards.filter(card => card.id !== id) });
    }
  }

  favorite = async (id) => {
    const res = await addFavorite(id);
    if (res.success) {

    }
  }

  removeFavorites = () => {
    this.state.selected.map(id => this.unfavorite(id));
    this.setState({ selected: [] });
  }

  openRequestModal = () => {
    this.setState({ isRequestModalOpen: true });
  }

  closeRequestModal = () => {
    this.setState({ isRequestModalOpen: false });
  }

  openOfferModal = () => {
    this.setState({ isOfferModalOpen: true });
  }

  closeOfferModal = () => {
    this.setState({ isOfferModalOpen: false });
  }

  render() {
    const { location, selected, cards, isRequestModalOpen, isOfferModalOpen } = this.state;
    return (
      <div className="-bg-light-gray" style={{minHeight: 100 + '%'}}>
        <NavMenu />
        <RequestModal isOpen={isRequestModalOpen} onClose={this.closeRequestModal} connections={cards} selected={selected} />
        <OfferModal isOpen={isOfferModalOpen} onClose={this.closeOfferModal} connections={cards} selected={selected} />
        <section className="app__body">
          <div className="content__section">
            { location === 'favorites' && <ConnectionHeader title={'Favorites'} /> }
            { location === 'facebook' && <ConnectionHeader title={'Friends on Facebook'} /> }
            { location === 'past' && <ConnectionHeader title={'Past Connections'} /> }
            <div className="container">

              <div className="wrapper margin--xxl no--margin-lr no--margin-b">
                <div className="wrapper__inner">
                  { cards.length > 0 && location === 'favorites' &&
                    (cards.length === selected.length ?
                      <a
                        onClick={this.deselectAll}
                        className="link link--primary">
                          Deselect All
                      </a> :
                      <a
                        onClick={this.selectAll}
                        className="link link--primary">
                          Select All
                      </a>)
                  }
                </div>
                {
                  <div className="wrapper__inner -align-right">
                    <ul className="list list--inline">
                      { location === 'favorites' &&
                        <li className="item">
                          <button onClick={this.removeFavorites} className="btn btn--warning" color="warning">Remove Favorites</button>
                        </li>
                      }
                      <li className="item">
                        <button className="btn btn--primary" onClick={this.openRequestModal}>Request</button>
                      </li>
                      <li className="item">
                        <button className="btn btn--primary" onClick={this.openOfferModal}>Offer</button>
                      </li>
                    </ul>
                  </div>
                }
              </div>

              <hr className="hairline" />

              <div className="card__list card__list--grid card__list--grid-directory">
                {
                  cards.map((card, i) =>
                    <PreviewCard
                      key={`preview-card-${i}`}
                      onSelect={this.selectCard}
                      toggleFavorite={this.toggleFavorite}
                      onDeselect={this.deselectCard}
                      selected={selected}
                      card={card}
                    />)
                }
              </div>
            </div>

          </div>
        </section>

      </div>
    )
  }
}

export default withRouter(DetailWrap);
