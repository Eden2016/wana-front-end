import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../config/config';

const { api_url } = config;

export const getSubscription = async () => {
  try {
    const res = await fetch(`${api_url}/subscription-channel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('token')
      },
    })
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

export const sendMessage = async (initData) => {
  try {
    const res = await fetch(`${api_url}/message/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('token')
      },
      body: JSON.stringify(initData)
    })
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

export const getThreads = async (initData) => {
  try {
    const res = await fetch(`${api_url}/message/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('token')
      },
      body: JSON.stringify(initData)
    })
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

export const getThreadMessages = async (id) => {
  try {
    const res = await fetch(`${api_url}/message/thread/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('token')
      },
    })
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

export const getUnreadMessages = async () => {
  try {
    const res = await fetch(`${api_url}/message/unread`, {
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
