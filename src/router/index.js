import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '*', redirect: '/workbench' },
        {
            path: '/workbench',
            name: '工作台',
            meta: {
                index: '1',
            },
            component: () => import('../views/workbench/index.vue'),
        },
        {
            path: '/userManagement',
            name: '用户管理',
            meta: {
                index: '2',
            },
            component: () => import('../views/userManagement/index.vue'),
        },
        {
            path: '/orderManagement',
            name: '订单管理',
            meta: {
                index: '3',
            },
            component: () => import('../views/orderManagement/index.vue'),
        },
        
        // 提现管理
        {
            path: '/cashManagement/withdrawalAudit',
            name: '提现审核',
            meta: {
                index: '4-1',
            },
            component: () => import('../views/cashManagement/withdrawalAudit.vue'),
        },
        {
            path: '/cashManagement/withdrawalOrder',
            name: '提现订单',
            meta: {
                index: '4-2',
            },
            component: () => import('../views/cashManagement/withdrawalOrder.vue'),
        },

        // 营销管理
        {
            path: '/marketingManagement/appConfig',
            name: 'app配置',
            meta: {
                index: '5-1',
            },
            component: () => import('../views/marketingManagement/appConfig.vue'),
        },
        {
            path: '/marketingManagement/pushManagement',
            name: '推送管理',
            meta: {
                index: '5-2',
            },
            component: () => import('../views/marketingManagement/pushManagement.vue'),
        },

        //  系统设置
        {
            path: '/systemSettings/cacheManagement',
            name: '缓存管理',
            meta: {
                index: '6-1',
            },
            component: () => import('../views/systemSettings/cacheManagement.vue'),
        },
    ],
});
