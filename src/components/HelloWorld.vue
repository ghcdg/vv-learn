<script setup>
import { ref } from 'vue';
defineProps({
  msg: String,
});

</script>

<template>
  <h5>HelloWorld.vue | {{ msg }}</h5>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
