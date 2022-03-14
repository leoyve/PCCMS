import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import basicRouter from './basicRouter.js'
import proRouter from './proRouter.js'
import insRouter from './insRouter.js'
import floRouter from './floRouter.js'
import insReportRouter from './insReportRouter.js'
import quaRouter from './quaRouter.js'


const routes = [
  ...basicRouter,
  ...proRouter,
  ...insRouter,
  ...floRouter,
  ...insReportRouter,
  ...quaRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
