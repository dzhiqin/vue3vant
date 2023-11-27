import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import { useUserStore } from '@/stores/user';
import { TOKEN } from '@/utils/static';
import { getToken } from '@/utils/localStorage';
import config from '@/config'
import { showToast } from 'vant';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {title: 'home'}
    },
    {
      path: '/loan',
      name: 'loan',
      meta: {title: 'loan'},
      component: () => import('../views/loan/loan.vue')
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: () => import('../views/swipe/swipe.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/about.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/errorPage/404.vue')
    }
  ]
})
const whiteList = ["/login", "/404", "/403","/500","/home"];
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const token = userStore[TOKEN] || getToken();
  const isWhite = whiteList.some(item => item === to.path);
  if (isWhite) {
    console.log('white list ok');
    next();
  }
  else if (token) {
      // if (isEmpty(userStore.userInfo)) {
      //   await userStore.getUserInfo();
      // }
      next();
  }
  else {
    const redirect = encodeURIComponent(to.fullPath);
    next({
        path: "/login",
        query: { redirect },
    });
    showToast("请先登录再进行操作");
  }

  document.title = to.meta?.title ? to.meta.title : config.PROJECT_TITLE

  // keep-alive include判断
  // if (to.meta?.keepAlive) {
  //     const historyStore = useHistoryStore();
  //     historyStore.addKeepAliveInclude(to.name as string);
  // }
});
export default router