export function done(todoList)
{
  return todoList.filter((todo) =>
  {
    return todo.done
  })
}
done.title = "已完成"


export function unDone(todoList)
{
  return todoList.filter((todo) =>
  {
    return !todo.done
  })
}
unDone.title = "未完成"

