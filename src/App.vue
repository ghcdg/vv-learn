<template>
  <div>
    <p>App.vue</p>
    <button @click="incrementCount">Increment | By .commit | {{ count }}</button>
    <br/><button @click="incrementByThousand">+1000 | By mapMutations | {{ countOptionsApi }}</button>
    <br/><button @click="incrementCountBy">Increment By 666 | {{ count }}</button>
    <HelloWorld />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useStore } from 'vuex';

const storeInstanceInApp = useStore();
const count = computed(() => storeInstanceInApp.state.count);


function incrementCount() {
  storeInstanceInApp.commit("increment");
}

function incrementCountBy () {
  storeInstanceInApp.commit("incrementBy", 666);
}

</script>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      "incrementByThousand",
    ])
  },

  computed: {
    countOptionsApi () {
      return this.$store.state.count;
    }
  }
}

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