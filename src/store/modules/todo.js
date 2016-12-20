const
  state = {
    types: {
      ADD_TODO: 'ADD_TODO',
      UPDATE_TODO: 'UPDATE_TODO'
    }
  },
  mutations = {
    [state.types.ADD_TODO](state, payload) {
      addTodo(state, payload)
    },
    [state.types.UPDATE_TODO](state, payload){
      updateTodo(state, payload)
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
  let oldTodo = payload.oldTodo,
    newTodo = payload.newTodo
  console.log(oldTodo.path, newTodo.path)
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
