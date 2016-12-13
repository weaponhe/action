let PROJECT_LIST = 'PROJECT_LIST'

let all = JSON.parse(localStorage.getItem(PROJECT_LIST)) || []

const types = {
  ADD_PROJECT: 'ADD_PROJECT',
  ADD_TASK: 'ADD_TASK',
  REMOVE_PROJECT: 'REMOVE_PROJECT'
}

const todoTypeMap = {
  project: {value: 'project', text: '项目'},
  book: {value: 'book', text: '书单'},
  post: {value: 'post', text: '文章'}
}


const state = {
  all: all,
  types,
  todoTypeMap
}

const getters = {
  project(state) {
    return state.all.filter((todo) => {
      return todo.type === 'project'
    })
  },
  book(state) {
    return state.all.filter((todo) => {
      return todo.type === 'book'
    })
  },
  post(state) {
    return state.all.filter((todo) => {
      return todo.type === 'post'
    })
  },
  todoTypeArray(){
    let keys = Object.keys(todoTypeMap)
    return keys.map((key) => {
      return todoTypeMap[key].value
    })
  }
}

const mutations = {
  [types.ADD_PROJECT](state, project) {
    addProject(state, project)
  },
  [types.REMOVE_PROJECT](state, project) {
    console.log(types.REMOVE_PROJECT)
  },
  [types.ADD_TASK](state, todo, task){
    addTask(state, todo, task)
  }
}

export default {
  state,
  mutations,
  getters
}

let addProject = function (state, project) {
  state.all.push({
    title: project.title,
    description: project.description || '',
    type: project.type,
    path: '/todo/' + project.type + '/' + project.title,
    done: false,
    tasks: []
  })
  locallySync()
}

let addTask = function (state, todo, task) {
  todo.tasks.push(task)
  locallySync()
}

let locallySync = function () {
  localStorage.setItem(PROJECT_LIST, JSON.stringify(all))
}
