import { createApp } from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import 'animate.css'; // import animate.css

import '@/styles/index.scss'; // global css

import App from './App.vue';
import store from './store';
import router from './router';
import request from '@/utils/request';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import '@/assets/iconfonts/iconfont.css';

import '@/router/permission'; // permission control

import 'vue-fullpage.js/dist/style.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueFullPage);

// 替代Vue.prototype.xxx = xxxx;
app.config.globalProperties.req = request;
app.config.globalProperties.$message = ElMessage;
app.mount('#app');
