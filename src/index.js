import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '../src/App.vue'

// 引入全局CSS样式
import './assets/styles/global.styl'
//引入vuerouter
import createRouter from './config/router';

Vue.use(VueRouter);
const router=createRouter()

// 将根节点root注入到app.vue组件中
new Vue({
  router,
  render: h => h(App)
}).$mount("#root")
