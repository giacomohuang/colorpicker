import ColorPicker from './ColorPicker.vue'
var plugin = {
  install: function (app) {
    app.component('ColorPicker', ColorPicker)
  }
}
export default plugin
