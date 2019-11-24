import axios from 'axios'

const urlMap = {
  development: '/',
  // production: 'https://easy-mock.com/mock/5d65f7a9e26c58281ca886af/sell/'
  production: 'http://52.221.216.101:7300/mock/5dda16036f98677e63f5d793/sell/'
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
