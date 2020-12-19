import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vuetify from '@/plugins/vuetify';

// // 请求头加token
// // 添加请求拦截器，在请求头中加 token
// axios.interceptors.request.use(
//     config => {
//         if (localStorage.getItem('Authorization')) {
//             config.headers.Authorization = localStorage.getItem('Authorization')
//         }

//         return config;
//     },

//     error => {
//         return Promise.reject(error);
//     }
// );

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
