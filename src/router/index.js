import { createRouter, createWebHashHistory } from 'vue-router'
import MapPage from '@/views/MapPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MapPage
    },


  ]
})

export default router
