# 开发指南

## 概览

Vue Colorpicker 是一个功能强大的颜色选择组件，提供以下特性：

- 三种 CSS 背景颜色模式：`solid`（纯色）、`linear-gradient`（线性渐变）和 `radial-gradient`（径向渐变）
- 完整的 HSV 色彩空间支持，包含透明度控制
- 交互式渐变控制，支持拖拽式颜色节点管理
- 内置屏幕取色器功能（支持 Chrome 95+）
- 实时预览并生成 CSS 代码
- 响应式设计，提供三种尺寸选项

![screenshot01](/screenshot01.png)
![screenshot02](/screenshot02.png)
![screenshot03](/screenshot03.png)

## 安装

```bash
npm i @mcistudio/vue-colorpicker
```

## 使用方法

### 全局注册

```javascript
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";

createApp(App).use(ColorPicker).mount("#app");
```

### 局部注册

```vue
<script setup>
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";
</script>

<template>
  <ColorPicker v-model="color"></ColorPicker>
</template>
```

## Props 参数

| 参数名  | 描述           | 类型   | 可选值                     | 默认值   | 是否必填 |
| ------- | -------------- | ------ | -------------------------- | -------- | -------- |
| v-model | 颜色值对象     | Object | 见下方 v-model 格式说明    | -        | 否       |
| modebar | 模式栏显示状态 | String | 'show'、'none'             | 'show'   | 否       |
| size    | 组件尺寸       | String | 'small'、'medium'、'large' | 'medium' | 否       |

### v-model 格式说明

| 属性名    | 描述                             | 类型   | 可选值                      | 默认值                                                                                                               | 是否必填 |
| --------- | -------------------------------- | ------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| mode      | 颜色模式                         | String | 'solid'、'linear'、'radial' | 'solid'                                                                                                              | 否       |
| color     | RGBA 颜色对象（纯色模式）        | Object | \{ r, g, b, a \}            | \{ r: 0, g: 0, b: 0, a: 1 \}                                                                                         | 否       |
| hex       | 十六进制颜色值（纯色模式，只读） | String | -                           | -                                                                                                                    | 否       |
| degree    | 渐变角度（线性渐变模式）         | Number | 0-360                       | 90                                                                                                                   | 否       |
| gradients | 渐变节点数组                     | Array  | 渐变节点对象数组            | [\{ percent: 0, color: \{ r: 255, g: 255, b: 255, a: 1 \}\}, \{ percent: 100, color: \{ r: 0, g: 0, b: 0, a: 1 \}\}] | 否       |

## 事件

| 事件名称     | 描述           | 参数       |
| ------------ | -------------- | ---------- |
| colorChanged | 颜色变化时触发 | 颜色值对象 |

### 返回值示例

**纯色模式**

```json
{
  "mode": "solid",
  "color": {
    "r": 0,
    "g": 0,
    "b": 0,
    "a": 1
  },
  "hex": "#000000",
  "css": "background-color:rgba(0,0,0,1)"
}
```

**线性渐变模式**

```json
{
  "mode": "linear",
  "degree": 90,
  "gradients": [
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

**径向渐变模式**

```json
{
  "mode": "radial",
  "gradients": [
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
