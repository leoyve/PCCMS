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
      {
        path: 'SimplyCaseCreate',
        name: 'SimplyCaseCreate',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/SimplyCaseCreate.vue')
      },
      {
        path: 'activationsMoveIn',
        name: 'ActivationsMoveIn',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/ActivationsMoveIn.vue')
      },
      {
        path: 'activationsManager',
        name: 'ActivationsManager',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/ActivationsManager.vue')
      },
      {
        path: 'activationsEdit',
        name: 'ActivationsEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/ActivationsEdit.vue')
      },
      {
        path: 'newWorkData',
        name: 'NewWorkData',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/NewWorkData.vue')
      },
      {
        path: 'workDataEdit',
        name: 'WorkDataEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkDataEdit.vue')
      },
      {
        path: 'workMilestoneEdit',
        name: 'WorkMilestoneEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkMilestoneEdit.vue')
      },
      {
        path: 'workMilestoneList',
        name: 'WorkMilestoneList',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkMilestoneList.vue')
      },
      {
        path: 'workExpensesEdit',
        name: 'WorkExpensesEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkExpensesEdit.vue')
      },
      {
        path: 'workPhotoEdit',
        name: 'WorkPhotoEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkPhotoEdit.vue')
      },
      {
        path: 'workDataSubmit',
        name: 'WorkDataSubmit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkDataSubmit.vue')
      },
      {
        path: 'workDataLock',
        name: 'WorkDataLock',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkDataLock.vue')
      },
      {
        path: 'activationsVersionDetail',
        name: 'ActivationsVersionDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/ActivationsVersionDetail.vue')
      },
      {
        path: 'workDataBosSubmit',
        name: 'WorkDataBosSubmit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkDataBosSubmit.vue')
      },
     
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa2Router.vue')
  }
]
