import React, { Component } from 'react';

class TinyDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droppedDown: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    this.setState({
      droppedDown: !this.state.droppedDown
    });
  }
  createClassName() {
    const isActive = this.state.droppedDown || this.props.active ? 'is--active' : '';
    const customClassNames = this.props.className ? ` ${this.props.className} ` : '';
    return `entity__ops dropdown ${isActive} dropdown--no-caret dropdown--over ${customClassNames}`
  }
  render() {
    const { hideIcon } = this.props;
    return (
      <div className={this.createClassName()} onClick={this.toggleDropdown}>
        {  hideIcon? null : <svg className="icon-more icon--xs"><use xlinkHref="#icon-more"/></svg> }
        <div className="dropdown__box">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TinyDropdown;
