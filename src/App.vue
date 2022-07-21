<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

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
</style>
