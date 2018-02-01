import "isomorphic-fetch"
import cookie from "react-cookies"
import config from "../config/config"

const { api_url } = config

export const apiGetRequest = path => {
  return fetch(`${api_url}/${path}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + cookie.load("token"),
    },
  }).then(res => {
    let json = res.json()
    if (res.status >= 200 && res.status < 300) {
      return json
    } else {
      return json.then(Promise.reject.bind(Promise))
    }
  })
}

export const apiPostRequest = path => {
  return fetch(`${api_url}/${path}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + cookie.load("token"),
    },
  }).then(res => {
    let json = res.json()
    if (res.status >= 200 && res.status < 300) {
      return json
    } else {
      return json.then(Promise.reject.bind(Promise))
    }
  })
}
