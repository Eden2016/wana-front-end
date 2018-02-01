import { apiGetRequest, apiPostRequest } from "./helper"

// GET Get sent appointment offers
export const getSentOffers =
  () => apiGetRequest(`appointment/offers/sent`)

// GET Get received appointment offers
export const getRecievedOffers =
  () => apiGetRequest(`appointment/offers/received`)

// GET Get past appointment offers
export const getPastOffers =
  () => apiGetRequest(`appointment/offers/history`)

// GET Get sent appointment offer detail
export const getSentOffer =
  (id) => apiGetRequest(`/appointment/offer/sent/${id}`)

// GET Get received appointment offer detail
export const getRecievedOffer =
  (id) => apiGetRequest(`appointment/offer/received/${id}`)

// cancel sent offer  ()
export const cancelSentOffer = (id) =>
  apiPostRequest(`/appointment/offer/sent/${ id }/cancel`)

export const updateSentOffer = id =>
  apiPostRequest(`appointment/offer/sent/${id}`)
