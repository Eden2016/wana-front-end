import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateProfileAsync } from '../../actions/app';
import { setSignUpData } from 'actions/login';
import { signUpAsync, storeCompletedSignupForm } from 'actions/app';

import InputFormField from '../../components/wana-ui/input';
import { AvatarFormField } from '../wana-ui/avatar-form';
import Select from 'react-select';
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
const affiliationsSeattle = [
  "YMCA",
  "PEPS (Program for Early Parent Support)",
  "North Sound Explore & Play Group",
  "Eastside Mothers' Club",
  "Gold Creek MOPS",
  "On The Go Northend Moms",
  "24/7 Moms",
  "Cub Scouts",
  "The Gymnastics Connection",
  "BEAM (Bellevue Eastside Active Moms Group)",
  "Junior League of Seattle",
  "MAMAS (Mother Attorneys Mentoring Association of Seattle)",
  "Green Lake Moms",
  "My Gym",
  "Wallingford Moms and Dads",
  "Magnolia Moms and Dads",
  "Yoga in the Center",
  "Meet Up Groups"
];

const userValidation = {
  avatar: { isRequired },
  first_name: { isRequired },
  last_name: { isRequired },
  birth_date: { isRequired },
  role: { isRequired },
  phone1: { isRequired },
  phone2: { isRequired },
  activities: { isRequired },
  parenting_styles: { isRequired }
};


@connect(state => ({
  auth: state.auth,
  signupResults: state.app.get('asyncSignupData'),
  asyncProfileUpdateData: state.app.get('asyncProfileUpdateData'),
  asyncProfileUpdateError: state.app.get('asyncProfileUpdateError'),
  asyncProfileUpdating: state.app.get('asyncProfileUpdating'),
}))

