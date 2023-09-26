import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss'
import installSvgIcon from '@/icons'
import '@/utils/request'
import '@/permission'
const app = createApp(App)
// 全局注册svg-icon组件
installSvgIcon(app)
installElementPlus(app)
app.use(store).use(router).mount('#app')
