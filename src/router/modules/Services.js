import layout from '@/layout/index.vue'

const ServiceRouter = {
  sort: 1,
  path: '/services',
  name: 'Services',
  component: layout,
  redirect: '/Service/index',
  meta: {
    title: 'Services'
  },
  children: [{
    path: 'index',
    name: 'service',
    component: () => import('@/views/building.vue'),
    meta: { title: 'service' }
  }]
}
export default ServiceRouter
