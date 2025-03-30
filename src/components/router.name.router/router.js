import { createRouter, createMemoryHistory } from 'vue-router';
import User from '/src/components/router.name.router/User.vue';
import Money from '/src/components/router.name.router/Money.vue';

const routes = [
  { path: '/user/:username', name: 'profile', component: User },
  { path: '/money/:moneyParam', name: 'moneyRoute', component: Money },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
