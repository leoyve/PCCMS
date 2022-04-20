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
      {
        path: 'tbeDocReviewQuery',
        name: 'TubeDocReviewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/TubeDocReviewQuery.vue')
      },
      {
        path: 'tubeDocChange',
        name: 'TubeDocChange',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/TubeDocChange.vue')
      },
      {
        path: 'tubeDocReview',
        name: 'TubeDocReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/TubeDocReview.vue')
      },
      {
        path: 'tubeDocReviewBatch',
        name: 'TubeDocReviewBatch',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/TubeDocReviewBatch.vue')
      },
      {
        path: 'spotCheckRecord',
        name: 'SpotCheckRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/SpotCheckRecord.vue')
      },
      {
        path: 'mileStoneSetting',
        name: 'MileStoneSetting',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/MileStoneSetting.vue')
      },
      {
        path: 'mileStoneDetail',
        name: 'MileStoneDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/MileStoneDetail.vue')
      },
      {
        path: 'fa1OptionalReport',
        name: 'Fa1OptionalReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1OptionalReport.vue')
      },
      {
        path: 'divisionCaseQuery',
        name: 'DivisionCaseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/DivisionCaseQuery.vue')
      },
      {
        path: 'divisionManager',
        name: 'DivisionManager',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/DivisionManager.vue')
      },
      {
        path: 'informCaseEdit',
        name: 'InformCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InformCaseEdit.vue')
      },
      {
        path: 'divisionCaseEdit',
        name: 'DivisionCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/DivisionCaseEdit.vue')
      },
      {
        path: 'divisionDetail',
        name: 'DivisionDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/DivisionDetail.vue')
      },
      {
        path: 'investigateCaseEdit',
        name: 'InvestigateCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/InvestigateCaseEdit.vue')
      },
      {
        path: 'localReviewCaseEdit',
        name: 'LocalReviewCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/LocalReviewCaseEdit.vue')
      },
      {
        path: 'centralReviewCaseEdit',
        name: 'CentralReviewCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/CentralReviewCaseEdit.vue')
      },
      {
        path: 'pccmReviewCaseEdit',
        name: 'PccmReviewCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/PccmReviewCaseEdit.vue')
      },
      {
        path: 'finalReivewCaseEdit',
        name: 'FinalReivewCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/FinalReivewCaseEdit.vue')
      },
      {
        path: 'changeDivisionPhoto',
        name: 'ChangeDivisionPhoto',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/ChangeDivisionPhoto.vue')
      },
      {
        path: 'unOpingCaseQuery',
        name: 'UnOpingCaseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/UnOpingCaseQuery.vue')
      },
      {
        path: 'fa1CaseList',
        name: 'Fa1CaseList',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1CaseList.vue')
      },
      {
        path: 'fa1CaseDetail',
        name: 'Fa1CaseDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1CaseDetail.vue')
      },
      {
        path: 'fa1CaseEdit',
        name: 'Fa1CaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1CaseEdit.vue')
      },
      {
        path: 'fa1BudgetEdit',
        name: 'Fa1BudgetEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1BudgetEdit.vue')
      },
      {
        path: 'fa1MilestoneEdit',
        name: 'Fa1MilestoneEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1MilestoneEdit.vue')
      },
      {
        path: 'fa1MonthlyEdit',
        name: 'Fa1MonthlyEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1MonthlyEdit.vue')
      },
      {
        path: 'fa1MonthlyBosEdit',
        name: 'Fa1MonthlyBosEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1MonthlyBosEdit.vue')
      },
      {
        path: 'fa1CaseQuery',
        name: 'Fa1CaseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1CaseQuery.vue')
      }, 
      {
        path: 'fa1CaseByWkutQuery',
        name: 'Fa1CaseByWkutQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa1/Fa1CaseByWkutQuery.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa1Router.vue')
  }
]
