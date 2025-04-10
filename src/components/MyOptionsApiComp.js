import { h } from "vue";
const MyOptionsApiComp = {

    name: 'MyOptionsApiComp',

    data() {
        return {
            count: 0
        }
    },
    
    /**
     * Vue 默认使用 运行时版本 (vue.runtime.esm-bundler.js)	
     * 如果要编译模板 则需要 完整版本 (vue.esm-bundler.js)
     * 因为 完整版包含模板编译器
     * 遇到字符串模板时会实时编译为渲染函数
     * 所以 要解析这样就需要在 vite.config.js 中进行配置
     */
    template: `
        <div>
            <p>MyOptionsApiComp</p>
            <p>{{count}}</p>
            <button @click="increment">increment</button>
        </div>
    `,

    // render() {
    //     return h('div', [
    //       h('p', 'MyOptionsApiComp'),
    //       h('p', this.count),
    //       h('button', { onClick: this.increment }, 'increment')
    //     ])
    //   },    

    methods: {
        increment() {
            this.count++;
        }
    }
}

export default MyOptionsApiComp;