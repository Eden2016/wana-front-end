import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../config/config';

const { api_url } = config;

export const getNotifications = async () => {
  try {
    const res = await fetch(`${api_url}/my-profile/notifications`, {
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

export const readNotification = async (id) => {
  try {
    const res = await fetch(`${api_url}/my-profile/notifications/read/${id}`, {
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

export const deleteNotification = async (id) => {
  try {
    const res = await fetch(`${api_url}/my-profile/notifications/delete/${id}`, {
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

export const getUnreadAmountNotifications = async () => {
  try {
    const res = await fetch(`${api_url}/my-profile/notifications/unread`, {
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
