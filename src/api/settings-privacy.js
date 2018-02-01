import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../config/config';

const { api_url } = config;

export const getUserPrivacySettings = async () => {
  try {
    const res = await fetch(`${api_url}/account/settings/privacy`, {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + cookie.load('token')
        },
      }
    )
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

export const changeUserPrivacySettings = async (initData) => {
  try {
    const res = await fetch(`${api_url}/account/settings/privacy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('token')
      },
      body: JSON.stringify(initData),
    })
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}
