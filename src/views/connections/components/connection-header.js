import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/wana-ui/icon';

class ConnectionHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div className="section__head bar bar--l bar--panel no--margin -border-none">
        <div className="container wrapper">
          <Link className="back__link link link--back" to='/connections'>
            <Icon icon="caret-thin" />
            My Connections
          </Link>
          <div className="wrapper__inner -align-center">
            <h1 className="-fontSize-l">{ title }</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default ConnectionHeader;
