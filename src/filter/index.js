import * as TimeFilter from './src/TimeFilter'
import * as DoneFilter from './src/DoneFilter'
import * as URIFilter from './src/URIFilter'

function install(Vue)
{
  let FilterMap = Object.assign({}, TimeFilter, DoneFilter, URIFilter)
  Object.keys(FilterMap).forEach((key) =>
  {
    Vue.filter(key, FilterMap[key])
  })
}

export default {
  TimeFilter,
  DoneFilter,
  URIFilter,
  install
}
