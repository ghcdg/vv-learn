<template>  
  <div>  
    <p>Current Count In HelloWorld.vue: {{ count }}</p>
    <button @click="incrementCount">Increment Count In HelloWorld.vue</button>  
    <p>Store ID: {{ storeId }}</p>
  </div>  
</template>  

<script setup>  
import { useStore } from 'vuex';  
import { computed, onMounted, onUpdated, onUnmounted } from 'vue';  

const storeInstanceInHelloWorld = useStore();  
const count = computed(() => storeInstanceInHelloWorld.state.count);  
const storeId = computed(() => storeInstanceInHelloWorld.state.id);  

const incrementCount = () => {  
  storeInstanceInHelloWorld.commit('increment');  
};  

onMounted(() => {  
  console.log("Component Mounted - Store ID:", storeId.value);  
});  

onUpdated(() => {  
  console.log("Component Updated - Store ID:", storeId.value);  
});  

onUnmounted(() => {  
  console.log("Component Unmounted - Store ID:", storeId.value);  
});
</script>  

<style scoped>  
button {  
  margin-top: 20px;  
}  
</style>  