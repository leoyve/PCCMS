module.exports = [
  {
    path: '/fa2',
    name: '閒置設施補助',
    children:[
      {
        path: 'activationsQuery',
        name: 'ActivationsQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/ActivationsQuery.vue')
      },
      {
        path: 'newActivations',
        name: 'NewActivations',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/NewActivations.vue')
      },
     
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa2Router.vue')
  }
]
