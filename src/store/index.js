import Vue from 'vue'
import Vuex from 'vuex'
import project from './modules/project'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    todo
  }
})
