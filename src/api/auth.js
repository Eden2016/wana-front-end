import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../config/config';

const { api_url } = config;

export const submitLogin = async (formData) => {
  console.log('submitLogin form data', formData)
  try {
    const res = await fetch(`${api_url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch(err) {
    // TODO - real error handling
    console.log(err);
  }
};

export const getUserData = async () => {
  const fetchOpts = { method: 'GET', headers: { 'Authorization': 'Bearer ' + cookie.load('token') } };
  try {
    const profileInfoQuery = await fetch(`${api_url}/my-profile/information`, fetchOpts);
    const profileInfoData = await profileInfoQuery.json();
    const userQuery = await fetch(`${api_url}/my-profile`, fetchOpts)
    const userData = await userQuery.json();
    const familyPhotoQuery = await fetch(`${api_url}/my-profile/photo`, fetchOpts);
    const familyPhotoData = await familyPhotoQuery.json();
    //const creditsQuery = await fetch(`${api_url}/credits`, fetchOpts)
    //const creditsData = await creditsQuery.json();
    const unreadMsgQuery = await fetch(`${api_url}/message/unread`, fetchOpts)
    const unreadMsgData = await unreadMsgQuery.json();
    const data = {
      ...profileInfoData,
      familyProfilePhoto: familyPhotoData.success,
      //credits: creditsData.success,
      exchange_center: profileInfoData.exchange_center,
      unreadMsgCount: unreadMsgData.success.length
    };
    return data;
  } catch(err) {
    // TODO - real error handling
    console.log(err);
  }
}

export function loginAsyncFacebook(FormData) {
  return fetch(api_url + "/login-facebook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(FormData),
  }).then(function(response) {
    return response.json();
  }, function(error) {
    return error.message;
  });
}

export default {
  submitLogin,
  getUserData,
  loginAsyncFacebook
};
