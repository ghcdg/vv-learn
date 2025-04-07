<template>
  <div>
    <nav>
      <router-link to="/welcome">Welcome</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
console.log('Component Loaded: App.vue');
</script>