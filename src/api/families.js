import "isomorphic-fetch"
import cookie from "react-cookies"
import config from "../config/config"
//import { apiGetRequest } from "./helper"

const { api_url } = config

const apiGetRequest = path => {
  return fetch(`${api_url}/${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie.load("token")}`,
    },
  })
    .then(res => {
      let json = res.json()
      if (res.status >= 200 && res.status < 300) {
        return json
      } else {
        return json.then(Promise.reject.bind(Promise))
      }
    })
    .catch(console.error)
}

export const apiPosRequest = (path, data) => {

  return fetch(`${api_url}/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookie.load("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(res => {
    let json = res.json()
    if (res.status >= 200 && res.status < 300) {
      return json
    } else {
      return json.then(Promise.reject.bind(Promise))
    }
  })

}

export const getFamilyById = id => apiGetRequest(`family/${id}`)
export const getFamilyTraitsById = id => apiGetRequest(`family/${id}/traits`)
export const getFamilyAddressById = id => apiGetRequest(`family/${id}/address`)
export const getFamilyMembersById = id => apiGetRequest(`family/${id}/members`)
export const getFamilyMap = (location, zoom = 17, height = 640, width = 640) =>
  apiGetRequest(`map-location?location=${location}&height=${height}&width=${width}&zoom=20`)
export const getFamilyHousePhotosById = id => apiGetRequest(`family/${id}/house-photos`)
export const getMyFamilyAddress = id => apiGetRequest(`my-family/address`)


export const getFamilyFeedById = (id, page = 1) => apiGetRequest(`family/${id}/feed/?page=${page}`)
export const favFamilyById = id => apiGetRequest(`/family/${id}/favorite`)
export const unFavFamilyById = id => apiGetRequest(`/family/${id}/unfavorite`)
export const getFavFamilies = () => apiGetRequest(`/family/favorites`)

//  data is a space seperated string
export const filterFamilies = data => apiPosRequest(`family/filter`, data )
export const filterFamiliesUnauthenticated = data => apiPosRequest(`family/filter`, data )
