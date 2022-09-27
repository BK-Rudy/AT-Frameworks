import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/products',
    name: 'products',
    component: () => import("../components/ProductsList")
  },
  {
    path: '/add',
    name: 'add',
    component: () => import("../components/AddProduct")
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/AboutView")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router