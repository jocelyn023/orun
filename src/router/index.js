import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/login/register'
import forgotPassword from '@/components/login/forgot_password'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
