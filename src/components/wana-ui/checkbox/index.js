import React from 'react';

const InputCheckbox = props => {
  const { label, labelValue, checked, name, onChange } = props;
  const checkboxMarkup = (
    <label className="input input--checkbox">
      <input name={name} onChange={onChange} type="checkbox" checked={checked}/>
      { label ? labelValue : null }
    </label>
  );
  return checkboxMarkup
};

export default InputCheckbox;
