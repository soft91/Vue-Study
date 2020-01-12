import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'
import ProductList from '../views/ProductList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/productlist',
    component: ProductList
  },
  {
    path: '/product/:id',
    component: Product,
    // 함수로 지정하면 첫 번째 매개변수로 현재 라우트 객체를 사용할 수 있음.
    props: route => ({
      id: Number(route.params.id)
    })
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
