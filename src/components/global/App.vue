<script setup>
import GlobalA from './components/global/A.vue';
</script>

<template>
  <div></div>
  <global-a></global-a>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
