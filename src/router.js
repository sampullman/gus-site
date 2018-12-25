import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Gus Pullman',
      },
    },
    {
      path: '/early',
      name: 'early',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EarlyDays.vue'),
      meta: {
        title: 'Gus Early Days',
      },
    },
    {
      path: '/prime',
      name: 'prime',
      component: () => import('./views/PrimeTime.vue'),
      meta: {
        title: 'Gus Prime Time',
      },
    },
    {
      path: '/golden',
      name: 'golden',
      component: () => import('./views/GoldenYears.vue'),
      meta: {
        title: 'Gus Golden Years',
      },
    },
  ],
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    const parentTitle = to.matched.some(record => record.meta.title);
    document.title = to.meta.title || parentTitle || 'Gus Pullman';
  });
});

export default router;
