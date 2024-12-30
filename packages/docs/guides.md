# Guides

## Overview

Vue Colorpicker is a powerful color selection component that offers:

- Three CSS background color modes: `solid`, `linear-gradient`, and `radial-gradient`
- Full HSV color space support with alpha channel control
- Interactive gradient control with drag-and-drop color stops
- Built-in EyeDropper API integration (Chrome 95+)
- Real-time preview with CSS output
- Responsive design with three size options

![screenshot01](/screenshot01.png)
![screenshot02](/screenshot02.png)
![screenshot03](/screenshot03.png)

## Installation

```bash
npm i @mcistudio/vue-colorpicker
```

## Usage

### Global Registration

```javascript
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";

createApp(App).use(ColorPicker).mount("#app");
```

### Local Registration

```vue
<script setup>
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";
</script>

<template>
  <ColorPicker v-model="color"></ColorPicker>
</template>
```

## Props

| Prop Name | Description         | Type   | Accepted Values            | Default  | Required |
| --------- | ------------------- | ------ | -------------------------- | -------- | -------- |
| v-model   | Color value object  | Object | See v-model format below   | -        | No       |
| modebar   | Mode bar visibility | String | 'show', 'none'             | 'show'   | No       |
| size      | Component size      | String | 'small', 'medium', 'large' | 'medium' | No       |

### v-model Format

| Property  | Description                             | Type   | Accepted Values                | Default                                                                                                              | Required |
| --------- | --------------------------------------- | ------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | -------- |
| mode      | Color mode                              | String | 'solid', 'linear', 'radial'    | 'solid'                                                                                                              | No       |
| color     | RGBA color object (solid mode)          | Object | \{ r, g, b, a \}               | \{ r: 0, g: 0, b: 0, a: 1 \}                                                                                         | No       |
| hex       | Hex color value (solid mode, read-only) | String | -                              | -                                                                                                                    | No       |
| degree    | Gradient angle (linear mode)            | Number | 0-360                          | 90                                                                                                                   | No       |
| gradients | Gradient stops array                    | Array  | Array of gradient stop objects | [\{ percent: 0, color: \{ r: 255, g: 255, b: 255, a: 1 \}\}, \{ percent: 100, color: \{ r: 0, g: 0, b: 0, a: 1 \}\}] | No       |

## Events

| Event Name   | Description                | Parameters         |
| ------------ | -------------------------- | ------------------ |
| colorChanged | Triggered on color changes | Color value object |

### Return Value Examples

**Solid Mode**

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

**Linear Mode**

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

**Radial Mode**

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
