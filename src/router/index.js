import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '@/views/ServiceView.vue'
import ProjectComponent from '@/views/ServiceView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/service/:selectedFeature',
      name: 'service-detail',
      component: ServiceView,
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: ProjectComponent // تأكد من استخدام المكون الصحيح
    },
    
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/errorView.vue')
    }
  ]
})

export default router
