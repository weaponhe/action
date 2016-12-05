import Vue from 'vue'
import App from './App'
import store from './store'

import Action from 'action-ui'
require('action-ui/dist/style.css')

Vue.use(Action)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store
})
