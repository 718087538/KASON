import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resume from '../pages/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resume
    },
    {
      path:'/resume',
      name:'resume',
      component:resume
    }
  ]
})
