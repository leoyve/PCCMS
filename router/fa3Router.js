module.exports = [
  {
    path: '/fa3',
    name: '公共設施維護管理資訊',
    children:[
      {
        path: 'rankReport',
        name: 'RankReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/RankReport.vue')
      },
      {
        path: 'rankReportTotal',
        name: 'RankReportTotal',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/RankReportTotal.vue')
      },
      {
        path: 'rankReportPublic',
        name: 'RankReportPublic',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/RankReportPublic.vue')
      },
      {
        path: 'rankReportScale',
        name: 'RankReportScale',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/RankReportScale.vue')
      },
      {
        path: 'publicFacilityEdit',
        name: 'PublicFacilityEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/PublicFacilityEdit.vue')
      },
      {
        path: 'uploadMaintaceRecord',
        name: 'UploadMaintaceRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/UploadMaintaceRecord.vue')
      },
      {
        path: 'uploadInterviewRecord',
        name: 'UploadInterviewRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/UploadInterviewRecord.vue')
      },
      {
        path: 'facilityTypeReport',
        name: 'FacilityTypeReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/FacilityTypeReport.vue')
      },
      {
        path: 'OurFacilityQuery',
        name: 'OurFacilityQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/OurFacilityQuery.vue')
      },
      {
        path: 'facilityQuery',
        name: 'FacilityQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/FacilityQuery.vue')
      },
      {
        path: 'wkutHelp',
        name: 'WkutHelp',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/WkutHelp.vue')
      },
      {
        path: 'deleteFacility',
        name: 'DeleteFacility',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/DeleteFacility.vue')
      },
      {
        path: 'deleteFacilityQuery',
        name: 'DeleteFacilityQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/DeleteFacilityQuery.vue')
      },
      {
        path: 'analysisQuery',
        name: 'AnalysisQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/fa3/AnalysisQuery.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fa3Router.vue')
  }
]
