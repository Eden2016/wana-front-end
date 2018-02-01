import React, { Component } from 'react';
const ReactDOM = require('react-dom');
import { Typeahead } from 'react-bootstrap-typeahead';
import InputMask from 'react-input-mask';

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      isValid: false,
      isTouched: false
    };
    this.validate = this.validate.bind(this);
    this.toggleTouched = this.toggleTouched.bind(this);
  }
  toggleTouched(touchState) {
    this.setState({ isTouched: touchState ? touchState : !this.state.isTouched });
  }
  validate(value) {
    function validateEmail(string) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(string);
    }
    let errors = [];
    const validatedValue = validateEmail(value, errors);
    if (!validatedValue) errors.push('error');
    return errors;
  }
  componentWillReceiveProps(nextProps) {
    const nextValue = nextProps.value;
    const currentValue = this.props.value;
    if (nextValue !== currentValue) {
      console.log('diff value detected')
    }
    this.setState({ value: nextValue });
  }
  render() {
    const { name, type, onChange, placeholder, required, disabled, value } = this.props;
    const errors = this.validate(value);
    errors.length > 0 ? console.log('errors detected', errors) : null;
    // FIXME - don't use [0] to ID error msg to display
    const errorMarkup = <label className="error-msg">Please enter a valid email address</label>;
    const inputMarkup = <input name={name} type={type} className="input__field" value={value} onFocus={e => this.toggleTouched(true)} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} />;
    const inputMarkupWithError = (
      <div className="input-with-error">
        { inputMarkup }
        { errors.length > 0 && this.state.isTouched ? errorMarkup : null }
      </div>
    );
    return errors.length > 0 ? inputMarkup : inputMarkupWithError;
  }
}

class InputFormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
    //this.update = this.update.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {

  }
  render() {
    const { placeholder, required, type, value, label, labelValue, helper, options, disabled, onChange, name, mask } = this.props;
    let inputType = type;
    if (type === 'typeahead') inputType = 'text';
    const helperMarkup = <small className="input__helper">{ helper }</small>;
    //const invalidMarkup = <small className="input__helper error">{errorMsg}</small>
    let inputMarkup;
    if (type === 'typeahead') {
      inputMarkup = <Typeahead name={name} multiple placeholder={placeholder} onChange={onChange} options={options} required={required} disabled={disabled}/>;
    } else if (mask === 'phone') {
      inputMarkup = <InputMask {...this.props} mask="(999) 999-9999 Ext.\ 999999" maskChar=" " name={name} onChange={onChange} className="input__field" value={value} placeholder={placeholder} required={required} disabled={disabled} />;
    } else if (mask === 'date') {
      inputMarkup = <InputMask {...this.props} mask="99-99-9999" maskChar=" " name={name} onChange={onChange} className="input__field" value={value} placeholder={placeholder} required={required} disabled={disabled} />;
    } else if (type === 'email') {
      inputMarkup = <EmailInput {...this.props} className="input__field" name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} />;
    } else {
      inputMarkup = <input name={name} type={type} className="input__field" value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} />;
    }
    const labelMarkup = (
      <label className={`input input--${inputType}`}>
        <span className="label">{labelValue}</span>
        { inputMarkup }
        { helper ? helperMarkup : null }

      </label>
    );

    return label ? labelMarkup : inputMarkup;
  }
};

export default InputFormField;
