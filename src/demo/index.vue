<template>
  <div class="demo">
    <h1>Vue Color Picker Demo</h1>
    <div class="picker-container">
      <ColorPicker v-model="color" />
      <div class="color-value">当前颜色值：{{ color.hex || `rgba(${color.color.r}, ${color.color.g}, ${color.color.b}, ${color.color.a})` }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorPicker from '@/ColorPicker.vue'

const color = ref({
  mode: 'solid',
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
})
</script>

<style scoped>
.demo {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

.picker-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.color-value {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
</style>
