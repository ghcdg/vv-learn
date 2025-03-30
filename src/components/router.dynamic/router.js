import { createRouter, createMemoryHistory } from 'vue-router';
import User from '/src/components/router.dynamic/User.vue';

const routes = [
  {
    path: '/user/:name',
    component: User,
  },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
