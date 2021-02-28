import { createApp } from 'vue'

import 'ant-design-vue/dist/antd.css';  //引入Antd样式

import Antd from 'ant-design-vue'       //全局引入Antd组件库

import App from './App.vue'

import router from './route'            //引入路由模块

import store from './store/index'

import 'default-passive-events' //解决Added non-passive event listener to a scroll-blocking 'mousewheel' event.告警

const app = createApp(App);

app.config.productionTip = false;

store.commit('setToken',localStorage.getItem('token'))  //把localStorage中的值给Vuex的token

//console.log(store.state.token.token)

app.use(router).use(Antd).mount('#app')

//用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过



