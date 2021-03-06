import Vue from 'vue'
import Router from 'vue-router'
import upload from '@/components/upload'
import assignment from '@/components/assignment'
import reg from '@/components/register'
import login from '@/components/login'
import grouper from '@/components/grouper'
import iprivate from '@/components/private'
import history from '@/components/history'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/upload'
    },
    {
      path: '/',
      name: 'index',
      component: upload
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/assignment',
      name: 'assignment',
      component: assignment
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/grouper',
      name: 'grouper',
      component: grouper
    },
    {
      path: '/iprivate',
      name: 'iprivate',
      component: iprivate
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
