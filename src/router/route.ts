import type { RouteRecordRaw } from 'vue-router';
export const dynamicRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/layout/index.vue'),
		redirect: '/acceptance/list',
		meta: { title: '登录' },
		children: [
			{
				path: '/acceptance/list',
				name: 'acceptanceList',
				component: () =>
					import('@/views/implementation-acceptance-list/index.vue'),
			},
			{
				path: '/acceptance/create',
				name: 'acceptanceCreate',
				component: () =>
					import('@/views/implementation-acceptance-list/create.vue'),
			},
		],
	},
];
export const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
];
export const pathMatch = [
	{
		path: '/:path(.*)*',
		component: () => import('@/views/error/404.vue'),
	},
];
