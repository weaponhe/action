export function beforeToday(todoList)
{
  let today = getToday(),
      todoDate
  return todoList.filter((todo) =>
  {
    if (todo.done) {
      return false
    }
    if (!todo.deadline) {
      return false
    }
    try {
      todoDate = new Date(todo.deadline)
      return todoDate < today
    } catch (e)
    {
      console.error(e)
    }
    return false
  })
}
beforeToday.title = "今日之前"

export function today(todoList)
{
  let today    = getToday(),
      tomorrow = getTomorrow(),
      todoDate
  return todoList.filter((todo) =>
  {
    if (todo.done) {
      return false
    }
    if (!todo.deadline) {
      return false
    }
    try {
      todoDate = new Date(todo.deadline)
      return today <= todoDate && todoDate < tomorrow
    } catch (e)
    {
      console.error(e)
    }
    return false
  })
}
today.title = "今日待办"

export function todayOrBeforeToday(todoList)
{
  let tomorrow = getTomorrow(),
      todoDate
  return todoList.filter((todo) =>
  {
    if (todo.done) {
      return false
    }
    if (!todo.deadline) {
      return false
    }
    try {
      todoDate = new Date(todo.deadline)
      return todoDate < tomorrow
    } catch (e)
    {
      console.error(e)
    }
    return false
  })
}

export function tomorrow(todoList)
{
  let tomorrow      = getTomorrow()
  let afterTomorrow = getAfterTomorrow()
  let todoDate
  return todoList.filter((todo) =>
  {
    if (todo.done) {
      return false
    }
    if (!todo.deadline) {
      return false
    }
    try {
      todoDate = new Date(todo.deadline)
      return tomorrow <= todoDate && todoDate < afterTomorrow
    } catch (e)
    {
      console.error(e)
    }
    return false
  })
}
tomorrow.title = "明日待办"

export function future(todoList)
{
  let afterTomorrow = getAfterTomorrow()
  let todoDate
  return todoList.filter((todo) =>
  {
    if (todo.done) {
      return false
    }
    if (!todo.deadline) {
      return true
    }
    try {
      todoDate = new Date(todo.deadline)
      return todoDate >= afterTomorrow
    } catch (e)
    {
      console.error(e)
    }
    return false
  })
}
future.title = "将来"

function getToday(indicateDate)
{
  let date = indicateDate || new Date()
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function getTomorrow(indicateDate)
{
  let date = indicateDate || new Date()
  date.setDate(date.getDate() + 1)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function getAfterTomorrow(indicateDate)
{
  let date = indicateDate || new Date()
  date.setDate(date.getDate() + 2)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
