/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Gallery from "@/pages/galleryPage.vue";
import Login from "@/pages/login.vue";
import Register from "@/pages/register.vue";
import AddArtPage from "@/pages/AddArtPage.vue";
import OrdersPage from "@/pages/OrdersPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          name: 'Login Page',
          component: () => Login,
        }
      ]
    },
    {
      path: '/register',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          name: 'Register Page',
          component: () => Register,
        }
      ]
    },
    {
      path: '/buyer',
      component: () => import('@/layouts/buyer.vue'),
      children: [
        {
          path: '',
          name: 'Gallery Page',
          component: () => Gallery,
        }
      ]
    },
    {
      path: '/buyer/cart',
      component: () => import('@/layouts/buyer.vue'),
      children: [
        {
          path: '',
          name: 'Orders Page',
          component: () => OrdersPage,
        }
      ]
    },
    {
      path: '/artist/add',
      component: () => import('@/layouts/artist.vue'),
      children: [
        {
          path: '',
          name: 'Add Art',
          component: () => AddArtPage,
        }
      ]
    },
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
