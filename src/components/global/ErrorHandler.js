import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from 'reducers/error-handler';

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timeout = window.setTimeout(() => this.props.actions.removeError(this.props.error), 2000);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  render() {
    const { error } = this.props;
    return (
      <div onClick={() => this.props.actions.removeError(error)} style={{ top: `${this.props.index * 40 + 50}px` }} className="error-handler">{ error }</div>
    )
  }
}


export default connect(null, mapDispatchToProps)(ErrorHandler);
