import layout from '@/layout/index.vue'

const actionsRouter = {
  sort: 4,
  path: '/actions',
  name: 'actions',
  component: layout,
  redirect: '/actions/index',
  meta: {
    title: 'Actions'
  },
  children: [{
    path: 'index',
    name: 'action',
    component: () => import('@/views/building.vue'),
    meta: { title: 'action' }
  }]
}
export default actionsRouter
