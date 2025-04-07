import { createRouter, createWebHistory } from 'vue-router';

// 具体对比 可以打开浏览器开发着工具 Network 查看

// 普通加载模式
// import HomeView from './components/router/HomeView.vue';
// import AboutView from './components/router/AboutView.vue';

// 懒加载模式（取消注释即可切换）
const HomeView = () => import('./components/router/HomeView.vue');
const AboutView = () => import('./components/router/AboutView.vue');

const routes = [
  { 
    path: '/',
    redirect: '/welcome' // 初始重定向到一个不加载测试组件的位置
  },
  { 
    path: '/home',
    component: HomeView 
  },
  { 
    path: '/about',
    component: AboutView 
  },
  {
    path: '/welcome',
    component: { template: '<div>Welcome! Click links below</div>' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;