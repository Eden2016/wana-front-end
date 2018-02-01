// React-Redux-Form validator functions
export const isRequired = (val) => {
  if (typeof val === 'object') {
    return !isEmpty(val);
  } else {
    return val && val.length;
  }
};
export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor;
export const passwordsMatch = (vals) => vals.password === vals.password_confirmation;
export const passwordLongEnough = (val) => val && val.length > 7;
export const isEmail = (val) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return val && re.test(val);
};
export const isZip = (val) => {
  const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  return val && re.test(val);
};

export const validateProfile = (userData, opts) => {
  const { returnFull } = opts || {};
  let profileValid = true;
  let validationState = {
    avatar: false,
    first_name: false,
    last_name: false,
    birth_date: false,
    primary_phone: false,
    secondary_phone: false,
    parenting_styles: false,
    family_role: false,
    favorite_babysitting_activities: false,
    family: false
  };
  console.log('val state initial:', validationState)
  const mapFn = ([key, value]) => {
    if (value) validationState[key] = true;
    return ({[key]: value ? value : ''});
  };
  const mapFn2 = ([key, value]) => {
    if (!value) profileValid = false;
    return ({[key]: value ? value : ''});
  };
  let thing = Object.assign(...Object.entries(userData).map(mapFn));
  let thing2 = Object.assign(...Object.entries(validationState).map(mapFn2));
  console.log('final val state', validationState);
  console.log(profileValid)
  return returnFull ? { profileValid, validationState } : profileValid;
};
