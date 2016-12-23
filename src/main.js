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

import TodoList from './components/TodoList'
import Breadcrumb from './components/Breadcrumb'

Vue.component(NavMenu.name, NavMenu)
Vue.component(TopBar.name, TopBar)
Vue.component(CreateSubTodoBox.name, CreateSubTodoBox)
Vue.component(CreateMenuTodoBox.name, CreateMenuTodoBox)
Vue.component(CreateMainTodoBox.name, CreateMainTodoBox)
Vue.component(EditTodoBox.name, EditTodoBox)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(TodoList.name, TodoList)

import TodoDetailView from './components/TodoDetailView'
import MenuTodoView from './components/MenuTodoView'
import FilterView from './components/FilterView'


let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/filter/today'
    },

    {
      name: 'todo',
      path: '/todo',
      // component: TodoDetailView
    },
    {
      name: 'menu',
      path: '/menu',
      // component: MenuTodoView
    },
    {
      name: 'filter',
      path: '/filter/:filter',
      // component: FilterView
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
