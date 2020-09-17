import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  { name: 'default', path: '/', redirect: '/home' },
  {
    name: 'home', path: '/home', component:()=>import('@/views/home')
  },
  {
    name: 'notes', path: '/notes', component:()=>import('@/views/notes')
  },
  {
    name: 'about', path: '/about', component:()=>import('@/views/about')
  }
]

const router = new VueRouter({
  routes
})

export default router
