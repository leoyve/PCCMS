module.exports = [
  {
    path: '/qua',
    name: '品管人員訓練',
    children:[
      {
        path: 'view',
        name: 'ProView',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProView.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/QuaRouter.vue')
  }
]
