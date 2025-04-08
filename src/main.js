import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = new createStore({
    state() {
        return {
            count: 0,
        }
    },
    mutations: {
        increment (state) {
            return state.count++;
        },

        incrementBy (state, num) {
            return (state.count += num);
        },

        incrementByThousand (state) {
            return (state.count += 1000);
        }

    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
