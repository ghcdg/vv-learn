import { createApp } from 'vue';
import App from './App.vue';
import GlobalComponent from './components/Global.vue';


const app = createApp(App);
app.component('GlobalComponent', GlobalComponent);
// app.component('my-options-api-comp', MyOptionsApiComp);
app.mount('#app');
