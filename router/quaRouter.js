module.exports = [
  {
    path: '/pro',
    name: '創新',
    children:[
      {
        path: 'view',
        name: 'ProView',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProView.vue')
      },
      {
        path: 'query',
        name: 'ProQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProQuery.vue')
      },
      {
        path: 'opinionQuery',
        name: 'OpinionQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProOpinionQuery.vue')
      },
      {
        path: 'opinionNewQuery',
        name: 'OpinionNewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProOpinionNewQuery.vue')
      },
      {
        path: 'opinionView',
        name: 'OpinionView',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProOpinionView.vue')
      },
      {
        path: 'historyQuery',
        name: 'HistoryQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProHistoryQuery.vue')
      },
      {
        path: 'backQuery',
        name: 'BackQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProBackQuery.vue')
      },
      
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProRouter.vue')
  }
]
