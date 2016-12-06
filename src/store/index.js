import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import project from './modules/project'

Vue.use(Vuex)

let state = {
    hashString: '',
    view: 'list',//detail
  },
  mutations = {
    // hash (state, project) {
    // },
    // [types.REMOVE_PROJECT] (state, project) {
    //   console.log(types.REMOVE_PROJECT)
    // }
  }


export default new Vuex.Store({
  state,
  getters,
  modules: {
    project
  }
})
