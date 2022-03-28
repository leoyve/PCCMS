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
      {
        path: 'endTrainingReport',
        name: 'EndTrainingReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/EndTrainingReport.vue')
      },
      {
        path: 'traineesSatisfactionReport',
        name: 'TraineesSatisfactionReport',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TraineesSatisfactionReport.vue')
      },
      {
        path: 'traineesSatisfactionList',
        name: 'TraineesSatisfactionList',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TraineesSatisfactionList.vue')
      },
      {
        path: 'traineesSatisfactionDetail',
        name: 'TraineesSatisfactionDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/TraineesSatisfactionDetail.vue')
      },
      {
        path: 'opinionEdit',
        name: 'OpinionEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpinionEdit.vue')
      },
      {
        path: 'questionQuery',
        name: 'QuestionQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/QuestionQuery.vue')
      },
      {
        path: 'questionEdit',
        name: 'QuestionEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/QuestionEdit.vue')
      },
      {
        path: 'propositionQuery',
        name: 'PropositionQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/PropositionQuery.vue')
      },
      {
        path: 'examConditionEdit',
        name: 'ExamConditionEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ExamConditionEdit.vue')
      },
      {
        path: 'propositionView',
        name: 'PropositionView',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/PropositionView.vue')
      },
      {
        path: 'examEventEdit',
        name: 'ExamEventEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ExamEventEdit.vue')
      },
      {
        path: 'examDetail',
        name: 'ExamDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ExamDetail.vue')
      },
      {
        path: 'ExamChange',
        name: 'ExamChange',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/ExamChange.vue')
      },
      {
        path: 'openingNoticePublic',
        name: 'OpeningNoticePublic',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpeningNoticePublic.vue')
      },
      {
        path: 'openingInfoPublicDetail',
        name: 'OpeningInfoPublicDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpeningInfoPublicDetail.vue')
      },
      {
        path: 'queryStudentRecordPublic',
        name: 'QueryStudentRecordPublic',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/QueryStudentRecordPublic.vue')
      },
      {
        path: 'propositionPublicQuery',
        name: 'PropositionPublicQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/PropositionPublicQuery.vue')
      },
      {
        path: 'satisfactionFillQuery',
        name: 'SatisfactionFillQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/SatisfactionFillQuery.vue')
      },
      {
        path: 'satisfactionFill',
        name: 'SatisfactionFill',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/SatisfactionFill.vue')
      },
      {
        path: 'openPeriodQuery',
        name: 'OpenPeriodQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenPeriodQuery.vue')
      },
      {
        path: 'openPeriodNoticeQuery',
        name: 'OpenPeriodNoticeQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenPeriodNoticeQuery.vue')
      },
      {
        path: 'agencyStageEdit',
        name: 'AgencyStageEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyStageEdit.vue')
      },
      {
        path: 'openPeriodDetail',
        name: 'OpenPeriodDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenPeriodDetail.vue')
      },
      {
        path: 'agencyStageDetail',
        name: 'AgencyStageDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyStageDetail.vue')
      },
      {
        path: 'agencyStageTeacherDetail',
        name: 'AgencyStageTeacherDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyStageTeacherDetail.vue')
      },
      {
        path: 'courseTeacherEdit',
        name: 'CourseTeacherEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/CourseTeacherEdit.vue')
      },
      {
        path: 'agencyStageStudentDetail',
        name: 'AgencyStageStudentDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyStageStudentDetail.vue')
      },
      {
        path: 'stageStudentEdit',
        name: 'StageStudentEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageStudentEdit.vue')
      },
      {
        path: 'agencyStageScoreDetail',
        name: 'AgencyStageScoreDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyStageScoreDetail.vue')
      },
      {
        path: 'stageScoreEdit',
        name: 'StageScoreEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageScoreEdit.vue')
      },
      {
        path: 'agencyStageMakeUpDetail',
        name: 'AgencyStageMakeUpDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/AgencyStageMakeUpDetail.vue')
      },
      {
        path: 'stageMakeUpEdit',
        name: 'StageMakeUpEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageMakeUpEdit.vue')
      },
      {
        path: 'stageMakeUpSubmit',
        name: 'StageMakeUpSubmit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageMakeUpSubmit.vue')
      },
      {
        path: 'stage1Submit',
        name: 'Stage1Submit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/Stage1Submit.vue')
      },
      {
        path: 'stage2Submit',
        name: 'Stage2Submit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/Stage2Submit.vue')
      },
      {
        path: 'stage1Review',
        name: 'Stage1Review',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/Stage1Review.vue')
      },
      {
        path: 'stage2Review',
        name: 'Stage2Review',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/Stage2Review.vue')
      },
      {
        path: 'invigilationMaintance',
        name: 'InvigilationMaintance',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/InvigilationMaintance.vue')
      },
      {
        path: 'invigilationEdit',
        name: 'InvigilationEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/InvigilationEdit.vue')
      },
      {
        path: 'openAndEndNoticeQuery',
        name: 'OpenAndEndNoticeQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenAndEndNoticeQuery.vue')
      },
      {
        path: 'openAndEndNoticeNewQuery',
        name: 'OpenAndEndNoticeNewQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenAndEndNoticeNewQuery.vue')
      },
      {
        path: 'openEndNoticeEdit',
        name: 'OpenEndNoticeEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenEndNoticeEdit.vue')
      },
      {
        path: 'stageDataChengeQuery',
        name: 'StageDataChengeQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageDataChengeQuery.vue')
      },
      {
        path: 'stageDateEdit',
        name: 'StageDateEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageDateEdit.vue')
      },
      {
        path: 'openAndEndSubmitQuery',
        name: 'OpenAndEndSubmitQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenAndEndSubmitQuery.vue')
      },
      {
        path: 'openEndNoticeSubmitEdit',
        name: 'OpenEndNoticeSubmitEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/OpenEndNoticeSubmitEdit.vue')
      },
      {
        path: 'stageDataSubmitQuery',
        name: 'StageDataSubmitQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageDataSubmitQuery.vue')
      },
      {
        path: 'stageDateSubmitEdit',
        name: 'StageDateSubmitEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/qua/StageDateSubmitEdit.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/QuaRouter.vue')
  }
]
