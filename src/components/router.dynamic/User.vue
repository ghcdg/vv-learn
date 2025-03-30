<script setup>
// code
import { onMounted, onUpdated, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

// base on the router.js, the same component instance will be reused.
// this also means that the lifecycle hooks of the component will not be called.
// you can use 'onUpdated' or 'watch' to track the data

onMounted(() => {
  console.log('onMounted: ' + document.getElementById('app').textContent);
});

// the same component instance will be reused
onUpdated(() => {
  console.log('onUpdated' + document.getElementById('app').textContent);
});

watch(
  () => route.params.name,
  (newVal, oldVal) => {
    console.log('watch: route.params.name:', newVal, oldVal);
  }
);
</script>

<template>
  <div>this is user: {{ $route.params.name }}</div>
</template>
