import {findTodoWithPath} from '../../util'

const RE_TODO_PATH = /todo\/([^\/]+)\/([^\/]+)?/,

  state = {
    types: {
      ADD_TODO: 'ADD_TODO'
    }
  },
  mutations = {
    [state.types.ADD_TODO](state, payload) {
      addTodo(state, payload)
    }
  },

  TODO_LOCAL_STORAGE_KEY = 'TODO_LOCAL_STORAGE_KEY',
  INBOX_LOCAL_STORAGE_KEY = 'INBOX_LOCAL_STORAGE_KEY'

export default {
  state,
  mutations
}

let data = state.data = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_KEY)) || new Todo({path: '', title: 'todo'})
//初始化数据
if (data.subTodoList.length === 0) {
  data.subTodoList.push(new Todo({title: '收集箱', path: data.path}))
  data.subTodoList.push(new Todo({title: '工作区', path: data.path}))
}
//初始化测试数据
let todo = data.subTodoList.find(sub => sub.title === '工作区')
if (todo.subTodoList.length === 0) {
  todo.subTodoList.push(new Todo({title: '项目', path: todo.path}))
  todo.subTodoList.push(new Todo({title: '书单', path: todo.path}))
  todo.subTodoList.push(new Todo({title: '文章', path: todo.path}))
}
//代理设置
proxyTree(data)
locallySync()

function Todo(payload) {
  return {
    title: payload.title,
    description: payload.description || '',
    path: payload.path + '/' + payload.title,
    done: false,
    subTodoList: []
  }
}

function addTodo(state, payload) {
  let parent = state[payload.path]
  let todo = new Todo(payload)
  parent.subTodoList.push(todo)
  proxy(todo)
  locallySync()
}

function locallySync() {
  localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(data))
}

function proxyTree(root) {
  let stack = [root]
  while (stack.length) {
    let todo = stack.pop()
    proxy(todo)
    stack.push(...todo.subTodoList)
  }
}

function proxy(todo) {
  Object.defineProperty(state, todo.path, {
    get(){
      return todo
    }
  })
}
