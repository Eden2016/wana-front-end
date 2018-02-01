import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../config/config';

const { api_url } = config;

export const getUserPaymentMethods = async () => {
  try {
    console.log(cookie.load('token'));
    const res = await fetch(`${api_url}/account/settings/payment-methods`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + cookie.load('token')
      },
      })
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

export const createUserPaymentMethod = async (initData) => {
  try {
    const res = await fetch(`${api_url}/account/settings/payment-method`, {
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

export const removePaymentMethod = async (id) => {
  try {
    const res = await fetch(`${api_url}/account/settings/payment-method/${id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('token')
      },
    })
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const setUserDefaultPaymentMethod = async (initData) => {
  try {
    const res = await fetch(`${api_url}/account/settings/payment-method-default`, {
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
