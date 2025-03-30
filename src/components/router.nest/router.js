import { createRouter, createMemoryHistory } from 'vue-router';
import TopComp from '/src/components/router.nest/TopComp.vue';
import MiddleComp from '/src/components/router.nest/MiddleComp.vue';
import ChildComp from '/src/components/router.nest/ChildComp.vue';

const routes = [
  {
    path: '/top/:topname',
    name: 'TopRoute',
    component: TopComp,
  },
  {
    path: '/top/:topname/middle/:middlename',
    name: 'MiddleRoute',
    component: MiddleComp,
  },
  {
    path: '/top/:topname/middle/:middlename/child/:childname',
    name: 'ChildRoute',
    component: ChildComp,
  },
  {
    path: '/top/:topname',
    name: 'TopRouteNest',
    component: TopComp,
    children: [
      {
        path: 'middle/:middlename',
        name: 'MiddleRouteNest',
        component: MiddleComp,
        children: [
          {
            path: 'child/:childname',
            name: 'ChildRouteNest',
            component: ChildComp,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
