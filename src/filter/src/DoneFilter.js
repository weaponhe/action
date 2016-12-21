export function done(todoList)
{
  return todoList.filter((todo) =>
  {
    return todo.done
  })
}
