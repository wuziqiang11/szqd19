import Vue from 'vue'

import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
// 使用路由中间键
Vue.use(VueRouter);
// 引入index组件
import index from './components/index.vue'
// 注册路由的规则
const router =new VueRouter({
  routes:[
    { path: '/', component: index },
    { path: '/index', component: index }
  ]
})
// 引入css
import './assets/statics/site/css/style.css'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')