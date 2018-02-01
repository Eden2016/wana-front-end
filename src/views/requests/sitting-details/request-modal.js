import React, { Component } from 'react';
import DatePicker from "react-datepicker"
import * as moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class RequestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      startDate: moment(),
      endDate: moment(),
    }
  }

  handleChangeStart = (date) => {
    this.setState({ startDate: date })
  }

  handleChangeEnd = (date) => {
    this.setState({ endDate: date });
  }

  componentDidMount() {
    const { end_time, start_time } = this.props.sit;
    this.setState({ startDate: moment(start_time), endDate: moment(end_time) });
  }

  onSubmit = () => {
    this.props.closeModal();
    this.props.request(this.state);
  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.closeModal()} className="modal-background">
        </div>
        <div className="sitting-modal">
          <div className="sitting-datepicker">
            <DatePicker
              showTimeSelect
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              dateFormat="LLL"
            />
          </div>
          <div className="sitting-datepicker">
            <DatePicker
              showTimeSelect
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              dateFormat="LLL"
            />
          </div>
          <div>
            <textarea onChange={(e) => this.setState({ description: e.target.value })} />
          </div>
          <div className="tag tag--secondary tag--s">{`Earn ${this.props.points} Points`}</div>
          <div><button onClick={this.onSubmit} className="submit-button">Submit</button></div>
        </div>
      </div>
    )
  }
}

export default RequestModal;
