import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/Home.vue'
Vue.use(Router);

export default new Router({
  routers: [
    {path: '/', name: 'Home', component: Home},
    {path: '/Home', name: 'Home', component: Home, meta: {index: 1}},

  ],
  // 路由切换页面始终回到最顶部
  scrollBehavior(to, from, savePosition) {
    return {x: 0, y: 0}
  }
});
