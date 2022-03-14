module.exports = [
  {
    path: '/qua',
    name: '品管人員訓練',
    children:[
      {
        path: 'agencyQuery',
        name: 'AgencyQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyQuery.vue')
      },
      {
        path: 'agencyEdit',
        name: 'AgencyEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyEdit.vue')
      },
      {
        path: 'agencyInfo',
        name: 'AgencyInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyInfo.vue')
      },
      {
        path: 'aencyDetail',
        name: 'AgencyDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyDetail.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/QuaRouter.vue')
  }
]
