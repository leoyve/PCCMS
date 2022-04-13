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
      {
        path: 'activationsReviseQuery',
        name: 'ActivationsReviseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/ActivationsReviseQuery.vue')
      },
      {
        path: 'bosReviewList',
        name: 'BosReviewList',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/BosReviewList.vue')
      },
      {
        path: 'fa2PhotoReviewQuery',
        name: 'Fa2PhotoReviewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/Fa2PhotoReviewQuery.vue')
      },
      {
        path: 'pccmReviewQuery',
        name: 'PccmReviewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/PccmReviewQuery.vue')
      },
      {
        path: 'workDataPccmReview',
        name: 'WorkDataPccmReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/WorkDataPccmReview.vue')
      },
      {
        path: 'pccmReviewBatch',
        name: 'PccmReviewBatch',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/PccmReviewBatch.vue')
      },
      {
        path: 'fillActivationsQuery',
        name: 'FillActivationsQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/FillActivationsQuery.vue')
      },
      {
        path: 'fillActivations',
        name: 'FillActivations',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/FillActivations.vue')
      },
      {
        path: 'fillMileStone',
        name: 'FillMileStone',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/FillMileStone.vue')
      },
      {
        path: 'fillPlnmnth',
        name: 'FillPlnmnth',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/FillPlnmnth.vue')
      },
      {
        path: 'fillYearUserCase',
        name: 'FillYearUserCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/FillYearUserCase.vue')
      },
      {
        path: 'uploadCheckRecord',
        name: 'UploadCheckRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/UploadCheckRecord.vue')
      },
      {
        path: 'fillJudge',
        name: 'FillJudge',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/FillJudge.vue')
      },
      {
        path: 'pccmReviewJudgeQuery',
        name: 'PccmReviewJudgeQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/PccmReviewJudgeQuery.vue')
      },
      {
        path: 'pccmJudgeReview',
        name: 'PccmJudgeReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/PccmJudgeReview.vue')
      },
      {
        path: 'pccmDoc',
        name: 'PccmDoc',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/PccmDoc.vue')
      },
      {
        path: 'fa2OptionalReport',
        name: 'Fa2OptionalReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/Fa2OptionalReport.vue')
      },
      {
        path: 'fa2ReportQuery',
        name: 'Fa2ReportQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/Fa2ReportQuery.vue')
      },
      {
        path: 'cityReportDetail',
        name: 'CityReportDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa2/CityReportDetail.vue')
      },
     
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa2Router.vue')
  }
]
