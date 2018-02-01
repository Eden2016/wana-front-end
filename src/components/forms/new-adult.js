import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import InputFormField from '../../components/wana-ui/input';
import InputCheckbox from '../../components/wana-ui/checkbox';
import { AvatarFormField } from '../wana-ui/avatar-form';

import { Control, Form, Field, Errors, actions } from 'react-redux-form';
import {
  isRequired,
  isEmail,
  passwordLongEnough,
  passwordsMatch
} from '../../utils/validators';

const roleOpts = [
  { label:'Parent', value: 0 },
  { label: 'Grandparent', value: 1 },
  { label: 'Guardian', value: 2 }
];

// FIXME - hardcoded data
const babysittingActivities = [
  { label:'Walks & Hiking', value: 0 },
  { label: 'Free Play', value: 1 },
  { label: 'Park Time', value: 2 },
  { label:'Arts & Crafts', value: 3 },
  { label: 'Sports', value: 4 },
  { label: 'Board Games', value: 5 },
  { label:'Video Games', value: 6 },
  { label: 'Movies', value: 7 },
  { label: 'Homework', value: 8 },
  { label:'Cooking & Baking', value: 9 },
  { label: 'Reading & Story Time', value: 10 },
  { label: 'Yoga', value: 11 },
  { label: 'Development Activity (like Tummy Time)', value: 12 }
];
const parentingStyles = [
  { label:'Positive', value: 0 },
  { label: 'Attachment', value: 1 },
  { label: 'Unconditional', value: 2 },
  { label:'Spiritual/Holistic', value: 3 },
  { label: 'Nurturant', value: 4 },
  { label: 'Authoritative', value: 5 },
  { label:'Authoritarian (Strict)s', value: 6 },
  { label: 'Permissive (Indulgent)', value: 7 }
];
const genderOpts = [
  { label:'Prefer not to say', value: 0 },
  { label: 'Female', value: 1 },
  { label: 'Male', value: 2 },
  { label: 'Other', value: 3 }
];

const newAdultValidation = {
  first_name: { isRequired },
  last_name: { isRequired },
  gender: { isRequired },
  role: { isRequired },
  birth_date: { isRequired },
};

@connect(state => ({
  signupResults: state.app.get('asyncSignupData')
}))

class NewAdultForm extends Component {
  constructor(props) {
    super(props);
    const { data, familyName } = props;
    const {
      first_name, last_name, lastNameFromFamily, gender, birth_date, role, avatar_url
    } = data || {};
    console.log('ROLE!', role)
    this.state = {
      showModal: false,
      formData: {
        first_name: first_name || '',
        last_name: lastNameFromFamily && familyName ? familyName : last_name || '',
        lastNameFromFamily: lastNameFromFamily ? true : familyName ? true : false,
        avatar: avatar_url || '',
        gender: gender || {},
        birth_date: birth_date || '',
        role: role && role !== 'child' ? role : '',
      }
    };
    this.update = this.update.bind(this);
    this.updateRoleSelect = this.updateRoleSelect.bind(this);
    this.updateGenderSelect = this.updateGenderSelect.bind(this);
    this.toggleLastName = this.toggleLastName.bind(this);
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    const { dispatch, user, data} = this.props;
    if (data) {
      const { avatar, first_name, last_name, role, gender, birth_date, } = data || {};
      const formattedData = {
        avatar_url: avatar,
        first_name,
        last_name,
        role,
        gender,
        birth_date
      };
      this.props.dispatch(actions.load('addAdult', formattedData));
    }
  }
  update(e) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  }
  updateRoleSelect(e) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        role: e
      }
    });
  }
  updateGenderSelect(e) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        gender: e
      }
    });
  }
  toggleLastName() {
    const currentState = this.state.formData.lastNameFromFamily;
    const updatedValue = !currentState ? this.props.familyName : '';
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        lastNameFromFamily: !currentState
      }
    });
    this.props.dispatch(actions.change('addChild.last_name', updatedValue));
  }
  handleAvatarUpload(filestackRes) {
    const { filesFailed, filesUploaded } = filestackRes;
    this.setState({ avatar_url: filesUploaded[0].url });
  }
  handleSubmit(formData) {
    const { toggleModal, onFormSubmit, dispatch } = this.props;
    onFormSubmit({ newData: formData, oldData: this.props.data });
  }

  render() {
    const { formData } = this.state;
    const { familyName, data } = this.props;
    return (
      <Form model="addAdult" onSubmit={this.handleSubmit} validators={newAdultValidation}>
        <div className="modal-content main">
          <div className="modal-form well no--pad">
            <div className="well__row avatar-form">
            <Control.file model=".avatar" component={ props => (<AvatarFormField {...props} onSuccess={e => props.onChange(e.filesUploaded[0].url)} />)} />
            </div>
            <div className="well__row">
              <div className="well__section is-halved">
                <label className="input input--text">
                  <span className="label">First Name</span>
                  <Control.text className="input__field" model=".first_name" placeholder={'First Name'}/>
                  <Errors
                    className="errors"
                    model=".first_name"
                    show="touched"
                    messages={{ isRequired: 'First Name is required' }} />
                </label>
              </div>
              <div className="well__section is-halved">
                <label className="input">
                  <span className="label">Family Role</span>
                  <Control.select
                    model=".role"
                    component={ props => (
                      <Select
                        { ...props }
                        options={roleOpts} />
                    )} />
                  <Errors
                    className="errors"
                    model=".role"
                    show="touched"
                    messages={{ isRequired: 'Please select a role' }} />
                </label>
              </div>
            </div>

            <div className="well__row">
              <div className="well__section is-halved -border-none">
                <label className="input input--text">
                  <span className="label">Last Name</span>
                  <Control.text defaultValue={familyName} className="input__field" model=".last_name" placeholder={'Last Name'} disabled={formData.lastNameFromFamily}/>
                  <Errors
                    className="errors"
                    model=".last_name"
                    show="touched"
                    messages={{ isRequired: 'Last Name is required' }} />
                </label>
              </div>
              <div className="well__section is-halved -border-none">
                <InputCheckbox
                  checked={formData.lastNameFromFamily}
                  name="lastNameFromFamily"
                  label={true}
                  onChange={this.toggleLastName}
                  labelValue="Same as Family Name"/>
              </div>
            </div>

            <div className="well__row">
              <div className="well__section is-halved">
                <label className="input input--text">
                  <span className="label">Gender</span>
                  <Control.select
                    model=".gender"
                    component={ props => (
                      <Select
                        { ...props }
                        options={genderOpts} />
                    )} />
                  <Errors
                    className="errors"
                    model=".gender"
                    show="touched"
                    messages={{ isRequired: 'Please select a gender' }} />
                </label>
              </div>
              <div className="well__section is-halved">
                <label className="input input--text">
                  <span className="label">Birth Date</span>
                  <Control.text
                    className="input__field"
                    model=".birth_date"
                    placeholder={'MM/DD/YYYY'}
                    component={props => (
                      <InputFormField
                        {...props}
                        type="text"
                        mask="date"
                        name="birth_date"
                        placeholder={'MM/DD/YYYY'} />
                    )}/>
                  <Errors
                    className="errors"
                    model=".birth_date"
                    show="touched"
                    messages={{ isRequired: 'Birth Date is required' }} />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-content footer">
          <div className="wrapper">
            <div className="wrapper__inner -align-right">
              <button type="submit" className="btn btn--primary">Continue</button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default NewAdultForm;
