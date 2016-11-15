const types = {
  ADD_PROJECT: 'ADD_PROJECT',
  REMOVE_PROJECT: 'REMOVE_PROJECT'
}

const state = {
  all: [],
  types
}

const mutations = {
  [types.ADD_PROJECT] (state, project) {
    addProject(state, project)
  },
  [types.REMOVE_PROJECT] (state, project) {
    console.log(types.REMOVE_PROJECT)
  }
}

export default {
  state,
  mutations
}

let addProject = function (state, project = {}) {
  state.all.unshift({
    name: project.name || 'New Project',
    description: project.description || '',
    tags: project.tags || [],
    done: false
  })
}
