a Vue3.x based colorpicker component. 

English | [中文](https://github.com/giacomohuang/colorpicker/blob/master/README.zh_CN.md)

## 概览

- 支持3种CSS背景颜色模式：`solid`，`linear-gradient` 和 `radial-gradient`。
- 支持颜色的不透明度（alpha）调整。
- 支持梯度条控制，轻松拖动/添加/删除控制点。
- 通过取色器可以快速从你的屏幕上提取任何颜色。（支持谷歌浏览器95版本以上）。
- 支持实时预览。

## Screenshots

<img width="283" alt="image" src="https://user-images.githubusercontent.com/20314549/180416571-b0dfcf42-805c-45e9-8ca0-cfd6d67e14fa.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180416988-bb9ee230-8052-4ac0-ac40-9f4aad2814e7.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180417207-58f2e7c3-39fb-4b86-8567-d819d5813605.png">

<video src="https://user-images.githubusercontent.com/20314549/180185437-259e668f-03ec-45ba-bb5a-bf7bd99973e2.mov" type="video/mp4" style="object-fill:fill" autoplay loop controls="false">
</video>

## Installation

```bash
npm i @mcistudio/vue-colorpicker
```

### How to Use
#### Global Registration
main.js
```javascript

import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/style.css'
createApp(App)
  .use(ColorPicker)
  .mount("#app");
```
##### OR

#### Local Registration
HelloWorld.vue
```vue
<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'

<template>
  <ColorPicker></ColorPicker>
</template>

</script>
```