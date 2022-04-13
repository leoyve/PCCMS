module.exports = [
  {
    path: '/fa1',
    name: '閒置設施管理',
    children:[
      {
        path: 'activationsQuery',
        name: 'ActivationsQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/ActivationsQuery.vue')
      },
      
     
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa1Router.vue')
  }
]
