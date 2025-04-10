<script setup>
import { ref } from 'vue';

</script>

<template>
  <div>
    <p>App.vue</p>
  </div>

  <!-- <HelloWorld></HelloWorld> -->
  <GlobalComponent></GlobalComponent>
  <my-options-api-comp></my-options-api-comp>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyOptionsApiComp from './components/MyOptionsApiComp.js';

export default {
  // to provide the component's name for identification and debugging purposes
  name: 'App',

  // to registers other components that can be used within current component
  components: {
    HelloWorld,
    MyOptionsApiComp
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
