# Guides

## Overview
- Supports 3 CSS background color modes: `solid`, `linear-gradient` and `radial-gradient`.
- Supports color opacity(alpha) adjustment.
- Supports gradient bar control, easily drag/add/delete the control points.
- The EyeDropper can quickly pick any color from your screen. （supports Google Chrome version 95+）
- Supports live preview.

![screenshot01](/screenshot01.png)
![screenshot02](/screenshot02.png)
![screenshot03](/screenshot03.png)

## Installation

```bash
npm i @mcistudio/vue-colorpicker
```

## How to Use

- **Global Registration**

```javascript
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/style.css'
createApp(App)
  .use(ColorPicker)
  .mount("#app");
```
- **Local Registration**
```vue
<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'

<template>
  <ColorPicker></ColorPicker>
</template>
</script>
```

## Props
| Prop Name | Description                         | Type       | Accepted Value                         | Default Value                                                | Required |
| --------- | ----------------------------------- | ---------- | --------------------------------------- | ------------------------------------------------------------ | -------- |
| mode      | color mode                          | String     | solid<br />linear<br />radial<br /> | solid                                                        | No       |
| degree    | drgee value in Linear-gradient mode | Number     | -                                       | 90                                                           | No       |
| modebar   | show mode bar | String | show<br/>none | show | No |
| size      | button size | String | small<br/>medium<br />large | medium | No |
| color     | rgba color value in solid mode      | String     | -                                       | \{ r: 0, g: 0, b: 0, a: 1 \}                                   | No       |
| gradients | gradient list<br />                 | JSON Array | -                                       | [<br />  { <br />    percent: 0, <br />    color: { r: 255, g: 255, b: 255, a: 1 }<br />   }<br />   { <br />    percent: 100, <br />    color: { r: 0, g: 0, b: 0, a: 1 } <br />  }<br />]``` | No       |

## Events
| event Name   | Description | Parameters |
| ------------ | ----------- | ---------- |
| colorChanged | triggered when the color is changed | returnValue|

###### `returnValue` examples:

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
    "css": "background-color:rgba(0,0,0,1)"
}
```

**Linear Mode**
```json
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
```json
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