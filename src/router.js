import Vue from 'vue';
import Router from 'vue-router';
import LushDashboardView from './views/LushDashboardView.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'LushDashboardView',
            component: LushDashboardView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});
//# sourceMappingURL=router.js.map