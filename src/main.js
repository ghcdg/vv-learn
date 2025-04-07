import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
    state () {
        return {
            count: 666,
            id: "is me, the state from main.js",
            todos: [
                { id: 1, text: '...', done: true },
                { id: 2, text: '...', done: false },
                { id: 3, text: '...', done: true },
                { id: 4, text: '...', done: false },
                { id: 5, text: '...', done: true },
              ],            
        }
    }, 

    getters: {
        todosDoneGetter (state) {
            return state.todos.filter(todo => todo.done);
        },
        idLengthGetter (state) {
            return state.id.length;
        },
        // 让 getters 返回一个函数
        countAddNumFunctionGetter: (state) => (num) => {
            return state.count + num;
        },

        // getters for Options API
        optTodosDoneGetter (state) {
            return state.todos.filter(todo => todo.done).length;
        },
        optIdLengthGetter (state) {
            return state.id.length;
        },
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
