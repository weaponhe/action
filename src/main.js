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
  TodoAddBox,
  TaskAddBox
} from './components/popup'

import ProjectListView from './components/main-view/ProjectListView.vue'
import TaskListView from './components/main-view/TaskListView.vue'
import ScheduleView from './components/main-view/ScheduleView.vue'

Vue.component(NavMenu.name, NavMenu)
Vue.component(TopBar.name, TopBar)
Vue.component(TodoAddBox.name, TodoAddBox)
Vue.component(TaskAddBox.name, TaskAddBox)

let router = new VueRouter({
  routes: [{
    path: '/todo/:type',
    component: ProjectListView
  }, {
    path: '/todo/:type/:title',
    component: TaskListView
  },{
    path: '/schedule',
    component: ScheduleView
  },{
    path: '/filter/:filter',
    component: TaskListView
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
