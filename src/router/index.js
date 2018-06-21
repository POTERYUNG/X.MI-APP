import Vue from 'vue'
import Router from 'vue-router'
import Classification from '../components/classification'
import Discover from '../components/discover'
import Shoppingcart from '../components/shoppingcart'
import Mine from '../components/Mine'
import Search from '../components/search'
import Detail from '../components/detail'
import Pay from '../components/Pay'
import Login from '../components/login/login'
import Reg from '../components/login/reg'
import Order from '../components/order/order'
import Error404 from '../components/error/404'
import Error110 from '../components/error/110'
import _ from 'lodash'

Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: _.assignIn({
      time: new Date().getTime()
    }, query || {})
  })
};
Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component(resolve){require(['../components/home/index.vue'], resolve)}},
    {path: '/classification', name: 'classification', component: Classification},
    {path: '/discover', name: 'discover', component: Discover},
    {path: '/shoppingcart', name: 'shoppingcart', component: Shoppingcart},
    {path: '/mine', name: 'mine', component: Mine},
    {path: '/search', name: 'search', component: Search},
    {path: '/detail/:id', name: 'detail', component: Detail},
    {path: '/pay', name: 'pay', component: Pay},
    {path: '/login', name: 'login', component: Login},
    {path: '/reg', name: 'reg', component: Reg},
    {path: '/order', name: 'order', component: Order},
    {path: '/error/404', name: 'error-404', component: Error404},
    {path: '/error/110', name: 'error-110', component: Error110}
  ],  // 路由切换页面始终回到最顶部
  scrollBehavior(to, from, savePosition) {
    return {x: 0, y: 0}
  }
})
