import { get } from './helper'

const getSeller = get('/seller'),
  getGoods = get('/goods'),
  getRatings = get('/ratings')

export {
  getSeller,
  getGoods,
  getRatings
}
