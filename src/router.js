import Vue from 'vue'
import Router from 'vue-router'
import MainView from './components/MainView/MainView.vue'
import ReportView from './components/ReportView/ReportView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainview',
      component: MainView
    },
    {
      path: '/reporte',
      name: 'reportview',
      component: ReportView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
