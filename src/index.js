import Vue from 'vue';
import App from '../src/App.vue';

// 引入全局CSS样式
import './assets/styles/global.styl'
// 在body下创建一个根节点
const root = document.createElement('div');
root.setAttribute('id','root');
document.body.appendChild(root);

// 将根节点root注入到app.vue组件中
new Vue({
    render:h=>h(App)
}).$mount(root)
