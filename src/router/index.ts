
import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('@/views/books/Index.vue')
  },
  {
    path: '/borrow',
    name: 'borrow',
    component: () => import('@/views/borrow/Index.vue')
  }


]
const history = createWebHistory()

const router = createRouter({
  history,
  routes

})

export default router;
