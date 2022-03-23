module.exports = [
  {
    path: '/qua',
    name: '品管人員訓練',
    children:[
      {
        path: 'agencyQuery',
        name: 'AgencyQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyQuery.vue')
      },
      {
        path: 'agencyEdit',
        name: 'AgencyEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyEdit.vue')
      },
      {
        path: 'agencyInfo',
        name: 'AgencyInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyInfo.vue')
      },
      {
        path: 'aencyDetail',
        name: 'AgencyDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyDetail.vue')
      },
      {
        path: 'addTeacherQuery',
        name: 'AddTeacherQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AddTeacherQuery.vue')
      },
      {
        path: 'teacherEdit',
        name: 'TeacherEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TeacherEdit.vue')
      },
      {
        path: 'pccmTeacherList',
        name: 'PccmTeacherList',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/PccmTeacherList.vue')
      },
      {
        path: 'teacherInfo',
        name: 'TeacherInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TeacherInfo.vue')
      },
      {
        path: 'teacherReviewInfo',
        name: 'TeacherReviewInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TeacherReviewInfo.vue')
      },
      {
        path: 'classTeacherQuery',
        name: 'ClassTeacherQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassTeacherQuery.vue')
      },
      {
        path: 'classTeacherList',
        name: 'ClassTeacherList',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassTeacherList.vue')
      },
      {
        path: 'quicklyTeacherReview',
        name: 'QuicklyTeacherReview',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/QuicklyTeacherReview.vue')
      },
      {
        path: 'reviseStudentRecordQuery',
        name: 'ReviseStudentRecordQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ReviseStudentRecordQuery.vue')
      },
      {
        path: 'studentChangeStage',
        name: 'StudentChangeStage',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StudentChangeStage.vue')
      },
      {
        path: 'reviseStudentRecord',
        name: 'ReviseStudentRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ReviseStudentRecord.vue')
      },
      {
        path: 'annualAppraisalRecord',
        name: 'AnnualAppraisalRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AnnualAppraisalRecord.vue')
      },
      {
        path: 'annualAppraisalEdit',
        name: 'AnnualAppraisalEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AnnualAppraisalEdit.vue')
      },
      {
        path: 'classPopulationYeadReport',
        name: 'ClassPopulationYeadReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassPopulationYeadReport.vue')
      },
      {
        path: 'classPopulationReportD1',
        name: 'ClassPopulationReportD1',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassPopulationReportD1.vue')
      },
      {
        path: 'classPopulationReportD2',
        name: 'ClassPopulationReportD2',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassPopulationReportD2.vue')
      },
      {
        path: 'classPopulationReportD3',
        name: 'ClassPopulationReportD3',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassPopulationReportD3.vue')
      },
      {
        path: 'classPopulationSiteReport',
        name: 'ClassPopulationSiteReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassPopulationSiteReport.vue')
      },
      {
        path: 'backTrainingHisReport',
        name: 'BackTrainingHisReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/BackTrainingHisReport.vue')
      },
      {
        path: 'classSexReporty',
        name: 'ClassSexReporty',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassSexReporty.vue')
      },
      {
        path: 'openingNotice',
        name: 'OpeningNotice',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpeningNotice.vue')
      },
      {
        path: 'newOpeningEdit',
        name: 'NewOpeningEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/NewOpeningEdit.vue')
      },
      {
        path: 'openingInfoDetail',
        name: 'OpeningInfoDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpeningInfoDetail.vue')
      },
      {
        path: 'queryStudentRecord',
        name: 'QueryStudentRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/QueryStudentRecord.vue')
      },
      {
        path: 'classAndCourseQuery',
        name: 'ClassAndCourseQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassAndCourseQuery.vue')
      },
      {
        path: 'classDetailInfo',
        name: 'ClassDetailInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassDetailInfo.vue')
      },
      {
        path: 'agencyCourseInfo',
        name: 'AgencyCourseInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyCourseInfo.vue')
      },
      {
        path: 'graduationCheckReport',
        name: 'GraduationCheckReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/GraduationCheckReport.vue')
      },
      {
        path: 'checkReportList',
        name: 'CheckReportList',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/CheckReportList.vue')
      },
      {
        path: 'checkDeficiencyReportList',
        name: 'CheckDeficiencyReportList',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/CheckDeficiencyReportList.vue')
      },
      {
        path: 'finalExamPassReport',
        name: 'FinalExamPassReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/FinalExamPassReport.vue')
      },
      {
        path: 'finalExamAndMakeUpReport',
        name: 'FinalExamAndMakeUpReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/FinalExamAndMakeUpReport.vue')
      },
      {
        path: 'classTeacherReport',
        name: 'ClassTeacherReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassTeacherReport.vue')
      },
      {
        path: 'classTeacherTimesList',
        name: 'ClassTeacherTimesList',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassTeacherTimesList.vue')
      },
      {
        path: 'classTrainingDayReport',
        name: 'ClassTrainingDayReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ClassTrainingDayReport.vue')
      },
      {
        path: 'teachingHoursReport',
        name: 'TeachingHoursReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TeachingHoursReport.vue')
      },
      {
        path: 'teachingCourseDetail',
        name: 'TeachingCourseDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TeachingCourseDetail.vue')
      },
      {
        path: 'teachingCourseDetail2',
        name: 'TeachingCourseDetail2',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TeachingCourseDetail2.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/QuaRouter.vue')
  }
]
