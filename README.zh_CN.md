# Vue3 颜色选择器

一款功能强大、灵活易用的 Vue 3.x 颜色选择器组件。

[English Documentation](https://giacomohuang.github.io/colorpicker) | [中文文档](https://giacomohuang.github.io/colorpicker/zh)

## ✨ 特性

- **多样化的颜色模式**
  - 纯色模式支持 HEX、RGB 和 HSL 格式
  - 线性渐变支持自定义角度和位置
  - 径向渐变支持可调节的中心点和半径
- **强大的控制功能**
  - 支持 Alpha 通道透明度调节
  - 直观的渐变控制条操作界面
  - 轻松拖拽、添加、删除渐变控制点
  - 实时颜色预览
- **现代浏览器特性**
  - 支持屏幕取色器功能（Chrome 95+ 版本）
  - 完整的键盘导航支持
  - 响应式设计，支持桌面和移动端

## 🖼️ 界面预览

<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180416571-b0dfcf42-805c-45e9-8ca0-cfd6d67e14fa.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180416988-bb9ee230-8052-4ac0-ac40-9f4aad2814e7.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180417207-58f2e7c3-39fb-4b86-8567-d819d5813605.png">

<video src="https://user-images.githubusercontent.com/20314549/180185437-259e668f-03ec-45ba-bb5a-bf7bd99973e2.mov" type="video/mp4" style="width:100%;height:100%;object-fill:fill" autoplay loop controls="false">
</video>

## 📦 安装

```bash
# 使用 npm
npm install @mcistudio/vue-colorpicker

# 使用 yarn
yarn add @mcistudio/vue-colorpicker

# 使用 pnpm
pnpm add @mcistudio/vue-colorpicker
```

## 🚀 快速开始

### 全局注册

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/style.css";

const app = createApp(App);
app.use(ColorPicker);
app.mount("#app");
```

### 局部注册

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

## 🌐 浏览器兼容性

- Chrome ≥ 95（支持取色器功能）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）

## 📄 开源协议

MIT License © 2024
