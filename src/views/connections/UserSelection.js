import React, { Component } from 'react';

class UserSelection extends Component {
  constructor(props) {
    super(props);
  }

  isSelected = (id) => {
    const { selectedKids } = this.props;
    return selectedKids.indexOf(id) > -1;
  }

  render() {
    return (
      <div className="fam__kids list list--inline">
        { this.props.kids.map((kid, i) => (
          <li className="item" key={`child-${i}`}>
            <div
              onClick={() => this.props.onKidSelect(kid.id)}
              className="avatar avatar--xl"
              style={{ backgroundImage: this.isSelected(kid.id) ? `url(${kid.avatar})` : `url(/assets/img/def-avatar.png)` }}
            ></div>
          </li>
        ))}
      </div>
    )
  }
}

export default UserSelection;
