a Vue3.x based colorpicker component. 

[Guides & Examples](https://giacomohuang.github.io/colorpicker) | [文档和示例](https://giacomohuang.github.io/colorpicker/zh)

## Features
- Supports 3 CSS background color modes: `solid`, `linear-gradient` and `radial-gradient`.
- Supports color opacity(alpha) adjustment.
- Supports gradient bar control, easily drag/add/delete the control points.
- The EyeDropper can quickly pick any color from your screen. （supports Google Chrome version 95+）
- Supports live preview.

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
