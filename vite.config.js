import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
});

/**
  'vue': 'vue/dist/vue.esm-bundler.js'
  作用：
  将代码中对 'vue' 的导入重定向到 Vue 的完整 ESM 构建版本

  为什么需要：
  默认行为：Vite 默认使用 Vue 的运行时版本（vue.runtime.esm-bundler.js）

  完整版本：vue.esm-bundler.js 包含模板编译器，可以：

  编译字符串模板（如 template: '<div></div>'）

  支持运行时模板编译

  典型场景：
  当你在 .js 文件中使用字符串模板时必需：
  // MyComponent.js
  export default {
    template: `<div>Hello</div>` // 需要编译器
  }
 */

  
/**
 '@': fileURLToPath(new URL('./src', import.meta.url))
  作用：
  将 @ 符号映射到项目的 /src 目录

  分解说明：
  import.meta.url：获取当前模块的绝对URL

  new URL('./src', import.meta.url)：创建指向 /src 目录的URL对象

  fileURLToPath()：将文件URL转换为系统文件路径

  为什么需要：
  避免冗长的相对路径:
    // 不使用别名
  import MyComp from '../../../components/MyComp.vue'

  // 使用别名
  import MyComp from '@/components/MyComp.vue'
 */