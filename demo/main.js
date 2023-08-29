import { createApp } from 'vue'
import App from './App.vue'
import ColorPicker from '../packages/main'
const app = createApp(App)
app.use(ColorPicker)
app.mount('#app')

// 默认导出组件
