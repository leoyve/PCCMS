module.exports = [
  {
    path: '/fa1',
    name: '閒置設施管理',
    children:[
      {
        path: 'newInformCase',
        name: 'NewInformCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/NewInformCase.vue')
      },
      {
        path: 'peopleUnCaseQuery',
        name: 'PeopleUnCaseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/PeopleUnCaseQuery.vue')
      },
      {
        path: 'peopleUnCase',
        name: 'PeopleUnCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/PeopleUnCase.vue')
      },
      
     
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa1Router.vue')
  }
]
