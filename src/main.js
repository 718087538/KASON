// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Swiper from './components/Swiper'
import resume from  './pages/resume'
import login from  './pages/login'



Vue.use(VRouter)

let router = new VRouter({
	routes:[
	{
		path:'/',
		component:Swiper,
	},
  {
    path:'/',
    component:resume,
  },
  {
    path:'/resume',
    component:resume,
  },
  {
    path:'/login',
    component:login,
  }
	]
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
