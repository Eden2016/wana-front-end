import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker"
import * as moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { offerAppointment } from 'api/sittings/post';

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

class OfferModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: moment(),
      end_date: moment(),
      type: 'offer',
      credits: 50,
      offer: null,
    }
  }

  handleChangeStart = (date) => {
    this.setState({ start_date: date })
  }

  handleChangeEnd = (date) => {
    this.setState({ end_date: date });
  }

  submitRequest = async () => {
    const { start_date, end_date, credits, type } = this.state;
    const data = {
      start_time: start_date.format('YYYY-MM-DD HH:mm:ss'),
      end_time: end_date.format('YYYY-MM-DD HH:mm:ss'),
      recipients: this.props.selected,
      credits,
      type,
    }

    const res = await offerAppointment(data);
    if (res.success) {

    }

    this.props.onClose();
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
        <div>
          <button className="btn btn--l btn--primary btn--block" onClick={this.submitRequest}>
            Send Offer
          </button>
        </div>
      </Modal>
    )
  }
}

export default connect(mapStateToProps)(OfferModal);
