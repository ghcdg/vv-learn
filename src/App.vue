<script setup>
// code
let linkToHomeComp = '/';
let linkToAboutComp = '/about';
</script>

<template>
  <!-- <HelloWorld msg="hi"></HelloWorld> -->
  <strong>Current route path:</strong> {{ $route.fullPath }}

  <div>
    <RouterLink to="/">home (static string to=)</RouterLink>
    <br />
    <RouterLink :to="linkToHomeComp">home (binding :to=)</RouterLink>
    <!-- Issue: There is no variable named "/" defined in the current component. -->
    <!-- <RouterLink :to="/"></RouterLink> -->
  </div>
  <div>
    <RouterLink to="/about">about (static string to=)</RouterLink>
    <br />
    <RouterLink :to="linkToAboutComp">about (binding :to=)</RouterLink>
    <!-- Issue: There is no variable named "/about" defined in the current component. -->
    <!-- <RouterLink :to="/about"></RouterLink> -->
  </div>

  <RouterView></RouterView>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  // to provide the component's name for identification and debugging purposes
  name: 'App',

  // to registers other components that can be used within current component
  components: {
    HelloWorld,
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
