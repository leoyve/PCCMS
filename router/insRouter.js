module.exports = [
  {
    path: '/ins',
    name: '全民督工',
    children:[
      {
        path: 'duconCaseEdit',
        name: 'DuconCaseEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/DuconCaseEdit.vue')
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
      {
        path: 'notifyPage',
        name: 'NotifyPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/NotifyPage.vue')
      },
      {
        path: 'caseInfoCommonQuery',
        name: 'CaseInfoCommonQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseInfoCommonQuery.vue')
      },
      {
        path: 'caseInfoCommonDetail',
        name: 'CaseInfoCommonDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseInfoCommonDetail.vue')
      },
      {
        path: 'caseInfoIdentifyQuery',
        name: 'CaseInfoIdentifyQuery',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseInfoIdentifyQuery.vue')
      },
      {
        path: 'caseInfoIdentifyDetail',
        name: 'CaseInfoIdentifyDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/CaseInfoIdentifyDetail.vue')
      },
      {
        path: 'peopleIdentify',
        name: 'PeopleIdentify',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/PeopleIdentify.vue')
      },
      {
        path: 'photoChange',
        name: 'PhotoChange',
        component: () => import(/* webpackChunkName: "about" */ '../views/ins/PhotoChange.vue')
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InsRouter.vue')
  }
]
