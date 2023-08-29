<template>
  <div style="margin: 20px">
    <h3 style="">small size</h3>
    <ColorPicker style="display: inline" mode="solid" size="small" :degree="90" :color="{ r: 255, g: 10, b: 20, a: 1 }" @colorChanged="changed" />
  </div>
  <div style="margin: 20px">
    <h2>medium size</h2>
    <ColorPicker mode="linear" size="medium" :degree="45" :gradients="g" @colorChanged="changed" />
  </div>
  <div style="margin: 20px">
    <h1>large size</h1>
    <ColorPicker mode="linear" size="large" :degree="45" modebar="none" :gradients="g" @colorChanged="changed" />
  </div>
</template>

<script setup>
// import ColorPicker from '../packages/main'
// import ColorPicker from '@mcistudio/vue-colorpicker'
// import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const g = ref([
  { id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 1 } },
  { id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }
])
function changed(color) {
  console.log('changed', color)
}
</script>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}
</style>
