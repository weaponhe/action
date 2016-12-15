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
  CreateSubTodoBox,
  CreateMenuTodoBox,
  CreateMainTodoBox
} from './components/popup'

import TodoDetailView from './components/main-view/TodoDetailView.vue'
import TodoListView from './components/main-view/TodoListView.vue'
import ScheduleView from './components/main-view/ScheduleView.vue'

//test
import Test from './components/popup/src/CreateMenuTodoBox.vue'
Vue.component(Test.name, Test)

Vue.component(NavMenu.name, NavMenu)
Vue.component(TopBar.name, TopBar)
Vue.component(CreateSubTodoBox.name, CreateSubTodoBox)
Vue.component(CreateMenuTodoBox.name, CreateMenuTodoBox)
Vue.component(CreateMainTodoBox.name, CreateMainTodoBox)

let router = new VueRouter({
  routes: [
    {
      path: '/todo/(.*)',
      component: TodoDetailView
    }, {
      path: '/inbox(/.*)*',
      component: TodoDetailView
    }, {
      path: '/schedule',
      component: ScheduleView
    }, {
      path: '/filter/:filter',
      component: TodoListView
    }]
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store,
  router
})
