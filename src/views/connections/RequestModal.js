import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker"
import * as moment from 'moment';
import UserSelection from 'views/connections/UserSelection';
import 'react-datepicker/dist/react-datepicker.css';

import { requestAppointment } from 'api/sittings/post';
import { getFamilyMembers } from 'api/sittings/get';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%'  ,
    transform             : 'translate(-50%, -50%)',
    minHeight             : '400px',
    minWidth              : '800px',
    overflow              : 'visible'
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

class RequestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: moment(),
      end_date: moment(),
      type: 'request',
      credits: 50,
      location: 'My home',
      kids: [],
      request: null,
      selectedKids: [],
    }
  }

  componentDidMount() {
    this.getFamily();
  }

  getFamily = async () => {
    const { id } = this.props.auth.userData;
    const res = await getFamilyMembers(id);
    console.log(res);
    if (res.success) {
      const children = res.success.filter(member => member.role === 2);
        this.setState({ kids: children });
    }
  }

  handleChangeStart = (date) => {
    this.setState({ start_date: date })
  }

  handleChangeEnd = (date) => {
    this.setState({ end_date: date });
  }

  submitRequest = async () => {
    const { start_date, end_date, credits, type, location, kids, selectedKids } = this.state;

    const children = kids.reduce((prev, current) => {
      if (selectedKids.indexOf(current.id) > -1) {
        prev[current.id] = current;
        return prev;
      }
      return prev;
    }, {});

    const data = {
      start_time: start_date.format('YYYY-MM-DD HH:mm:ss'),
      end_time: end_date.format('YYYY-MM-DD HH:mm:ss'),
      recipients: this.props.selected,
      credits,
      type,
      location,
      kids: children
    }

    const res = await requestAppointment(data);
    if (res.success) {

    }

    this.props.onClose();
  }

  onKidSelect = (id) => {
    const { selectedKids } = this.state;
    if (selectedKids.indexOf(id) > -1) {
      this.setState({ selectedKids: selectedKids.filter(kidId => kidId !== id) })
    } else {
      this.setState({ selectedKids: selectedKids.concat(id) });
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onClose}
        style={customStyles}
      >
        <h1>Choose request Options</h1>
        <div className="sitting-datepicker">
          <DatePicker
            showTimeSelect
            selected={this.state.start_date}
            onChange={this.handleChangeStart}
            dateFormat="LLL"
          />
        </div>
        <div className="sitting-datepicker">
          <DatePicker
            showTimeSelect
            selected={this.state.end_date}
            onChange={this.handleChangeEnd}
            dateFormat="LLL"
          />
        </div>
        <UserSelection kids={this.state.kids} selectedKids={this.state.selectedKids} onKidSelect={this.onKidSelect} />
        <div>
          <button className="btn btn--l btn--primary btn--block" onClick={this.submitRequest}>
            Send Request
          </button>
        </div>
      </Modal>
    )
  }
}

export default connect(mapStateToProps)(RequestModal);
