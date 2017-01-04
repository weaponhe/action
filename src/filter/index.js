import * as TimeFilter from './src/TimeFilter'
import * as DoneFilter from './src/DoneFilter'

function install(Vue)
{
  let FilterMap = Object.assign({}, TimeFilter, DoneFilter)
  Object.keys(FilterMap).forEach((key) =>
  {
    Vue.filter(key, FilterMap[key])
  })
}

export default {
  TimeFilter,
  DoneFilter,
  install
}
