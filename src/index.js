import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex'
Vue.use(Vuex);
import App from '../src/App.vue'
// 引入全局CSS样式
import './assets/styles/global.styl'
//引入vuerouter
import createRouter from './config/router';
import store from './store/store'


Vue.use(VueRouter);

const router=createRouter()


// 将根节点root注入到app.vue组件中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#root")
