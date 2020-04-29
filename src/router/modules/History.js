import layout from '@/layout/index.vue'

const historyRouter = {
  sort: 2,
  path: '/history',
  name: 'History',
  component: layout,
  redirect: '/history/index',
  meta: {
    title: 'History'
  },
  children: [{
    path: 'index',
    name: 'history',
    component: () => import('@/views/building.vue'),
    meta: { title: 'history' }
  }]
}
export default historyRouter
