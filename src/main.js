import Vue from 'vue'
import App from './App'
import './components/styles/base.less'
import store from './store'

import AppBar from './components/appBar'
Vue.component(AppBar.name,AppBar)
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	},
	store
})
