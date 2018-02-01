import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../../config/config';

const { api_url } = config;

const apiPostRequest = async (path, initData) => {
  try {
    const res = await fetch(`${api_url}${path}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.load('token')
        },
      body: JSON.stringify(initData),
      },
    )
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

export const requestAppointment = (data) => {
  return apiPostRequest('/appointment/request', data);
}

export const offerAppointment = (data) => {
  return apiPostRequest('/appointment/offer', data);
}

export const updateSentRequest = (data, id) => {
  return apiPostRequest(`/appointment/request/sent/${id}`, data);
}

export const updateSentOffer = (data, id) => {
  return apiPostRequest(`/appointment/offer/sent/${id}`, data);
}

export const cancelSentRequest = (data, id) => {
  return apiPostRequest(`/appointment/request/sent/${id}/cancel`, data);
}

export const cancelSentOffer = (data, id) => {
  return apiPostRequest(`/appointment/offer/sent/${id}/cancel`, data);
}

export const acceptReceivedRequest = (id) => {
  return apiPostRequest(`/appointment/request/received/${id}/accept`);
}

export const acceptReceivedOffer = (id) => {
  return apiPostRequest(`/appointment/offer/received/${id}/accept`);
}

export const declineReceviedRequest = (id) => {
  return apiPostRequest(`/appointment/request/received/${id}/decline`);
}

export const declineReceivedOffer = (id) => {
  return apiPostRequest(`/appointment/offer/received/${id}/decline`);
}
