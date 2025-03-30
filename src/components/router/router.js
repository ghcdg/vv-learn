import { createRouter, createMemoryHistory } from 'vue-router';

import HomeView from './components/router/HomeView.vue';
import AboutView from './components/router/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
