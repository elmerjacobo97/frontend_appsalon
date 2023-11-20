import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthAPI from '@/api/AuthAPI'

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
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'my-appointments',
          component: () => import('@/views/appointments/MyAppointmentsView.vue')
        },
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
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/auth/AuthLayout.vue'),
      children: [
        {
          path: '', // al no tener path, esto manejará el caso /auth directamente
          redirect: { name: 'login' } // redirigir a login si se accede a /auth directamente
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/auth/RegisterView.vue')
        },
        {
          path: 'verify/:token',
          name: 'verify',
          component: () => import('@/views/auth/ConfirmAccountView.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth) {
    try {
      await AuthAPI.auth()
      next()
    } catch (error) {
      console.log('Error', error.response.data)
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
