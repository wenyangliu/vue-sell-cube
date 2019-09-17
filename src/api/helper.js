import axios from 'axios'

const urlMap = {
  development: '/',
  production: 'https://easy-mock.com/mock/5d65f7a9e26c58281ca886af/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]

export function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params
    })
      .then(res => {
        const { code, data } = res.data
        if (code === 0) {
          return data
        }
      })
      .catch(e => console.log(e))
  }
}
