import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Filter from './filter'

// import Action from 'action-ui'
import Action from '../deps/action-ui'

Vue.use(VueRouter)
Vue.use(Action)
Vue.use(Filter)


import TopBar from './components/TopBar'
import NavMenu from './components/NavBar'
import {
  CreateSubTodoBox,
  CreateMenuTodoBox,
  CreateMainTodoBox,
  EditTodoBox,
  PatchTodoBox
} from './components/TodoPopupBox'
import TodoList from './components/TodoList'
import Breadcrumb from './components/Breadcrumb'
import Nothing from './components/Nothing'
import BatchOptionPopup from './components/BatchOptionPopup'

Vue.component(NavMenu.name, NavMenu)
Vue.component(TopBar.name, TopBar)
Vue.component(CreateSubTodoBox.name, CreateSubTodoBox)
Vue.component(CreateMenuTodoBox.name, CreateMenuTodoBox)
Vue.component(CreateMainTodoBox.name, CreateMainTodoBox)
Vue.component(EditTodoBox.name, EditTodoBox)
Vue.component(PatchTodoBox.name, PatchTodoBox)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(TodoList.name, TodoList)
Vue.component(Nothing.name, Nothing)
Vue.component(BatchOptionPopup.name, BatchOptionPopup)


import TodoDetailView from './components/TodoDetailView'
import {
  TodayFilterView,
  TomorrowFilterView
} from './components/FilterView'
import DoneView from './components/DoneView'
import ArchiveView from './components/ArchiveView'

let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/filter/today'
    }, {
      // name: 'filter',
      path: '/filter/today',
      component: TodayFilterView
    },
    {
      // name: 'filter',
      path: '/filter/tomorrow',
      component: TomorrowFilterView
    },
    {
      name: 'todo',
      path: '/todo',
      component: TodoDetailView
    },
    {
      // name: 'done',
      path: '/history/done',
      component: DoneView
    }, {
      // name: 'archive',
      path: '/history/archive',
      component: ArchiveView
    },
    /*{
     name: 'default',
     path: '/!*',
     redirect: '/'
     }*/]
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
