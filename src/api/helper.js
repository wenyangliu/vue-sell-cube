import axios from 'axios'

export function get(url) {
  return function (params = {}) {
    return axios.get(url, {
      params
    })
      .then(res => {
        const { code, result } = res.data
        if (code === 0) {
          return result
        }
      })
      .catch(e => console.log(e))
  }
}
