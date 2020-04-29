import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './modules'
import commonRouter from './common'

Vue.use(VueRouter)

export const constantRoutes = commonRouter
export const asyncRoutes = configRouter

// 更新路由配置
const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [...commonRouter, ...configRouter]
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
