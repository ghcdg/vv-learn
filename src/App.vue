<template>
  <div>
    <p>Current Count In App.vue: {{ count }}</p>
    <p>todosLength: {{ todosLength }}</p>
    <p>todosDoneGetter: {{ todosDoneGetter }}</p>
    <p>countAddNumFunctionGetter: {{ countAddNumFunction(33) }}</p>
    
    <p>Options API</p>
    <p>{{ optIdLengthGetter }}</p>
    <p>{{ optTodosDoneGetterNewName }}</p>

    <p>自定义函数在 Composition API 语法中实现类似于 mapGetters 的效果</p>
    <p>{{ optIdLengthGetterHook }}</p>
    <p>{{ optTodosDoneGetterHook }}</p>
  </div>
</template>

<script setup>
// Composition API syntax
import { useStore } from 'vuex';
import { computed } from 'vue';

const storeInstanceInApp = useStore();
// 使用 getters 进行复杂逻辑计算, 可以直接通过 store 获取使用
const todosLength = computed(() => storeInstanceInApp.state.todos.length);
const todosDoneGetter = computed(() => storeInstanceInApp.getters.todosDoneGetter.length);

// 利用 getters 创建 computed
const { count, countAddNumFunctionGetter } = computed(() => {
  return {
    count: storeInstanceInApp.getters.idLengthGetter,
    countAddNumFunctionGetter: storeInstanceInApp.getters.countAddNumFunctionGetter,
  }
}).value;


const { optIdLengthGetterHook, optTodosDoneGetterHook } = useVuexGetters([
  'optIdLengthGetter',
  'optTodosDoneGetter'
]);

function countAddNumFunction(num) {
  return countAddNumFunctionGetter(num)
}

// 自定义函数在 Composition API 语法中实现类似于 mapGetters 的效果
function useVuexGetters(getterKeys) {
  const store = useStore();
  return getterKeys.reduce((acc, key) => {
    // acc[key] = computed(() => store.getters[key]);
    acc[key+"Hook"] = computed(() => store.getters[key]+100000);
    return acc;
  }, {});
}


</script>

<script>
// Options API syntax
import { mapGetters } from 'vuex'
export default {
  // ...
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'optIdLengthGetter',
      // ...
    ]),
    ...mapGetters({
      'optTodosDoneGetterNewName': 'optTodosDoneGetter'
      // ...
    })
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