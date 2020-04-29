import layout from '@/layout/index.vue'

const dashBoardRouter = {
  sort: 0,
  path: '/dashboard',
  name: 'Dashboard',
  component: layout,
  redirect: '/dashboard/index',
  meta: {
    title: 'Dashboard'
  },
  children: [{
    path: 'index',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue'),
    meta: { title: 'dashboard' }
  }]
}
export default dashBoardRouter
