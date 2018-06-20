import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})
router.beforeEach((to, from, next)=>{
  store.commit('nowStatus', 'loading')
  next();
})

router.afterEach((to, from, next)=>{
  store.commit('nowStatus', 'end')
  setTimeout(()=>{
    store.commit('nowStatus', 'hide')
  }, 900)
  setTimeout(()=>{
    store.commit('nowStatus', 'normal')
  }, 1000)

})

Vue.config.productionTip = false

// hack for active mobile
document.addEventListener("touchstart", function(){}, true)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
