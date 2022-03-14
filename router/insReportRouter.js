module.exports = [
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
