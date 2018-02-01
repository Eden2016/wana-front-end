import { apiGetRequest, apiPostRequest } from "./helper"

export const getSentRequests =
  () => apiGetRequest(`appointment/requests/sent`)

export const getRecievedRequests =
  () => apiGetRequest(`appointment/requests/received`)

export const getSentRequest =
  (id) => apiGetRequest(`appointment/requests/sent/${id}`)

export const getRecievedRequest =
  (id) => apiGetRequest(`appointment/requests/received/${id}`)
