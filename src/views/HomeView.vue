<template>
  <ColorPicker style="margin: 50px" mode="solid" :degree="45" :gradients="g" @colorChanged="changed" />
</template>

<script setup>
import ColorPicker from '../components/ColorPicker.vue'
// import ColorPicker from '@mcistudio/vue-colorpicker'
// import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const g = ref([
  { id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 1 } },
  { id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } },
])
function changed(color) {
  console.log('changed', color)
}
</script>
