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
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/QuaRouter.vue')
  }
]
