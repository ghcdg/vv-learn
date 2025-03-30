<script setup></script>

<template>
  <!-- <HelloWorld msg="hi"></HelloWorld> -->
  <p>Current route path: {{ $route.path }}</p>
  <p>Current route name: {{ $route.name }}</p>

  <div>
    <RouterLink to="/user/rc">check user by url</RouterLink>
    <p></p>
    <router-link :to="{ name: 'profile', params: { username: 'ik' } }">
      check user by name
    </router-link>
  </div>

  <div>-----</div>

  <div>
    <router-link
      :to="{
        name: 'moneyRoute',
        params: { moneyParam: 'mp' },
      }"
      >show money</router-link
    >
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
