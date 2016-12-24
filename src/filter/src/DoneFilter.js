export function done(todoList)
{
  return todoList.filter((todo) =>
  {
    return todo.done
  })
}

export function unDone(todoList)
{
  return todoList.filter((todo) =>
  {
    return !todo.done
  })
}
