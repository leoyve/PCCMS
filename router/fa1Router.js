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
      {
        path: 'inventoryQuery',
        name: 'InventoryQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InventoryQuery.vue')
      },
      {
        path: 'inventoryDetail1',
        name: 'InventoryDetail1',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InventoryDetail1.vue')
      },
      {
        path: 'inventoryDetail2',
        name: 'InventoryDetail2',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InventoryDetail2.vue')
      },
      {
        path: 'inventoryInfo',
        name: 'InventoryInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InventoryInfo.vue')
      },
      {
        path: 'informBulletinQuery',
        name: 'InformBulletinQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InformBulletinQuery.vue')
      },
      {
        path: 'inventoryEdit',
        name: 'InventoryEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InventoryEdit.vue')
      },
      {
        path: 'informDocReviewQuery',
        name: 'InformDocReviewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InformDocReviewQuery.vue')
      },
      {
        path: 'informDocChange',
        name: 'InformDocChange',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InformDocChange.vue')
      },
      {
        path: 'informDocReview',
        name: 'InformDocReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InformDocReview.vue')
      },
      {
        path: 'informDocReviewBatch',
        name: 'InformDocReviewBatch',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InformDocReviewBatch.vue')
      },
     
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa1Router.vue')
  }
]
