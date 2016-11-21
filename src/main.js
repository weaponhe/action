import Vue from 'vue'
import App from './App'
import './components/styles/base.less'
import store from './store'

import Icon from './components/icon'
import AppBar from './components/appBar'
import Tooltip from './components/tooltip'
import {Tree, NavBar} from './components/navBar'

Vue.component(Icon.name, Icon)
Vue.component(AppBar.name, AppBar)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Tree.name, Tree)
Vue.component(NavBar.name, NavBar)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store
})
