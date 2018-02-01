import React, { Component } from "react"
import Proptypes from "prop-types"
import classnames from "classnames"
import Input from "../input/index"

import { getFamilyById } from 'api/families';

import "./UsersContainer.scss"

const UserContainer = ({ title, open, handleClick, threads, style, main, single, onUserClick, currentFamily }) => (
  <div className="users__card users__card--main" style={style}>
    <div className="users__card--header" onClick={handleClick}>
      <span className="title">{title}</span>
    </div>
    <div className={classnames("users__card--body", { hidden: !open })} style={{ minHeight: '200px'   }}>
      <MainCardBody currentFamily={currentFamily} onUserClick={ onUserClick } threads={threads} />
    </div>
  </div>
)


class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      family: null,
    }
  }

  componentDidMount() {
    const { thread, currentFamily } = this.props;
    console.log('UserRow props', this.props)
    if (currentFamily) {
      const familyId = thread.participants.find(part => part.user_id !== this.props.currentFamily.id).user_id;
      this.getFamily(familyId);
    }
  }

  getFamily = async (id) => {
    const res = await getFamilyById(id);
    if (res.success) {
      this.setState({ family: res.success[0].family });
    }
  }

  render() {
    const { onUserClick, thread } = this.props;
    const { family } = this.state;

    if (!family) {
      return null;
    }

    return (
      <li className="userRow" onClick={ () => onUserClick({ thread, family })}>
        <img src={family.avatar} />
        <span>{family.name}</span>
      </li>
    )
  }
}

const MainCardBody = ({ threads, onUserClick, currentFamily }) => (
  <ul>{threads.map(thread => <UserRow currentFamily={currentFamily} onUserClick={ onUserClick } key={thread.id} thread={thread} />)}</ul>
)

export default UserContainer
