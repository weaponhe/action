import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    todo
  }
})
