// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import topNav from './components/topNav'



Vue.use(VRouter)

let router = new VRouter({
	routes:[
	{
		path:'/',
		component:topNav,
	}
	]
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
