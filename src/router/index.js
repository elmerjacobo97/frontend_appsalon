import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: () => import('@/views/appointments/AppointmentsLayout.vue'),
      children: [
        {
          path: 'new',
          component: () => import('@/views/appointments/NewAppointmentLayout.vue'),
          children: [
            {
              path: '', // default route for new appointment
              name: 'new-appointment',
              component: () => import('@/views/appointments/ServicesView.vue')
            },
            {
              path: 'details',
              name: 'appointment-details',
              component: () => import('@/views/appointments/AppointmentView.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
