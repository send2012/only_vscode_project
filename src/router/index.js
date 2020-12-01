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

export default router;
