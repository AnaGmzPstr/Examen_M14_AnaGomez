import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/beques',
      name: 'beques',
      component: () => import('../views/BequesView.vue'),
    },
    {
      path: '/detall-any/:any',
      name: 'detall-any',
      component: () => import('../views/DetallAny.vue'),
      props: true,
    },
    {
      path: '/centre/:centre',
      name: 'centre',
      component: () => import('../views/CentreView.vue'),
      props: true,
    }

  ],
})

export default router
