# Vue3 Color Picker

A powerful and flexible color picker component for Vue 3.x applications.

[Documentation & Examples](https://giacomohuang.github.io/colorpicker) | [文档和示例](https://giacomohuang.github.io/colorpicker/zh)

## ✨ Features

- **Multiple Color Modes**
  - Solid color selection with HEX, RGB, and HSL formats
  - Linear gradient with customizable angle and positions
  - Radial gradient with adjustable center and radius
- **Advanced Controls**
  - Alpha channel support for transparency adjustment
  - Interactive gradient bar with intuitive control points
  - Drag, add, or delete gradient stops with ease
  - Real-time color preview
- **Modern Browser Features**
  - EyeDropper tool for picking colors from anywhere on screen (Chrome 95+)
  - Full keyboard navigation support
  - Responsive design that works on both desktop and mobile

## 🖼️ Screenshots

<img width="283" alt="image" src="https://user-images.githubusercontent.com/20314549/180416571-b0dfcf42-805c-45e9-8ca0-cfd6d67e14fa.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180416988-bb9ee230-8052-4ac0-ac40-9f4aad2814e7.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180417207-58f2e7c3-39fb-4b86-8567-d819d5813605.png">

<video src="https://user-images.githubusercontent.com/20314549/180185437-259e668f-03ec-45ba-bb5a-bf7bd99973e2.mov" type="video/mp4" style="object-fill:fill" autoplay loop controls="false">
</video>

## 📦 Installation

```bash
# Using npm
npm install @mcistudio/vue-colorpicker

# Using yarn
yarn add @mcistudio/vue-colorpicker

# Using pnpm
pnpm add @mcistudio/vue-colorpicker
```

## 🚀 Quick Start

### Global Registration

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/style.css";

const app = createApp(App);
app.use(ColorPicker);
app.mount("#app");
```

### Local Registration

```vue
<script setup>
import { ref } from "vue";
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/style.css";

const color = ref({
  mode: "solid",
  color: {
    r: 12,
    g: 134,
    b: 123,
    a: 1,
  },
});
</script>

<template>
  <ColorPicker v-model="color" />
</template>
```

## 🌐 Browser Support

- Chrome ≥ 95 (for EyeDropper feature)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License © 2024
