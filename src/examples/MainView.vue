<template>
  <ColorPicker v-model="data" :color="{ r: 120, g: 12, b: 12, a: 1 }"></ColorPicker>
  {{ data }}
</template>

<script setup>
import { ref } from 'vue'
import ColorPicker from '../ColorPicker.vue'
const data = ref({})
</script>

<style scoped></style>
