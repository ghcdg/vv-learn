<script setup>
import { ref } from 'vue';

defineProps({
    msg: String,
});

</script>

<template>
    <p>Global.vue</p>
    <h5>{{ msg }}</h5>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
