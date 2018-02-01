import React, { Component } from 'react';
import RouteStatus from 'components/global/routeStatus';
import NavMenu from "components/global/navmenu"

export default class NotFound extends Component {
  render() {
    return (
      <RouteStatus code={ 404 }>
        <NavMenu history={this.props.history} />
        <div className='NotFound'>
          <h1>Not Found</h1>
        </div>
      </RouteStatus>
    );
  }
}
