import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/colourpicker',
    name: 'Color Picker',
    component: () => import('../views/CPView.vue')
  },
  {
    path: '/customerlist',
    name: 'Customer List',
    component: () => import('../views/CLView.vue')
  },
  {
    path: '/timer',
    name: 'Timer',
    component: () => import('../views/TView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: 'history',
})

export default router
