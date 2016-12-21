import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import Action from 'action-ui'
require('action-ui/dist/style.css')

Vue.use(VueRouter)
Vue.use(Action)

import TopBar from './components/TopBar'
import NavMenu from './components/NavBar'
import {
  CreateSubTodoBox,
  CreateMenuTodoBox,
  CreateMainTodoBox,
  EditTodoBox
} from './components/TodoPopupBox'

import Breadcrumb from './components/Breadcrumb'

import {
  TodoDetailView
} from './components/TodoDetailView'

Vue.component(NavMenu.name, NavMenu)
Vue.component(TopBar.name, TopBar)
Vue.component(CreateSubTodoBox.name, CreateSubTodoBox)
Vue.component(CreateMenuTodoBox.name, CreateMenuTodoBox)
Vue.component(CreateMainTodoBox.name, CreateMainTodoBox)
Vue.component(EditTodoBox.name, EditTodoBox)
Vue.component(Breadcrumb.name, Breadcrumb)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/filter/today'
    },
    {
      path: '/todo/(.*)',
      component: TodoDetailView
    },
    // {
    //   path: '/schedule',
    //   component: ScheduleView
    // },
    {
      path: '/filter/:filter',
      // component: TodoListView
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
