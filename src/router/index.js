import Vue from 'vue';
import VueRouter from 'vue-router';

import Entrance from '@/views/entrance/';
import BuildInPage from '@/views/buildIn_page/';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
        name: 'entrance',
        // route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: /* webpackChunkName: "Entrance" */ Entrance,
    },
    {
        path: '/buildIn-page',
        name: 'buildIn_page',
        component: /* webpackChunkName: '' */ BuildInPage,
    },
];

const router = new VueRouter({
	routes,
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫, 判断用户是否登录
router.beforeEach((to, from, next) => {
    if (to.path === '/login')
        next();
    else
    {
        let token = localStorage.getItem('Authorization');

        if (token === 'null' || token === '')
            next('/login');
        else
            next();
    }
} )

export default router;
