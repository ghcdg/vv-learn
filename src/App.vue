<script setup>
import { ref,  defineAsyncComponent} from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';
import D from './components/D.vue';
import E from './components/E.vue';
const CustomAsync = defineAsyncComponent(() => import('./components/HelloWorld.vue'));
const CustomE = E;

</script>

<template>
  <div>
    <p>App.vue</p>
  </div>

  <A></A>
  <B></B>
  <C></C>
  <D></D>
  <hr>
  <CustomAsync msg=" import component | by defineAsyncComponent"></CustomAsync>
  <CustomE></CustomE>
</template>

<script>
import C from './components/C.vue';

export default {
  // to provide the component's name for identification and debugging purposes
  name: 'App',

  // to registers other components that can be used within current component
  components: {
    C,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
