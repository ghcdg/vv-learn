<template>
  <h4>-------------route info---------------</h4>
  <!-- <HelloWorld msg="hi"></HelloWorld> -->
  <p>Current route path: {{ $route.path }}</p>
  <p>Current route name: {{ $route.name }}</p>

  <router-link to="/a-home-b">a-home-b</router-link>
  <h4>-------------route info---------------</h4>
  <router-link
    :to="{
      name: 'BHomeA',
      params: { customparam: 'ahomeb' },
    }"
    >b-home-a</router-link
  >

  <router-view name="FirstComp" />
  <router-view></router-view>
  <router-view name="SecondComp" />
</template>

<script>
export default {
  // to provide the component's name for identification and debugging purposes
  name: 'App',

  // to registers other components that can be used within current component
  components: {},
};
</script>
