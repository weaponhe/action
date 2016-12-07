let PROJECT_LIST = 'PROJECT_LIST'

let all = JSON.parse(localStorage.getItem(PROJECT_LIST)) || []

const types = {
  ADD_PROJECT: 'ADD_PROJECT',
  REMOVE_PROJECT: 'REMOVE_PROJECT'
}

const state = {
  all: all,
  types
}

const getters = {
  all_project(state) {
    return state.all.filter((taskbox) => {
      return taskbox.type === 'project'
    })
  },
  all_book(state) {
    return state.all.filter((taskbox) => {
      return taskbox.type === 'book'
    })
  },
  all_post(state) {
    return state.all.filter((taskbox) => {
      return taskbox.type === 'post'
    })
  }
}

const mutations = {
  [types.ADD_PROJECT](state, project) {
    addProject(state, project)
  },
  [types.REMOVE_PROJECT](state, project) {
    console.log(types.REMOVE_PROJECT)
  }
}

export default {
  state,
  mutations,
  getters
}

let addProject = function (state, project) {
  let exist = state.all.some(item => {
    return item.type === project.type &&
      item.title === project.title
  })
  if (!exist) {
    state.all.push({
      title: project.title,
      description: project.description || '',
      type: project.type,
      path: '/' + project.type + '/' + project.title,
      done: false
    })
  }
  locallySync()
}

let locallySync = function () {
  localStorage.setItem(PROJECT_LIST, JSON.stringify(all))
}