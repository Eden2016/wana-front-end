import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../config/config';

const { api_url } = config;

export const getUserData = async () => {
  try {
    const res = await fetch(`${api_url}/my-profile`, {
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

export const connectToFacebook = async () => {
  try {
    const res = await fetch(`${api_url}/account/settings/connect-facebook`, {
      method: 'POST',
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

export const updateUserProfile = async (userData) => {
  try {
    const res = await fetch(`${api_url}/my-profile`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.load('token')
        },
        body: JSON.stringify(userData),
      }
    )
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
