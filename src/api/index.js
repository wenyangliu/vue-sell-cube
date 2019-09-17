import { get } from './helper'

const getSeller = get('api/seller'),
  getGoods = get('api/goods'),
  getRatings = get('api/ratings')

export {
  getSeller,
  getGoods,
  getRatings
}
