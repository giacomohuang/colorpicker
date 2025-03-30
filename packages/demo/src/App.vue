<template>
  <div class="demo">
    <h1>Vue Color Picker Demo</h1>
    <div class="picker-container">
      <ColorPicker v-model="color" />
      <div class="color-value">
        <code>
          <pre>{{ JSON.stringify(color, null, 2) }}</pre>
        </code>
      </div>
      <button @click="setColor">Set Color</button>
      <div class="color-value">
        <div>模式：{{ color.mode }}</div>
        <template v-if="color.mode === 'solid'">
          <div>HEX：{{ color.hex }}</div>
          <div>RGBA：rgba({{ color.color.r }}, {{ color.color.g }}, {{ color.color.b }}, {{ color.color.a }})</div>
        </template>
        <template v-else-if="color.mode === 'linear'">
          <div>角度：{{ color.degree }}°</div>
          <div>渐变色：</div>
          <div v-for="(stop, index) in color.color" :key="index">停止点 {{ index + 1 }}：{{ stop.percent }}% - rgba({{ stop.color.r }}, {{ stop.color.g }}, {{ stop.color.b }}, {{ stop.color.a }})</div>
          <div>CSS：{{ color.css }}</div>
        </template>
        <template v-else-if="color.mode === 'radial'">
          <div>渐变色：</div>
          <div v-for="(stop, index) in color.color" :key="index">停止点 {{ index + 1 }}：{{ stop.percent }}% - rgba({{ stop.color.r }}, {{ stop.color.g }}, {{ stop.color.b }}, {{ stop.color.a }})</div>
          <div>CSS：{{ color.css }}</div>
        </template>
      </div>
      <div class="preview-box" :style="getPreviewStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ColorPicker from '@colorpicker/core'
import '@colorpicker/core/dist/style.css'

const color = ref({
  mode: 'solid',
  color: {
    r: 200,
    g: 200,
    b: 200,
    a: 1
  }
})

const setColor = () => {
  color.value.mode = 'solid'
  color.value.color = {
    r: 1,
    g: 13,
    b: 12,
    a: 0.5
  }
}

const getPreviewStyle = computed(() => {
  if (color.value.mode === 'solid') {
    return {
      background: `rgba(${color.value.color.r}, ${color.value.color.g}, ${color.value.color.b}, ${color.value.color.a})`
    }
  } else {
    return {
      backgroundImage: color.value.css?.split(':')[1] || ''
    }
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
  text-align: left;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
}

.color-value > div {
  margin-bottom: 8px;
}

.preview-box {
  width: 200px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-image: url('./assets/img/optmask.png');
}
</style>
