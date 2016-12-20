const
  state = {
    types: {
      ADD_TODO: 'ADD_TODO',
      UPDATE_TODO: 'UPDATE_TODO',
      MOVE_TODO: 'MOVE_TODO'
    }
  },
  mutations = {
    [state.types.ADD_TODO](state, payload) {
      addTodo(state, payload)
    },
    [state.types.UPDATE_TODO](state, payload){
      updateTodo(state, payload)
    },
    [state.types.MOVE_TODO](state, payload){
      moveTodo(state, payload)
    }
  },

  TODO_LOCAL_STORAGE_KEY = 'TODO_LOCAL_STORAGE_KEY'

export default {
  state,
  mutations
}

let data = state.data = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_KEY)) || new Todo({path: '', title: 'todo'})
//初始化数据
if (data.subTodoList.length === 0) {
  data.subTodoList.push(new Todo({title: '收集箱', path: data.path}))
  data.subTodoList.push(new Todo({title: '项目', path: data.path}))
  data.subTodoList.push(new Todo({title: '书单', path: data.path}))
  data.subTodoList.push(new Todo({title: '文章', path: data.path}))
}
//代理设置
proxyTree(data)
locallySync()

function Todo(payload) {
  return {
    title: payload.title,
    description: payload.description || '',
    path: payload.path + '/' + payload.title,
    deadline: payload.deadline || null,
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

function updateTodo(state, payload) {
  let todo = payload.oldTodo,
    newTodo = payload.newTodo
  unProxy(todo)
  todo.title = newTodo.title
  todo.path = newTodo.path + '/' + newTodo.title
  todo.description = newTodo.description
  todo.deadline = newTodo.deadline
  proxy(todo)
  locallySync()
}

function moveTodo(state, payload) {
  let oldTodo = payload.oldTodo,
    newTodo = payload.newTodo

  let parentPath = oldTodo.path.split('/').slice(0, -1).join('/')
  let parent = state[parentPath]

  let index = parent.subTodoList.findIndex(function (sub) {
    return sub.path === oldTodo.path
  })

  let todo = parent.subTodoList.splice(index, 1)[0]
  unProxy(todo)
  todo.title = newTodo.title
  todo.path = newTodo.path + '/' + newTodo.title
  todo.description = newTodo.description
  todo.deadline = newTodo.deadline
  proxy(todo)
  let newParent = state[newTodo.path]
  newParent.subTodoList.push(todo)

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
    stack.push(...todo.subTodoList
  )
  }
}

function proxy(todo) {
  Object.defineProperty(state, todo.path, {
    configurable: true,
    get(){
      return todo
    }
  })
}
function unProxy(todo) {
  Object.defineProperty(state, todo.path, {
    configurable: true,
    get(){
      return false
    }
  })
}
