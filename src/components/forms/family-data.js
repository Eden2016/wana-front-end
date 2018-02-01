import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { actions } from 'react-redux-form';

import TinyDropdown from '../wana-ui/dropdown/tiny-dropdown';
import InputFormField from '../wana-ui/input';
import Icon from '../wana-ui/icon';
import { AvatarFormField } from '../wana-ui/avatar-form';
import NewChildForm from './new-child';
import NewAdultForm from './new-adult';
import { addFamilyAsync, getFamilyAsync, addFamilyMemberAsync } from 'actions/app';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

// TODO - spin off into its own component
export const FamilyCard = props => {
  const { name, role, edit, index, onEdit, onDelete } = props;
  return (
    <div className="card">
      <div className="entity__image avatar"></div>
      <div className="group__info tg tg--s">
        <span className="tg__title truncate capitalize">{ name }</span>
        <span className="tg__sub capitalize">{ role }</span>
      </div>
      <TinyDropdown>
        <a onClick={onEdit}>Edit</a><br/>
        <a onClick={() => onDelete(index)}>Delete</a>
      </TinyDropdown>
    </div>
  );
};



class FamilyDataForm extends Component {
  static propTypes = {
    asyncProfileUpdateData: PropTypes.object,
    asyncProfileUpdateError: PropTypes.string,
    asyncProfileUpdating: PropTypes.bool,
    // from react-redux connect
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      updateInProgress: false,
      memberDataSubmitting: null,
      familyMembers: [],
      familyMembersSubmitted: 0,
      showModal: false,
      editModal: false,
      modalFormAdult: false,
      modalFormPreload: null,
      childData: null,
      adultData: null
    };
    this.addFamilyMember = this.addFamilyMember.bind(this);
    this.removeFamilyMember = this.removeFamilyMember.bind(this);
    this.saveFamilyMembers = this.saveFamilyMembers.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.toggleModalForm = this.toggleModalForm.bind(this);
    this.updateChild = this.updateChild.bind(this);
    this.updateAdult = this.updateAdult.bind(this);
  }
  componentDidMount() {
    const { loadingStatus, dispatch, members } = this.props;
    if (members) {
      console.log('family members on mount', members)
      this.setState({
        familyMembers: members
      });
    } else {
      if (!loadingStatus.inProgress) {
        console.log('no family data found, getting family data')
        dispatch(getFamilyAsync())
      }
      if (!loadingStatus.inProgress && loadingStatus.data && !this.state.updateInProgress) {
        console.log('attempting to update family members to ', loadingStatus.data.success)
        this.setState({
          familyMembers: loadingStatus.data.success
        });
      }
    }
  }
  componentWillReceiveProps(newProps) {
    const { auth, signupResults, familyAsyncStatus, familyMemberAsyncStatus, navToStep, isComplete, onComplete, dispatch } = newProps;
    if (signupResults) {
      const signupErrors = signupResults.errors;
      const signupSuccess = signupResults.success;

      if (this.state.updateInProgress) {
        if (!signupErrors && signupSuccess && familyAsyncStatus && !familyAsyncStatus.inProgress && !familyAsyncStatus.errors) {
          console.log('form complete, nav to next form')
          this.setState({ updateInProgress: false });
          //onComplete();
          navToStep(3, { markPrevAsComplete: true });
        }
      }
    }
  }

  toggleModal() {
    this.setState({ ...this.state, showModal: !this.state.showModal, editModal: false });
  }
  toggleModalForm() {
    this.setState({ ...this.state, modalFormAdult: !this.state.modalFormAdult });
  }
  addFamilyMember() {
    const { childData, adultData, familyMembers} = this.state;
    console.group('Add Family Member called')
    console.log('old state:',this.state);
    console.log('new state: ', {
      ...this.state,
      familyMembers,
      adultData: null,
      childData: null
    });
    console.groupEnd()

    let familyMembersNew = familyMembers.slice();
    childData ? familyMembers.push(childData) : null;
    adultData ? familyMembers.push(adultData) : null;
    this.setState({
      ...this.state,
      familyMembers,
      adultData: null,
      childData: null
    });
  }
  removeFamilyMember(index) {
    let prunedFamilyMembers = this.state.familyMembers.slice();
    prunedFamilyMembers.splice(index, 1);
    this.setState({
      ...this.state,
      familyMembers: prunedFamilyMembers
    });
  }
  openEditModal(familyMember) {
    this.setState({
      ...this.state,
      showModal: true,
      editModal: true,
      modalFormPreload: familyMember,
      modalFormAdult: familyMember.role.label === 'child' ? false : true
    });
  }
  updateChild(childData) {
    const { dispatch } = this.props;
    let familyMembers = this.state.familyMembers.slice();
    if (this.state.editModal && familyMembers.length > 0 && childData.oldData) {
      const { newData, oldData } = childData;
      let index = null;
      familyMembers.map( ({ first_name, last_name }, i) => {
        if (first_name === oldData.first_name && last_name === oldData.last_name) {
          index = i;
        }
      });
      familyMembers.splice(index, 1, newData);
    } else {
      familyMembers.push(childData.newData)
    }
    this.setState({
      familyMembers: familyMembers,
      childData: null,
      modalFormPreload: null,
    }, () => {
      dispatch(actions.reset('addChild'));
      // TODO - shouldn't have to clear adult on child submit
      dispatch(actions.reset('addAdult'));
      this.toggleModal();
    });
  }
  updateAdult(adultData) {
    const { dispatch } = this.props;
    let familyMembers = this.state.familyMembers.slice();
    if (this.state.editModal && familyMembers.length > 0 && adultData.oldData) {
      const { newData, oldData } = adultData;
      let index = null;
      familyMembers.map( ({ first_name, last_name }, i) => {
        if (first_name === oldData.first_name && last_name === oldData.last_name) {
          index = i;
        }
      });
      familyMembers.splice(index, 1, newData);
    } else {
      familyMembers.push(adultData.newData)
    }
    this.setState({
      familyMembers: familyMembers,
      adultData: null,
      modalFormPreload: null,
    }, () => {
      dispatch(actions.reset('addAdult'));
      // TODO - shouldn't have to clear child on adult submit
      dispatch(actions.reset('addChild'));
      this.toggleModal();
    });
  }
  saveFamilyMembers() {
    console.group('Save family members called');
    console.log('family members at current state:');
    console.log(this.state.familyMembers);
    console.groupEnd();
    this.setState({ updateInProgress: true, memberDataSubmitting: this.state.familyMembers.length });
    const { dispatch, onComplete } = this.props;
    dispatch(addFamilyAsync({name: 'My Family'}, this.state.familyMembers));
  }
  render() {
    const { modalFormAdult, modalFormPreload, editModal } = this.state;
    const { isSignup, members, navToStep, familyName, auth } = this.props || {};
    const handleModalContinue = () => {
      this.addFamilyMember();
      this.toggleModal();
    };
    const cardBlank = (
      <div className="entity-card col col--1-of-2">
        <FamilyCard edit={true} />
      </div>
    );
    let familyCards = [];
    this.state.familyMembers.map( (familyMember, i) => {
      console.log(familyMember)
      const { first_name, role: { label }} = familyMember;
      const card = (
        <div key={i} className="entity-card col col--1-of-2">
          <FamilyCard
            index={i}
            name={first_name}
            role={label}
            onEdit={() => this.openEditModal(familyMember)}
            onDelete={this.removeFamilyMember} />
        </div>
      );
      familyCards.push(card);
    });
    return (
      <div>
        { isSignup && <p>Add members of your family! You must add at least 1 child to join.</p> }
        { !isSignup && <p>Edit members of your family! You must include at least 1 child to use Wana.</p> }
        <div className="row row--tight-gutter">
          { familyCards }
        </div>
        <div className="dragdrop well well--dashed -align-center">
          <img src="/assets/img/cloud-upload.png" alt="" width="52" />
          <div className="tg tg--m margin--s no--margin-lr -width-100">
            <span className="tg__title">Add a New Family Member</span>
            <span className="tg__sub">Drag & drop their photo to this box, or click below to get started.</span>
          </div>
          <button onClick={this.toggleModal} className="btn btn--secondary">Add Family Member</button>
          <ReactModal
            className="modal modal-action"
            overlayClassName="modal-overlay modal-action"
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example">
            <div className="modal-content header">
              <div className="modal__title flex__col">
                <Icon icon="family" type="box" color="primary" />
                <ul className="list list--inline list--padded">
                  <li className="item">
                    <h3>{ editModal ? 'Edit Family Member' : 'Add New' }</h3>
                  </li>
                  { editModal ? (<span />) : (
                    <li className="item">
                      <div className="toggle toggle--tabs">
                        <label className="toggle__tab">
                          <input type="radio" name="memberType" checked={!modalFormAdult} onChange={this.toggleModalForm} />
                          <span>Child</span>
                        </label>
                        <label className="toggle__tab">
                          <input type="radio" name="memberType" checked={modalFormAdult} onChange={this.toggleModalForm} />
                          <span>Adult</span>
                        </label>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              <div className="modal__close flex__col -align-right">
                <button className="btn btn--link btn--s btn--icon" onClick={this.toggleModal}>
                  <Icon icon="close" />
                </button>
              </div>
            </div>
            {
              modalFormAdult ? (
                <NewAdultForm familyName={familyName} onFormSubmit={this.updateAdult} data={this.state.modalFormPreload} toggleModal={this.toggleModal} />
              ) : (
                <NewChildForm familyName={familyName} onFormSubmit={this.updateChild} data={this.state.modalFormPreload} toggleModal={this.toggleModal} />
              )
            }
          </ReactModal>
        </div>
        <div className="well no--pad -border-none">
          <div className="wrapper">
            <div className="wrapper__inner -align-right">
              <button onClick={() => {this.saveFamilyMembers()}} className="btn btn--primary">Continue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    familyName: state.signup.last_name,
    signupResults: state.app.get('asyncSignupData'),
    loadingStatus: {
      inProgress: state.app.get('asyncFamilyLoading'),
      errors: state.app.get('asyncFamilyLoadingError'),
      data: state.app.get('asyncFamilyLoadingData')
    },
    familyAsyncStatus: {
      inProgress: state.app.get('asyncFamilyUpdating'),
      errors: state.app.get('asyncFamilyUpdateError'),
      data: state.app.get('asyncFamilyUpdateData')
    },
    familyMemberAsyncStatus: {
      inProgress: state.app.get('asyncFamilyMemberUpdating'),
      errors: state.app.get('asyncFamilyMemberUpdateError'),
      data: state.app.get('asyncFamilyMemberUpdateData')
    }
  };
};

export default connect(mapStateToProps)(FamilyDataForm);
