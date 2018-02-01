import React, { Component } from 'react';

class ApproveModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    }
  }

  onSubmit = () => {
    this.props.closeModal();
    this.props.accept();
  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.closeModal()} className="modal-background">
        </div>
        <div className="sitting-modal">
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

export default ApproveModal;
