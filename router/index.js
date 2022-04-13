import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import basicRouter from './basicRouter.js'
import proRouter from './proRouter.js'
import insRouter from './insRouter.js'
import floRouter from './floRouter.js'
import insReportRouter from './insReportRouter.js'
import quaRouter from './quaRouter.js'
import fa3Router from './fa3Router.js'
import fa2Router from './fa2Router.js'
import fa1Router from './fa1Router.js'


const routes = [
  ...basicRouter,
  ...proRouter,
  ...insRouter,
  ...floRouter,
  ...insReportRouter,
  ...quaRouter,
  ...fa3Router,
  ...fa2Router,
  ...fa1Router
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
