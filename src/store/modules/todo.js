const types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO'
}

const state = {
  all: [],
  types
}

const mutations = {
  [types.ADD_TODO] (state, todo) {
    addTodo(state, todo)
  },
  [types.REMOVE_TODO] (state, todo) {
    console.log(types.REMOVE_TODO)
  }
}

export default {
  state,
  mutations
}

let addTodo = function (state, todo = {}) {
  state.all.unshift({
    name: todo.name || 'New Todo',
    description: todo.description || '',
    tags: todo.tags || [],
    deadline: '',
    project: '',
    done: false
  })
}
