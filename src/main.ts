import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'
// 加载全局样式
import './styles/index.scss'

// 引入字体图标文件
import '@/assets/icons/iconfont/iconfont.css' // global css
import '@/assets/icons/iconfont/iconfont.js'

import 'virtual:svg-icons-register'
import iconSvg from '@/components/svg-icon/index.vue'

createApp(App).component('iconSvg', iconSvg).use(elementPlus).use(store, key).use(router).mount('#app')
