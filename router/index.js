import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
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
  },
  {
    path: '/ins',
    name: '全民督工',
    children:[
      {
        path: 'newInsCase',
        name: 'NewInsCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/NewInsCase.vue')
      },
      {
        path: 'unCheckCase',
        name: 'UnCheckCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/UnCheckCase.vue')
      },
      {
        path: 'createInsCase',
        name: 'CreateInsCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CreateInsCase.vue')
      },
      {
        path: 'caseAssignQuery',
        name: 'CaseAssignQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseAssignQuery.vue')
      },
      {
        path: 'assignCasePcc',
        name: 'AssignCasePcc',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/AssignCasePcc.vue')
      },
      {
        path: 'assignCaseHost',
        name: 'AssignCaseHost',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/AssignCaseHost.vue')
      },
      {
        path: 'cmdCaseQuery',
        name: 'CmdCaseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CmdCaseQuery.vue')
      },
      {
        path: 'nearbyCase',
        name: 'NearbyCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/NearbyCase.vue')
      },
      {
        path: 'showWorkSiteMap',
        name: 'ShowWorkSiteMap',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/ShowWorkSiteMap.vue')
      },
      {
        path: 'photoReviewQuery',
        name: 'PhotoReviewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/PhotoReviewQuery.vue')
      },
      {
        path: 'photoReview',
        name: 'PhotoReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/PhotoReview.vue')
      },
      {
        path: 'photoReviewBatch',
        name: 'PhotoReviewBatch',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/PhotoReviewBatch.vue')
      },
      {
        path: 'noPhotoReviewQuery',
        name: 'NoPhotoReviewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/NoPhotoReviewQuery.vue')
      },
      {
        path: 'noPhotoReview',
        name: 'NoPhotoReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/NoPhotoReview.vue')
      },
      {
        path: 'noPhotoReviewBatch',
        name: 'NoPhotoReviewBatch',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/NoPhotoReviewBatch.vue')
      },
      {
        path: 'place1999Group',
        name: 'Place1999Group',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/Place1999Group.vue')
      },
      {
        path: 'place1999List',
        name: 'Place1999List',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/Place1999List.vue')
      },
      {
        path: 'case1999Info',
        name: 'Case1999Info',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/Case1999Info.vue')
      },
      {
        path: 'caseInfoQuery',
        name: 'CaseInfoQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseInfoQuery.vue')
      },
      {
        path: 'caseInfoEdit',
        name: 'CaseInfoEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseInfoEdit.vue')
      },
      {
        path: 'editInsCase',
        name: 'EditInsCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/EditInsCase.vue')
      },
      {
        path: 'caseRecord',
        name: 'CaseRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseRecord.vue')
      },
      {
        path: 'caseRecordEdit',
        name: 'CaseRecordEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseRecordEdit.vue')
      },
      {
        path: 'closeCase',
        name: 'CloseCase',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CloseCase.vue')
      },
      {
        path: 'caseRecordPrint',
        name: 'CaseRecordPrint',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseRecordPrint.vue')
      },
      {
        path: 'extendCloseDate',
        name: 'ExtendCloseDate',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/ExtendCloseDate.vue')
      },
      {
        path: 'addSatisfaction',
        name: 'AddSatisfaction',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/AddSatisfaction.vue')
      },
      {
        path: 'uploadCasePhoto',
        name: 'UploadCasePhoto',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/UploadCasePhoto.vue')
      },
      {
        path: 'changePhotoReview',
        name: 'ChangePhotoReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/ChangePhotoReview.vue')
      },
      {
        path: 'noPhotoReviewSubmit',
        name: 'NoPhotoReviewSubmit',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/NoPhotoReviewSubmit.vue')
      },
      {
        path: 'satisfactionList',
        name: 'SatisfactionList',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/SatisfactionList.vue')
      },
      {
        path: 'satisfactionResponse',
        name: 'SatisfactionResponse',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/SatisfactionResponse.vue')
      },
      {
        path: 'caseCloseQuery',
        name: 'CaseCloseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseCloseQuery.vue')
      },
      {
        path: 'reviewCaseClose',
        name: 'ReviewCaseClose',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/ReviewCaseClose.vue')
      },
      {
        path: 'caseAssessmentQuery',
        name: 'CaseAssessmentQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseAssessmentQuery.vue')
      },
      {
        path: 'wkutAssessmentFill',
        name: 'WkutAssessmentFill',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/WkutAssessmentFill.vue')
      },
      {
        path: 'peopleAssessmentFill',
        name: 'PeopleAssessmentFill',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/PeopleAssessmentFill.vue')
      },
      {
        path: 'directorAssessmentFill',
        name: 'DirectorAssessmentFill',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/DirectorAssessmentFill.vue')
      },
      {
        path: 'lineEnable',
        name: 'LineEnable',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/LineEnable.vue')
      },
      {
        path: 'lineDisable',
        name: 'LineDisable',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/LineDisable.vue')
      },
    
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InsRouter.vue')
  },
  {
    path: '/flo',
    name: '重點防汛',
    children:[
      {
        path: 'floPrjQuery',
        name: 'FloPrjQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloPrjQuery.vue')
      },
      {
        path: 'floEventQuery',
        name: 'FloEventQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloEventQuery.vue')
      },
      {
        path: 'floEventCreate',
        name: 'FloEventCreate',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloEventCreate.vue')
      },
      {
        path: 'floYearEventQuery',
        name: 'FloYearEventQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloYearEventQuery.vue')
      },
      {
        path: 'floEventFill',
        name: 'FloEventFill',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/FloEventFill.vue')
      },
      {
        path: 'BIAS',
        name: 'BIAS',
        component: () => import(/* webpackChunkName: "about" */ '../views/flo/BIAS.vue')
      },
      
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FloRouter.vue')
  },
  {
    path: '/ins/report',
    name: '全民督工報表',
    children:[
      {
        path: 'wkutCloseReport',
        name: 'WkutCloseReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutCloseReport.vue')
      },
      {
        path: 'wkutCloseReportLine',
        name: 'WkutCloseReportLine',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutCloseReportLine.vue')
      },
      {
        path: 'reportCommonInfo',
        name: 'ReportCommonInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/ReportCommonInfo.vue')
      },
      {
        path: 'reportCommonList',
        name: 'ReportCommonList',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/ReportCommonList.vue')
      },
      {
        path: 'wkutHandleDayReport',
        name: 'WkutHandleDayReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutHandleDayReport.vue')
      },
      {
        path: 'wkutSatisfactionReport',
        name: 'WkutSatisfactionReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutSatisfactionReport.vue')
      },
      {
        path: 'caseAggregateReport',
        name: 'CaseAggregateReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/CaseAggregateReport.vue')
      },
      {
        path: 'caseCloseDayReport',
        name: 'CaseCloseDayReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/CaseCloseDayReport.vue')
      },
      {
        path: 'caseAuditReport',
        name: 'CaseAuditReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/CaseAuditReport.vue')
      },
      {
        path: 'lineNotifyReport',
        name: 'LineNotifyReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/LineNotifyReport.vue')
      },
      {
        path: 'wkutGenderReport',
        name: 'WkutGenderReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutGenderReport.vue')
      },
      {
        path: 'wkutCityReport',
        name: 'WkutCityReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutCityReport.vue')
      },
      {
        path: 'caseSourceReport',
        name: 'CaseSourceReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/CaseSourceReport.vue')
      },
      {
        path: 'wkutDeficiencyReport',
        name: 'WkutDeficiencyReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutDeficiencyReport.vue')
      },
      {
        path: 'wkutDivisionReport',
        name: 'WkutDivisionReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutDivisionReport.vue')
      },
      {
        path: 'wkutCloseDayReport',
        name: 'WkutCloseDayReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutCloseDayReport.vue')
      },
      {
        path: 'caseCategoryReport',
        name: 'CaseCategoryReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/CaseCategoryReport.vue')
      },
      {
        path: 'caseCategoryList',
        name: 'CaseCategoryList',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/CaseCategoryList.vue')
      },
      {
        path: 'caseCategoryChange',
        name: 'CaseCategoryChange',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/CaseCategoryChange.vue')
      },
      {
        path: 'peopleInformReport',
        name: 'PeopleInformReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/PeopleInformReport.vue')
      },
      {
        path: 'webNotifyReport',
        name: 'WebNotifyReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WebNotifyReport.vue')
      },
      {
        path: 'wkutCompareReport',
        name: 'WkutCompareReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/WkutCompareReport.vue')
      },
      {
        path: 'insOptionalReport',
        name: 'InsOptionalReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/report/InsOptionalReport.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InsReportRouter.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