class UserDataForm extends Component {
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
      isComplete: false,
      firstName: '',
      lastName: '',
      birthDate: '',
      role: '',
      phone1: '',
      phone2: '',
      avatarUrl: '',
      activities: [],
      parentingStyles: []
    };
    this.update = this.update.bind(this);
    this.updateRoleSelect = this.updateRoleSelect.bind(this);
    this.updateActivitiesSelect = this.updateActivitiesSelect.bind(this);
    this.updateParentingStylesSelect = this.updateParentingStylesSelect.bind(this);
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(newProps) {
    const { signupResults, asyncProfileUpdateData, asyncProfileUpdateError, asyncProfileUpdating, navToStep, isComplete, onComplete } = newProps;
    if (signupResults) {
      const { errors, success } = signupResults;
      //if successfully signed in & profile was successfully updated w/out error, go to next step
      if (!errors && success && !asyncProfileUpdateError && !asyncProfileUpdating && asyncProfileUpdateData && asyncProfileUpdateData.success) {
        //onComplete();
        navToStep(2, { markPrevAsComplete: true, firstStep: true });
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { navToStep } = prevProps;
    const { isComplete } = prevState;
  }
  update(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  updateRoleSelect(e) {
    this.setState({ role: e });
  }
  updateActivitiesSelect(e) {
    this.setState({ activities: e });
  }
  updateParentingStylesSelect(e) {
    this.setState({ parentingStyles: e });
  }
  handleAvatarUpload(filestackRes) {
    const { filesFailed, filesUploaded } = filestackRes;
    this.setState({ avatarUrl: filesUploaded[0].url });
  }
  handleSubmit(formData) {
    const { dispatch, auth, signupResults, onComplete, navToStep } = this.props;
    console.log('submitting user data form: ', formData);
    console.log(onComplete);
    dispatch(storeCompletedSignupForm(formData));
    //onComplete();
    //navToStep(2);// TEMPORARY FIX
    if (signupResults && signupResults.success || auth.isAuthenticated) {
      const { first_name, last_name, birth_date, role, phone1, phone2, activities, parenting_styles } = formData
      const formattedActivities = activities.map(activity => activity.label.toLowerCase());
      const formattedStyles = parenting_styles.map(style => style.label.toLowerCase());
      const formattedFormData = {
        first_name,
        last_name,
        birth_date: birth_date.split("").reverse().join(""),
        family_role: role? role.label.toLowerCase() : '',
        primary_phone: phone1,
        secondary_phone: phone2,
        favorite_babysitting_activities: formattedActivities,
        parenting_styles: formattedStyles
      }
      console.log('submitting formatted formData:', formattedFormData)
      dispatch(updateProfileAsync(formattedFormData));
    } else {
      // TODO - real error handling
      console.log('form attempted to be submitted, but no login data found!')
    }

  }
  render() {
    const { navToStep, firstName, lastName, birthDate, role, phone1, phone2, dispatch, signupResults, complete } = this.props;
    const maskedInputMarkup = props => (
      <InputFormField
        {...props}
        type="text"
        mask="date"
        name="birth_date"
        placeholder={'MM/DD/YYYY'} />
    );
    const maskedPhoneMarkup = props => (
      <InputFormField
      {...props}
        type="text"
        mask="phone"
        placeholder={'(123) 867-5309'}/>
    );
    console.log('signed up status:', signupResults)
    return (
      <Form model="signup" onSubmit={this.handleSubmit} validators={userValidation}>
        <div className="card card--shadow padding--m -of-visible">
          <Control.text
            model=".avatar"
            component={ props => (<AvatarFormField {...props} onSuccess={e => props.onChange(e.filesUploaded[0].url)} />)} />
          <Errors
            className="errors"
            model=".avatar"
            show="touched"
            messages={{ isRequired: 'Please upload a photo of yourself for your profile' }} />
          <div className="well no--pad -of-visible">
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
                <label className="input input--text">
                  <span className="label">Last Name</span>
                  <Control.text className="input__field" model=".last_name" placeholder={'Last Name'}/>
                  <Errors
                    className="errors"
                    model=".last_name"
                    show="touched"
                    messages={{ isRequired: 'Last Name is required' }} />
                </label>
              </div>
            </div>
            <div className="well__row">
              <div className="well__section is-halved">
                <label className="input input--text">
                  <span className="label">Birth Date</span>
                  <Control.text
                    className="input__field"
                    model=".birth_date"
                    placeholder={'MM/DD/YYYY'}
                    component={ maskedInputMarkup }/>
                  <Errors
                    className="errors"
                    model=".birth_date"
                    show="touched"
                    messages={{ isRequired: 'Birth Date is required' }} />
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
              <div className="well__section is-halved">
                <label className="input input--text">
                  <span className="label">Primary Phone Number</span>
                  <Control.text
                    className="input__field"
                    model=".phone1"
                    component={maskedPhoneMarkup}/>
                  <Errors
                    className="errors"
                    model=".phone1"
                    show="touched"
                    messages={{ isRequired: 'Primary Phone Number is required' }} />
                </label>
              </div>
              <div className="well__section is-halved">
                <label className="input input--text">
                  <span className="label">Secondary Phone Number</span>
                  <Control.text
                    className="input__field"
                    model=".phone2"
                    component={maskedPhoneMarkup}/>
                  <Errors
                    className="errors"
                    model=".phone2"
                    show="touched"
                    messages={{ isRequired: 'Secondary Phone Number is required' }} />
                </label>
              </div>
            </div>
            <div className="well__row">
              <div className="well__section">
                <label className="input">
                  <span className="label">Favorite Babysitting Activities</span>
                  <Control.select
                    model=".activities"
                    component={ props => (
                      <Select
                        { ...props }
                        options={babysittingActivities}
                        searchable={true}
                        clearable={false}
                        multi={true} />
                    )} />
                  <Errors
                    className="errors"
                    model=".activities"
                    show="touched"
                    messages={{ isRequired: 'Please choose at least 1 activity' }} />
                </label>
              </div>
            </div>
            <div className="well__row">
              <div className="well__section">
                <label className="input">
                  <span className="label">Parenting Styles</span>
                  <Control.select
                    model=".parenting_styles"
                    component={ props => (
                      <Select
                        {...props}
                        options={parentingStyles}
                        searchable={true}
                        clearable={false}
                        multi={true} />
                    )} />
                  <Errors
                    className="errors"
                    model=".parenting_styles"
                    show="touched"
                    messages={{ isRequired: 'Please choose at least 1 parenting style' }} />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="well no--pad -border-none">
          <div className="wrapper">
            <div className="wrapper__inner -align-right">
              <button type="submit" className="btn btn--primary">Continue</button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
};

export default UserDataForm;
