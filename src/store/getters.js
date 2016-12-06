module.exports = {
  menu_project_list(state, getters){
    return getters.all_project.map(project => {
      return {
        title: project.title,
        hash: project.type + '/' + project.title
      }
    })
  },
  menu_book_list(state, getters){
    return getters.all_book.map(project => {
      return {
        title: project.title,
        hash: project.type + '/' + project.title
      }
    })
  },
  menu_post_list(state, getters){
    return getters.all_post.map(project => {
      return {
        title: project.title,
        hash: project.type + '/' + project.title
      }
    })
  }
}
