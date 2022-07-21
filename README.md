a Vue3.x based color picker component. 

English | [中文](README.zh_CN.md)

## Features

- Supports 3 CSS background color modes: `solid`, `linear-gradient` and `radial-gradient`.
- Supports color opacity(alpha) adjust.
- Supports gradient bar control, easily drag/add/delete the control points.
- The eyeDropper（supports Google Chrome version 95+）can quickly pick any color from your screen.
- Supports realtime preview.
- Standard CSS export.

<video src="https://user-images.githubusercontent.com/20314549/180185437-259e668f-03ec-45ba-bb5a-bf7bd99973e2.mov" type="video/mp4">
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
  .use(router)
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

#### demo
HelloWorld.vue
```vue
<template>
  <ColorPicker mode="mode" :degree="degree" :gradients="grad" @colorChanged="triggerChanged" />
</template>

<script setup>
import ColorPicker from '@mcisutdio/vue-colorpicker'
import '@mcisutdio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const mode = ref('linear')
const degree = ref(90)
const grad = ref([
  { id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 1 } },
  { id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } },
])
function triggerChanged(color) {
  console.log('current color:', color)
}
</script>
```



### Props

| Prop Name | Description                         | Type       | Accepted Values         | Default                                                      | Required |
| --------- | ----------------------------------- | ---------- | ----------------------- | ------------------------------------------------------------ | -------- |
| mode      | color mode                          | String     | solid / linear / radial | solid                                                        | No       |
| degree    | drgee value in Linear-gradient mode | Number     | -                       | 90                                                           | No       |
| color     | rgba color value in solid mode      | String     | -                       | { r: 0, g: 0, b: 0, a: 1 }                                   | No       |
| gradients | gradient list<br />                 | JSON Array | -                       | [{ percent: 0, color: { r: 255, g: 255, b: 255, a: 1 } }{ percent: 100, color: { r: 0, g: 0, b: 0, a: 1 } }] | No       |



### Events

| event Name   | Description | Parameters |
| ------------ | ----------- | ---------- |
| colorChanged |             | Color      |

###### return values example:

```JSON
{
    "mode": "linear",
    "degree": 45,
    "solid": null,
    "gradients": [
        {
            "percent": 12,
            "color": {
                "r": 255,
                "g": 202,
                "b": 10,
                "a": 1
            }
        },
        {
            "percent": 54,
            "color": {
                "r": 255,
                "g": 0,
                "b": 9,
                "a": 1
            }
        },
        {
            "percent": 100,
            "color": {
                "r": 59,
                "g": 50,
                "b": 240,
                "a": 1
            }
        }
    ],
    "solidStyle": null,
    "gradientStyle": "background-image:linear-gradient(45deg,rgba(255,202,10,1) 12%,rgba(255,0,9,1) 54%,rgba(59,50,240,1) 100%)"
}
```



