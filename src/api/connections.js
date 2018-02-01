import 'isomorphic-fetch';
import cookie from 'react-cookies';
import config from '../config/config';

const { api_url } = config;

export const get = async (path) => {
  try {
    const res = await fetch(`${api_url}/${path}`, {
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

export const getConnections = () => {
  return get('profile/connections');
}

export const getFavorites = () => {
  return get('profile/connections/favorite');
}

export const addFavorite = (id) => {
  return get(`family/${id}/favorite`);
}

export const removeFavorite = (id) => {
  return get(`family/${id}/unfavorite`);
}

export const getFamily = (id) => {
  return get(`family/${id}`);
}

export const getFamilyMembers = (id) => {
  return get(`family/${id}/members`);
}

export const getPast = () => {
  return get('profile/connections/past');
}

export const getFacebook = () => {
  return get('profile/connections/facebook');
}
