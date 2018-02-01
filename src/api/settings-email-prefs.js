import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../config/config';

const { api_url } = config;

export const getUserEmailSettings = async () => {
  try {
    const res = await fetch(`${api_url}/account/settings/email`, {
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

export const changeUserEmailSettings = async (initData) => {
  try {
    const res = await fetch(`${api_url}/account/settings/email`, {
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
