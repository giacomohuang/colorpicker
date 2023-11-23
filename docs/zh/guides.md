# 开发指南

## 概览
- 支持3种CSS背景颜色模式：`solid`，`linear-gradient` 和 `radial-gradient`。
- 支持颜色的不透明度（alpha）调整。
- 支持梯度条控制，轻松拖动/添加/删除控制点。
- 通过取色器可以快速从你的屏幕上提取任何颜色。（支持谷歌浏览器95版本以上）。
- 支持实时预览。

![screenshot01](/screenshot01.png)
![screenshot02](/screenshot02.png)
![screenshot03](/screenshot03.png)

## 安装

```bash
npm i @mcistudio/vue-colorpicker
```

## 如何使用

- **全局注册**

```javascript
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/style.css'
createApp(App)
  .use(ColorPicker)
  .mount("#app");
```
- **局部注册**
```vue
<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'

<template>
  <ColorPicker></ColorPicker>
</template>
</script>
```
### Props 参数

| 参数名  | 描述               | 数据类型 | 允许值                      | 默认值 | 是否必填 |
| ------- | ------------------ | -------- | --------------------------- | ------ | -------- |
| V-model | 绑定值             | JSON     | `<v-model>`                 |        | No       |
| modebar | 是否显示模式选择条 | String   | show<br/>none               | show   | No       |
| size    | 按钮尺寸           | String   | small<br/>medium<br />large | medium | No       |

`<v-model>`

| 参数名 | 描述                         | 数据类型       | 允许值                        | 默认值                                               | 是否必填 |
| --------- | ----------------------------------- | ---------- | --------------------------------------- | ------------------------------------------------------------ | -------- |
| mode      | 模式                          | String     | solid<br />linear<br />radial<br /> | solid                                                        | No       |
| color     | 色值(rgba格式)，仅在solid模式中生效      | String     | -                                       | \{ r: 0, g: 0, b: 0, a: 1 \}                                   | No       |
| hex | 色值(hex格式)，仅在solid模式中生效，只读 | String | - | - | No |
| degree    | 渐变色角度，仅在linear-gradient模式中生效 | Number     | -                                       | 90                                                           | No       |
| gradients | 渐变色值列表，仅在linear-gradient和radial-gradient模式中生效<br />                 | JSON Array | -                                       | [<br />{<br />percent: 0, <br />color: { r: 255, g: 255, b: 255, a: 1 \}<br />   \}<br />   \{ <br />percent: 100, <br />color: \{ r: 0, g: 0, b: 0, a: 1 <br />\} <br />  \}<br />] | No       |


### Events 事件

| 事件名称   | 描述 | 返回参数 |
| ------------ | ----------- | ---------- |
| colorChanged | 当颜色值、渐变色角度发生变化时触发本事件 | returnValue|

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
  	"hex":'#000000'
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

<style>
.content-container img {
  width:50%
}
video {
  width:50%
}
</style>