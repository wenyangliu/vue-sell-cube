import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from './components/header-detail/header-detail'
import Food from './components/food/food'

createAPI(Vue, HeaderDetail)
createAPI(Vue, Food)
