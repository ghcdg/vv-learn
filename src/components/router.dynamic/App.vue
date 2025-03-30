<script setup>
// code
</script>

<template>
  <!-- <HelloWorld msg="hi"></HelloWorld> -->
  <strong>Current route path:</strong> {{ $route.fullPath }}

  <div>
    <RouterLink to="/user/rc">user rc</RouterLink>
  </div>
  <div>
    <RouterLink to="/user/ik">user ik</RouterLink>
  </div>

  <RouterView></RouterView>
</template>

<script>
export default {
  // to provide the component's name for identification and debugging purposes
  name: 'App',

  // to registers other components that can be used within current component
  components: {},
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
