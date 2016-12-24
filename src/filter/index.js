import * as TimeFilter from './src/TimeFilter'
import * as DoneFilter from './src/DoneFilter'

function install(Vue)
{
  let FilterMap = Object.assign({}, TimeFilter, DoneFilter)
  Object.entries(FilterMap).forEach(([key, fn]) =>
  {
    Vue.filter(key, fn)
  })
}

export default {
  TimeFilter,
  DoneFilter,
  install
}
