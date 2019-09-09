import Vue from 'vue'

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  TabBar,
  TabPanels,
  Popup,
  Dialog,
  ImagePreview,
  Scroll,
  Slide,
  Sticky,
  ScrollNav,
  ScrollNavBar
} from 'cube-ui'

Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(Popup)
Vue.use(Dialog)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(Sticky)
Vue.use(ScrollNav)
Vue.use(ScrollNavBar)
