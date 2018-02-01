import React, { Component } from 'react';

class CardMembers extends Component {
  render() {
    const { family_members } = this.props;
    if (!family_members.length) {
      return (<div></div>);
    }

    const children = family_members.filter(member => member.role === 2);
    const parents = family_members.filter(member => member.role === 1);

    return (
      <div className="card__image-b wrapper">
        <div className="wrapper__inner">
          <div className="fam__adults list list--inline">
            {
              parents.map((parent, i) =>
                <li className="item" key={`parent-${i}`}>
                  <div className="avatar avatar--s" style={{ backgroundImage: `url(${parent.avatar})` }}></div>
                </li>
              )
            }
          </div>
        </div>
        <div className="wrapper__inner -align-right">
          <div className="fam__kids list list--inline">
            {
              children.map((child, i) =>
                <li className="item" key={`child-${i}`}>
                  <div className="avatar avatar--xs" style={{ backgroundImage: `url(${child.avatar})` }}></div>
                </li>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CardMembers;
