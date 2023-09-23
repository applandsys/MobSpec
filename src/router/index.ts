import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/pages/HomePage.vue';
import BrandPage from '@/views/pages/BrandPage.vue';
import SigninPage from "@/views/pages/SigninPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/brand',
    name: 'Brand',
    component: BrandPage
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SigninPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
