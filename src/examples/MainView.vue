<template>
  <ColorPicker v-model="data"></ColorPicker>
  {{ data }}
</template>

<script setup>
import { ref } from 'vue'
import ColorPicker from '../ColorPicker.vue'
const data = ref({ color: { r: 120, g: 10, b: 10, a: 1 }, mode: 'solid' })
</script>

<style scoped></style>
