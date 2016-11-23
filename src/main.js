import Vue from 'vue'
import App from './App'
import './components/styles/base.less'
import store from './store'

import Icon from './components/icon'
import Button from './components/button'
import AppBar from './components/appBar'
import Tooltip from './components/tooltip'
import {VerticalMenu, MenuItemList, MenuItem} from './components/verticalMenu'

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(AppBar.name, AppBar)
Vue.component(Tooltip.name, Tooltip)
Vue.component(VerticalMenu.name, VerticalMenu)
Vue.component(MenuItemList.name, MenuItemList)
Vue.component(MenuItem.name, MenuItem)


new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store
})
