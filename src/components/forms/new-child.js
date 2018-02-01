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

const vaccineOpts = [
  { label:'Prefer not to say', value: '' },
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
  { label: 'Some', value: 'some' }
];
const allergiesOpts = [
  { label:'Prefer not to say', value: 0 },
  { label: 'Peanuts', value: 'peanuts' },
  { label: 'Mangos', value: 'mangos' },
  { label: 'Dogs', value: 'dogs' },
  { label: 'Other', value: 'other' },
];
const monthOpts = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];
const stateOpts = [
  { label: 'AL', value: 'Alabama'},
  { label: 'AK', value: 'Alaska'},
  { label: 'AZ', value: 'Arizona'},
  { label: 'AR', value: 'Arkansas'},
  { label: 'CA', value: 'California'},
  { label: 'CO', value: 'Colorado'},
  { label: 'CT', value: 'Connecticut'},
  { label: 'DE', value: 'Delaware'},
  { label: 'DC', value: 'District Of Columbia'},
  { label: 'FL', value: 'Florida'},
  { label: 'GA', value: 'Georgia'},
  { label: 'HI', value: 'Hawaii'},
  { label: 'ID', value: 'Idaho'},
  { label: 'IL', value: 'Illinois'},
  { label: 'IN', value: 'Indiana'},
  { label: 'IA', value: 'Iowa'},
  { label: 'KS', value: 'Kansas'},
  { label: 'KY', value: 'Kentucky'},
  { label: 'LA', value: 'Louisiana'},
  { label: 'ME', value: 'Maine'},
  { label: 'MD', value: 'Maryland'},
  { label: 'MA', value: 'Massachusetts'},
  { label: 'MI', value: 'Michigan'},
  { label: 'MN', value: 'Minnesota'},
  { label: 'MS', value: 'Mississippi'},
  { label: 'MO', value: 'Missouri'},
  { label: 'MT', value: 'Montana'},
  { label: 'NE', value: 'Nebraska'},
  { label: 'NV', value: 'Nevada'},
  { label: 'NH', value: 'New Hampshire'},
  { label: 'NJ', value: 'New Jersey'},
  { label: 'NM', value: 'New Mexico'},
  { label: 'NY', value: 'New York'},
  { label: 'NC', value: 'North Carolina'},
  { label: 'ND', value: 'North Dakota'},
  { label: 'OH', value: 'Ohio'},
  { label: 'OK', value: 'Oklahoma'},
  { label: 'OR', value: 'Oregon'},
  { label: 'PA', value: 'Pennsylvania'},
  { label: 'RI', value: 'Rhode Island'},
  { label: 'SC', value: 'South Carolina'},
  { label: 'SD', value: 'South Dakota'},
  { label: 'TN', value: 'Tennessee'},
  { label: 'TX', value: 'Texas'},
  { label: 'UT', value: 'Utah'},
  { label: 'VT', value: 'Vermont'},
  { label: 'VA', value: 'Virginia'},
  { label: 'WA', value: 'Washington'},
  { label: 'WV', value: 'West Virginia'},
  { label: 'WI', value: 'Wisconsin'},
  { label: 'WY', value: 'Wyoming'},
];
const genderOpts = [
  { label:'Prefer not to say', value: 0 },
  { label: 'Female', value: 1 },
  { label: 'Male', value: 2 },
  { label: 'Other', value: 3 }
];
const newChildValidation = {
  first_name: { isRequired },
  last_name: { isRequired },
  gender: { isRequired },
  birth_date: { isRequired },
};

@connect(state => ({ }))
class NewChildForm extends Component {
  constructor(props) {
    super(props);
    const { data, familyName } = props;
    const {
      first_name, last_name, lastNameFromFamily, gender, birth_date, role, avatar_url
    } = data || {};
    this.state = {
      showModal: false,
      formData: {
        first_name: first_name || '',
        last_name: lastNameFromFamily && familyName ? familyName : last_name || '',
        lastNameFromFamily: lastNameFromFamily ? true : familyName ? true : false,
        avatar: avatar_url || '',
        gender: gender || {},
        birth_date: birth_date || '',
        role: role || '',
      }
    };
    this.update = this.update.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleLastName = this.toggleLastName.bind(this);
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
      this.props.dispatch(actions.load('addChild', formattedData));
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.formData !== nextState.formData) {
      this.props.onFormUpdate(nextState.formData);
    }
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
    this.setState({ avatarUrl: filesUploaded[0].url });
  }
  handleSubmit(formData) {
    const { toggleModal, onFormSubmit, dispatch } = this.props;
    onFormSubmit({ newData: formData, oldData: this.props.data });
  }

  update = (e) => {
    this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value }});
  };
  updateSelect = (e, field) => {
    this.setState({ formData: {...this.state.formData, [field]: e.value }});
  };

  render() {
    const { data, familyName } = this.props;
    const { first_name, last_name, gender, birth_date } = data || {};
    const genderValue = '';
    console.log('data on child form', data);
    return (
      <Form model="addChild" onSubmit={this.handleSubmit} validators={newChildValidation}>
        <div className="modal-content main">

          <div className="modal-form well no--pad">
            <div className="well__row avatar-form">
              <Control.file model=".avatar" component={ props => (<AvatarFormField {...props} onSuccess={e => props.onChange(e.filesUploaded[0].url)} />)} />
            </div>
            <div className="well__row">
              <div className="well__section is-halved">
                <label className="input input--text">
                  <span className="label">First Name</span>
                  <Control.text
                    className="input__field"
                    model=".first_name"
                    defaultValue={first_name || ''}
                    placeholder={'First Name'}/>
                  <Errors
                    className="errors"
                    model=".first_name"
                    show="touched"
                    messages={{ isRequired: 'First Name is required' }} />
                </label>
              </div>
              <div className="well__section is-halved">
                 <label className="input input--text">
                  <span className="label">Birth Date</span>
                  <Control.text
                    className="input__field"
                    model=".birth_date"
                    placeholder={'MM/DD/YYYY'}
                    defaultValue={birth_date || ''}
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
            <div className="well__row">
              <div className="well__section is-halved -border-none">
                <label className="input input--text">
                  <span className="label">Last Name</span>
                  <Control.text defaultValue={familyName} className="input__field" model=".last_name" placeholder={'Last Name'} disabled={this.state.formData.lastNameFromFamily}/>
                  <Errors
                    className="errors"
                    model=".last_name"
                    show="touched"
                    messages={{ isRequired: 'Last Name is required' }} />
                </label>
              </div>
              <div className="well__section is-halved -border-none">
                <InputCheckbox
                  checked={this.state.formData.lastNameFromFamily}
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
                  <div className="silly-select-wrapper-that-fixes-postioning">
                    <Control.select
                      model=".gender"
                      defaultValue={gender || false}
                      component={ props => (
                        <Select { ...props } options={genderOpts} />
                      )} />
                    <Errors
                      className="errors"
                      model=".gender"
                      show="touched"
                      messages={{ isRequired: 'Please select a gender' }} />
                  </div>
                </label>
              </div>
              <div className="well__section is-halved">

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

export default NewChildForm;
