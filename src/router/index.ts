import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/pages/HomePage.vue';
import BrandPage from '@/views/pages/BrandPage.vue';
import SigninPage from "@/views/pages/SigninPage.vue";
import SignupPage from "@/views/pages/SignupPage.vue";
import DeviceListPage from "@/views/pages/DevicelistPage.vue";
import DeviceDetail from "@/views/pages/DeviceDetail.vue";

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
    path: '/device-list/:id',
    name: 'DeviceList',
    component: DeviceListPage
  },
  {
    path: '/device-detail/:product_id',
    name: 'DeviceDetail',
    component: DeviceDetail
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SigninPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
