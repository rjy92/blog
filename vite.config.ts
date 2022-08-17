import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 注意：在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块：npm i -D @types/node
import path from 'path'
import vitePluginSvgIcons from 'vite-plugin-svg-icons'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        WindiCSS(),
        // 配置svg图标
        vitePluginSvgIcons({
            // 配置路劲在你的src里的svg存放文件
            iconDirs: [path.resolve(process.cwd(), 'src/icons')],
            symbolId: 'icon-[dir]-[name]'
        }),
        eslintPlugin({
        // 配置选项
            cache: false // 禁用 eslint 缓存
        }),
        vueJsx({
        // 配置选项
        })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: '@import "@/styles/variables.scss";'
                additionalData: '@use "@/styles/element/index.scss" as *;'
            }
        }
    },
    server: {
        proxy: {
            // 选项写法
            '/dev-api': {
                target: 'http://saas-dev-api.51cto.com/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/dev-api/, '')
            }
        }
    }
})
