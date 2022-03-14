module.exports = [
  {
    path: '/flo',
    name: '重點防汛',
    children:[
      {
        path: 'floPrjQuery',
        name: 'FloPrjQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloPrjQuery.vue')
      },
      {
        path: 'floEventQuery',
        name: 'FloEventQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloEventQuery.vue')
      },
      {
        path: 'floEventCreate',
        name: 'FloEventCreate',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloEventCreate.vue')
      },
      {
        path: 'floYearEventQuery',
        name: 'FloYearEventQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloYearEventQuery.vue')
      },
      {
        path: 'floEventFill',
        name: 'FloEventFill',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloEventFill.vue')
      },
      {
        path: 'BIAS',
        name: 'BIAS',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/BIAS.vue')
      },
      
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FloRouter.vue')
  },
]
