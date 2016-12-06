let menu_today = {
    title: '今日待办',
    hash: 'today',
    active: true
  },
  menu_tomorrow = {
    hash: 'tomorrow',
    title: '明日待办'
  },
  menu_collection = {
    hash: 'collection',
    title: '收集箱'
  },
  menu_schedule = {
    hash: 'schedule',
    title: '日程'
  },
  menu_project = {
    title: '项目',
    hash: 'project',
    children: []
  },
  menu_book = {
    title: '书单',
    hash: 'book',
    children: []
  },
  menu_post = {
    title: '文章',
    hash: 'path',
    children: []
  }

const state = {
  all: [menu_today, menu_tomorrow, menu_collection, menu_schedule, menu_project, menu_book, menu_post],
  menu_today,
  menu_tomorrow,
  menu_collection,
  menu_schedule,
  menu_project,
  menu_book,
  menu_post
}

export default {
  state
}




