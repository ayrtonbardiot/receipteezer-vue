import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Recep from '../views/Recep.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/receipteezer',
    name: 'Recep',
    component: Recep
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
