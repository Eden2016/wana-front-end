import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/wana-ui/icon';
import CardMembers from './card-members';

class PreviewCard extends Component {
  clickCard = (id) => {
    const { selected } = this.props;
    if (selected.indexOf(id) !== -1) {
      this.props.onDeselect(id);
    } else {
      this.props.onSelect(id);
    }
  }

  isSelected = (id) => {
    return this.props.selected.indexOf(id) !== -1;
  }

  toggleFavorite(e) {
    e.stopPropagation();
  }

  render() {
    const { card } = this.props;
    const kids = card.family_members.filter(member => member.role === 2).length;
    return (
      <Link onClick={() => this.clickCard(card.id)} className="fam card is--connected" style={{ backgroundColor: this.isSelected(card.id) ? '#f7142fcc' : '#ccc' }} to="#">
        <div className="card__controls wrapper -reversed">
          <div className="wrapper__inner">
            <ul className="tags__list">
              { card.experienced &&
                <li className="tag">
                  Experienced Sitter
                </li>
              }
            </ul>
          </div>
          <div className="wrapper__inner -align-right">
            <button onClick={this.toggleFavorite} className="btn btn--icon btn--toggle btn--fav">
              { !card.favorite && <Icon icon="heart" state="off"/> }
              { card.favorite && <Icon icon="heart-filled" state="on"/> }
            </button>
          </div>
        </div>
        <div className="fam__card-image card__image go ar ar--16-9" style={{backgroundImage: `url(${card.avatar})` }}>
          <CardMembers family_members={card.family_members} />
        </div>
        <div className="card__body">
          <div className="fam__meta tg tg--m">
            <span className="fam__name tg__title">{ card.name } Family</span>
            <span className="fam__desc tg__sub">{ kids } Kids  •  Mar Vista</span>
            { card.fb && <span className="fam__connection tg__tertiary">You and Luis are friends on Facebook.</span> }
          </div>
        </div>
      </Link>
    )
  }
}

export default PreviewCard;
