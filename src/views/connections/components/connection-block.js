import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ConnectionsSlider from './connections-slider';

class ConnectionBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [],
    }
  }

  componentDidMount() {
    this.getConnections();
  }

  getConnections = async () => {
    const res = await this.props.getConnections();
    if (res.success) {
      this.setState({ connections: res.success[0].data });
    }
  }

  render() {
    const { title, href } = this.props;
    const { connections } = this.state;
    if (!connections.length) {
      return null;
    }

    return (
      <div>
        <h3 className="section-title wrapper">
          <div className="wrapper__inner">
            { title }
          </div>
          <div className="wrapper__inner -align-right">
            <Link className="link link--primary -fontSize-xxs" to={`connections/${href}`}>View All</Link>
          </div>
        </h3>
        <ConnectionsSlider connections={connections} />
      </div>
    )
  }

}

export default ConnectionBlock;
