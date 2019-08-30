import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from './components/header-detail/header-detail'
import Food from './components/food/food'
import ShpCartList from './components/shop-cart-list/shop-cart-list'

createAPI(Vue, HeaderDetail)
createAPI(Vue, Food)
createAPI(Vue, ShpCartList)
