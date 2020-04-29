const commonRouter = [
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '*',
    redirect: '/404'
  }
]
export default commonRouter
