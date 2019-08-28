<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'app',
  components: {
    'v-header': header
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.axios.get('/seller').then(res => {
      console.log(res)
      this.seller = res.data.result
      console.log('seller', this.seller)
    })
  }
}
</script>
<style lang="stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
