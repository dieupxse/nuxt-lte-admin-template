import Vue from 'vue'
import Router from 'vue-router'
//index page
import Index from '@/pages/index'
//login page
import Login from '@/pages/login'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index
      },
      {
        path: '/login',
        component: Login
      }
    ]
  })
}
