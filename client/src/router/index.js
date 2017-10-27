import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import TestLogin from '@/components/TestLogin'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      name: 'Hello',
      component: Home
    }
  ]
})
