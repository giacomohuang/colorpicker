<template>
  <ColorPicker style="margin: 20px" mode="solid" :degree="45" :gradients="g" @colorChanged="aaa" />
</template>

<script setup>
// import ColorPicker from '/dist/colorpicker.es'
import ColorPicker from '../components/ColorPicker.vue'
// import ColorPicker from '/dist/colorpicker.es'
// import '/dist/style.css'
import { ref } from 'vue'
const g = ref([
  { id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 1 } },
  { id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } },
])
function aaa(color) {
  console.log('changed', color)
}
</script>
