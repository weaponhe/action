export function findTodoWithPath(targetPath, startTodo) {
  let stack = [startTodo]
  while (stack.length) {
    let todo = stack.pop()
    if (targetPath === todo.path) {
      return todo
    } else if (targetPath.match(new RegExp('^' + todo.path))) {
      stack.push(...todo.subTodoList)
    }
  }
}
