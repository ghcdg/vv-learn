<script setup></script>

<template>
  <h4>-------------route info---------------</h4>
  <!-- <HelloWorld msg="hi"></HelloWorld> -->
  <p>Current route path: {{ $route.path }}</p>
  <p>Current route name: {{ $route.name }}</p>
  <hr />
  <div>
    <h4>-------------RouterLink URL---------------</h4>
    <RouterLink to="/top/ttturl">Top</RouterLink> ,
    <RouterLink to="/top/ttturl/middle/mmmurl">Middle</RouterLink> ,
    <RouterLink to="/top/ttturl/middle/mmmurl/child/cccurl">Child</RouterLink>

    <hr />

    <h4>-------------RouterLink name to specific Comp---------------</h4>
    <RouterLink :to="{ name: 'TopRoute', params: { topname: 'tttname' } }"
      >Top
    </RouterLink>
    ,
    <RouterLink
      :to="{
        name: 'MiddleRoute',
        params: { topname: 'tttname', middlename: 'mmmname' },
      }"
      >Middle
    </RouterLink>
    ,
    <RouterLink
      :to="{
        name: 'ChildRoute',
        params: {
          topname: 'tttname',
          middlename: 'mmmname',
          childname: 'cccname',
        },
      }"
      >Child
    </RouterLink>

    <h4>
      -------------RouterLink name nest include parent Comp---------------
    </h4>
    <RouterLink
      :to="{ name: 'TopRouteNest', params: { topname: 'tttnamenest' } }"
      >Top
    </RouterLink>
    ,
    <RouterLink
      :to="{
        name: 'MiddleRouteNest',
        params: { topname: 'tttnamenest', middlename: 'mmmnamenest' },
      }"
      >Middle
    </RouterLink>
    ,
    <RouterLink
      :to="{
        name: 'ChildRouteNest',
        params: {
          topname: 'tttnamenest',
          middlename: 'mmmnamenest',
          childname: 'cccnamenest',
        },
      }"
      >Child
    </RouterLink>
  </div>
  <hr />

  <h4>--------------Comp Info--------------</h4>

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
