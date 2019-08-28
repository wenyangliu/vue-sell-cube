<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header'

export default {
  name: 'app',
  components: {
    'v-header': VHeader
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
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
