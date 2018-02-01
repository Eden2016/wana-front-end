import 'isomorphic-fetch';
import cookie from "react-cookies";
import config from '../../config/config';

const { api_url } = config;

// cookie.remove('token');

const apiGetRequest = async (path) => {
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

export const getSittingsByStatus = (status) => {
  return apiGetRequest(`appointments/status/${status}`);
}

export const getCoordinates = async (address) => {
  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAqbEQj9bqcAMpDeJ3f17Ct-bvBt1hPlL8`)
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const getHousePhotos = (id) => {
  return apiGetRequest(`family/${id}/house-photos`);
}

export const getFamilyMembers = (id) => {
  return apiGetRequest(`family/${id}/members`);
}

export const getFamilyAddress = (id) => {
  return apiGetRequest(`family/${id}/address`);
}

export const getFamily = (id) => {
  return apiGetRequest(`family/${id}`);
}

export const getFamilyTraits = (id) => {
  return apiGetRequest(`family/${id}/traits`);
}

export const getUserUpcomingAppointments = () => {
  return apiGetRequest('appointments');
}

export const getSentAppointmentRequests = () => {
  return apiGetRequest('appointment/requests/sent');
}

export const getSentAppointmentOffers = () => {
  return apiGetRequest('appointment/offers/sent');
}

export const getReceivedAppointmentRequests = () => {
  return apiGetRequest('appointment/requests/received')
}

export const getReceivedAppointmentOffers = () => {
  return apiGetRequest('appointment/offers/received')
}

export const getPastAppointmentRequests = () => {
  return apiGetRequest('appointment/requests/history')
}

export const getPastAppointmentOffers = () => {
  return apiGetRequest('appointment/offers/history')
}

export const getSentAppointmentRequestDetail = (id) => {
  return apiGetRequest(`appointment/request/sent/${id}`)
}

export const getSentAppointmentOfferDetail = (id) => {
  return apiGetRequest(`appointment/offer/sent/${id}`)
}

export const getReceivedAppointmentRequestDetail = (id) => {
  return apiGetRequest(`appointment/request/received/${id}`)
}

export const getReceivedAppointmentOfferDetail = (id) => {
  return apiGetRequest(`appointment/offer/received/${id}`)
}

export const getAppointmentView = (id) => {
  return apiGetRequest(`appointment/${id}`)
}
