
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/list-data/ListDataComponent'),
    },
    {
        path: '/create-data',
        name: 'create',
        component: () => import('../components/create-data/CreateDataComponent'),
    },
    {
        path: '/edit-data/:id',
        name: 'update',
        component: () => import('../components/edit-data/EditDataComponent'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
  
  router.beforeResolve((to, from, next) => {
    if (to.name) {
      // Quando houver carregamento de uma página inicial, então usar o NProgress:
      NProgress.start();
    }
    next();
  });
  
  router.afterEach((to, from) => {
    // Completando a animação da rota do NProgress
    NProgress.done();
  });
  
  export default router;
