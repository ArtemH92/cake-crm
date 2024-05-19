import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'not-auth', auth: false },
      component: () => import('@/views/Login/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'not-auth', auth: false },
      component: () => import('@/views/Register/RegisterPage.vue')
    },
    {
      path: '/',
      name: 'default',
      redirect: '/home/list',
      meta: { layout: 'default', auth: true },
      children: [
        {
          path: '/home',
          name: 'home',
          redirect: '/home/list',
          children: [
            {
              path: 'list',
              name: 'home_list',
              component: () => import('@/views/HomePage.vue')
            }
          ]
        },
        {
          path: '/customer_base',
          name: 'customer_base',
          redirect: '/customer_base/list',
          children: [
            {
              path: 'list',
              name: 'client_list',
              component: () => import('@/views/CustomerBase/List/CustomerBaseList.vue')
            },
            {
              path: 'create',
              name: 'create_client',
              component: () => import('@/views/CustomerBase/Create/CustomerBaseCreate.vue')
            },
            {
              path: 'profile',
              name: 'client_profile',
              component: () => import('@/views/CustomerBase/Profile/CustomerBasePage.vue')
            }
          ]
        },

        {
          path: '/recipes',
          name: 'recipes',
          component: () => import('@/views/Recipes/RecipesPage.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !localStorage.getItem('userTokens')) {
    next('/login')
  } else if (!to.meta.auth && localStorage.getItem('userTokens')) {
    next('/')
  } else {
    next()
  }
})

export default router
