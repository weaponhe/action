import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import Action from 'action-ui'
require('action-ui/dist/style.css')
Vue.use(Action)

import NavMenu from './components/navMenu.vue'
import TopBar from './components/topBar.vue'
import AddInput from './components/addInput.vue'
import Item from './components/item.vue'
import ItemList from './components/itemList.vue'

Vue.component(NavMenu.name, NavMenu)
Vue.component(TopBar.name, TopBar)
Vue.component(AddInput.name, AddInput)
Vue.component(Item.name, Item)
Vue.component(ItemList.name, ItemList)

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

let routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar}
]

let router = new VueRouter({})
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store,
  router,
  mounted(){
    window.onhashchange = handleHashChange.bind(this)
    location.hash = location.hash
  }
})

function handleHashChange() {
  console.log(location.hash)
}

