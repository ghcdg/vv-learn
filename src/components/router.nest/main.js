import { createApp } from 'vue';
import App from './App.vue';
import router from '/src/components/router.nest/router.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
