<template>
  <div>
    <p>Current Count In App.vue: {{ count }}</p>
    <button @click="incrementCount">Increment Count In App.vue</button>  
    <HelloWorld />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const storeInstanceInApp = useStore();
const count = computed(() => storeInstanceInApp.state.count);  

const incrementCount = () => {  
  storeInstanceInApp.commit('increment');  
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