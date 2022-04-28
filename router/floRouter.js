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
        path: 'floCmdQuery',
        name: 'FloCmdQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloCmdQuery.vue')
      },
      {
        path: 'floWarningQuery',
        name: 'FloWarningQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloWarningQuery.vue')
      },
      {
        path: 'floWarnEdit',
        name: 'FloWarnEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloWarnEdit.vue')
      },
      {
        path: 'floInfoQuery',
        name: 'FloInfoQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloInfoQuery.vue')
      },
      {
        path: 'floWarnDetail',
        name: 'FloWarnDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloWarnDetail.vue')
      },
      {
        path: 'floWarnActualQuery',
        name: 'FloWarnActualQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloWarnActualQuery.vue')
      },
      {
        path: 'floCheckQuery',
        name: 'FloCheckQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloCheckQuery.vue')
      },
      {
        path: 'floCheckDetail',
        name: 'FloCheckDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloCheckDetail.vue')
      },
      {
        path: 'floCheckRateDetail',
        name: 'FloCheckRateDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloCheckRateDetail.vue')
      },
      {
        path: 'floWaterBehind',
        name: 'FloWaterBehind',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloWaterBehind.vue')
      },
      
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FloRouter.vue')
  },
]
