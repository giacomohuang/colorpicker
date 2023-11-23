<template>
  <div style="display: flex; align-items: center">
    <ColorPicker v-model="data" size="small" @colorChange="onChanged"></ColorPicker>
    <div style="margin-left: 12px">{{ data }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorPicker from '../ColorPicker.vue'
const data = ref({ color: { r: 33, g: 137, b: 216, a: 1 } })

function onChanged(val) {
  console.log(val)
}
</script>

<style scoped></style>
