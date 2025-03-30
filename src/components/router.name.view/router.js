import { createRouter, createMemoryHistory } from 'vue-router';
import Home from '/src/components/router.name.view/Home.vue';
import A from '/src/components/router.name.view/AComp.vue';
import BComp from '/src/components/router.name.view/BComp.vue';

const routes = [
  {
    path: '/a-home-b/:customparam?',
    components: {
      default: Home,
      FirstComp: A,
      SecondComp: BComp,
    },
  },
  {
    path: '/b-home-a/:customparam?',
    name: 'BHomeA',
    components: {
      default: Home,
      FirstComp: BComp,
      SecondComp: A,
    },
  },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
