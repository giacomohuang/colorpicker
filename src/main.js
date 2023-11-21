import ColorPicker from './ColorPicker.vue'
import { createApp } from 'vue'
import App from './examples/MainView.vue'
const app = createApp(App)
app.mount('#app')

ColorPicker.install = function (app) {
  app.component('ColorPicker', ColorPicker)
}

export default ColorPicker
