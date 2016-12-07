import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import Action from 'action-ui'
require('action-ui/dist/style.css')

Vue.use(VueRouter)
Vue.use(Action)

import NavMenu from './components/nav-bar'
import TopBar from './components/top-bar'
import {
  ProjectAddBox
} from './components/popup'
// import AddInput from './components/addInput.vue'
// import Item from './components/item.vue'
// import ItemList from './components/itemList.vue'
// import AddProjectBox from './components/addProjectBox.vue'

Vue.component(NavMenu.name, NavMenu)
Vue.component(TopBar.name, TopBar)
Vue.component(ProjectAddBox.name, ProjectAddBox)
  // Vue.component(AddInput.name, AddInput)
  // Vue.component(Item.name, Item)
  // Vue.component(ItemList.name, ItemList)
  // Vue.component(AddProjectBox.name, AddProjectBox)

const Foo = {
  template: '<div>foo</div>'
}
const Bar = {
  template: '<div>bar</div>'
}

let routes = [{
  path: '/foo',
  component: Foo
}, {
  path: '/bar',
  component: Bar
}]

let router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store,
  router,
  mounted() {
    window.onhashchange = handleHashChange.bind(this)
    location.hash = location.hash
  }
})

function handleHashChange() {
  console.log(location.hash)
}