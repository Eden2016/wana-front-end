import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';
import cookie from "react-cookies";

import config from '../config/config';

promisePolyfill.polyfill();

const { api_url } = config;
//const api_url = "http://wana.dev";

function testAsync() {
  return fetch('http://date.jsontest.com/')
    .then(response => response.json());
}

function signUpAsync(formData) {
  const url = api_url + "/register-user";
  const data = JSON.stringify(formData);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    },
    body: data,
  })
  .then(response => response.json());
}

function signUpAsyncFacebook(formData) {
  const url =  api_url + "/signup-facebook";
  const data = JSON.stringify(formData);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
    },
    body: data,
  })
  .then(response => response.json());
}

function updateProfileAsync(formData) {
  const url = api_url + "/my-profile";
  const data = JSON.stringify(formData);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
      'Authorization': 'Bearer ' + cookie.load('token')
    },
    body: data,
  })
  .then(response => response.json());
}

const getFamilyAsync = async (userData) => {
  try {
    const res = await fetch(`${api_url}/my-family/members`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.load('token')
        },
      }
    )
    const data = await res.json();
    console.log('get family returned ', data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

function addFamilyAsync(formData) {
  const url = api_url + "/my-family";
  const data = JSON.stringify(formData);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
      'Authorization': 'Bearer ' + cookie.load('token')
    },
    body: data,
  })
    .then(response => response.json());
}

function addFamilyMemberAsync(formData) {
  const url = api_url + "/my-family/member";
  const data = JSON.stringify(formData);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
      'Authorization': 'Bearer ' + cookie.load('token')
    },
    body: data,
  })
    .then(response => response.json());
}

const getGoogleMapBackgroundImage = (location , height=640 , width=640 , zoom = 17) =>{
  const url = `${api_url}/map-location?location=${location}&width=${width}&height=${height}&zoom=${zoom}`
  return fetch(url)
    .then( res => res.json() )
    .catch( console.error )
}

export default {
  testAsync,
  signUpAsync,
  signUpAsyncFacebook,
  updateProfileAsync,
  addFamilyAsync,
  getFamilyAsync,
  addFamilyMemberAsync,
  getGoogleMapBackgroundImage
};
