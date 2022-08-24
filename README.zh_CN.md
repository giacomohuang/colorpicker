一款基于VueJS3.x拾色器组件。

[English](README.md) | 中文

## 特性

- 支持3种CSS背景颜色模式：`solid`，`linear-gradient` 和 `radial-gradient`。
- 支持颜色的不透明度（alpha）调整。
- 支持梯度条控制，轻松拖动/添加/删除控制点。
- 通过取色器可以快速从你的屏幕上提取任何颜色。（支持谷歌浏览器95版本以上）。
- 支持实时预览。

## Screenshot

<img width="283" alt="image" src="https://user-images.githubusercontent.com/20314549/180416571-b0dfcf42-805c-45e9-8ca0-cfd6d67e14fa.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180416988-bb9ee230-8052-4ac0-ac40-9f4aad2814e7.png">
<img width="282" alt="image" src="https://user-images.githubusercontent.com/20314549/180417207-58f2e7c3-39fb-4b86-8567-d819d5813605.png">




<div style="width:268px;height:347px">
<video src="https://user-images.githubusercontent.com/20314549/180185437-259e668f-03ec-45ba-bb5a-bf7bd99973e2.mov" type="video/mp4" style="width:100%;height:100%;object-fill:fill" autoplay loop controls="false">
</video>
</div>

## 安装

```bash
npm i @mcistudio/vue-colorpicker
```

### 使用说明
#### 全局注册模式
main.js
```javascript

import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/style.css'
createApp(App)
  .use(router)
  .use(ColorPicker)
  .mount("#app");
```
##### 或

#### 局部注册模式
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

#### 演示
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



### Props 参数

| Prop Name | Description                         | Type       | Accepted Value                         | Default Value                                                | Required |
| --------- | ----------------------------------- | ---------- | --------------------------------------- | ------------------------------------------------------------ | -------- |
| mode      | color mode                          | String     | solid<br />linear<br />radial<br /> | solid                                                        | No       |
| degree    | drgee value in Linear-gradient mode | Number     | -                                       | 90                                                           | No       |
| color     | rgba color value in solid mode      | String     | -                                       | { r: 0, g: 0, b: 0, a: 1 }                                   | No       |
| gradients | gradient list<br />                 | JSON Array | -                                       | [<br />  { <br />    percent: 0, <br />    color: { r: 255, g: 255, b: 255, a: 1 }<br />   }<br />   { <br />    percent: 100, <br />    color: { r: 0, g: 0, b: 0, a: 1 <br />    } <br />  }<br />] | No       |


### Events 事件

| event Name   | Description | Parameters |
| ------------ | ----------- | ---------- |
| colorChanged | triggered when the color is changed | returnValue|

###### `returnValue` examples:

**Solid Mode**
```JSON
{
    "mode": "solid",
    "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 1
    },
    "css": "background-color:rgba(0,0,0,1)"
}
```

**Linear Mode**
```JSON
{
    "mode": "linear",
    "degree": 90,
    "color": [
        {
            "percent": 0,
            "color": {
                "r": 255,
                "g": 255,
                "b": 255,
                "a": 1
            }
        },
        {
            "percent": 100,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0,
                "a": 1
            }
        }
    ],
    "css": "background-image:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(0,0,0,1) 100%)"
}
```

**Radial Mode**
```JSON
{
    "mode": "radial",
    "color": [
        {
            "percent": 0,
            "color": {
                "r": 255,
                "g": 255,
                "b": 255,
                "a": 1
            }
        },
        {
            "percent": 100,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0,
                "a": 1
            }
        }
    ],
    "css": "background-image:radial-gradient(rgba(255,255,255,1) 0%,rgba(0,0,0,1) 100%)"
}
```
