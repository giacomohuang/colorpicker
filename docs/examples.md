<script setup>
import { useData } from 'vitepress'
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const g = ref()
function changed(color) {
  console.log('color changed', color)
}
</script>


# Examples
## Size

- **small** 
<ColorPicker mode="solid" size="small" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />

```vue
<template>
  <ColorPicker mode="solid" size="small" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
function changed(color) {
  console.log('changed', color)
}
```

- **medium** 
<ColorPicker mode="solid" size="medium" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />

```vue
<template>
  <ColorPicker mode="solid" size="medium" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import imgUrl from './assets/logo.png'
function changed(color) {
  console.log('changed', color)
}
```

- **large** 
<ColorPicker mode="solid" size="large" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />

```vue
<template>
  <ColorPicker mode="solid" size="large" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
function changed(color) {
  console.log('changed', color)
}
```

## Mode

- **solid** 
<ColorPicker mode="solid" size="medium" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />

```vue
<template>
  <ColorPicker mode="solid" size="medium" :color="{ r: 33, g: 137, b: 216, a: 1 }" @colorChanged="changed" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
function changed(color) {
  console.log('changed', color)
}
```

- **linear** 

<ColorPicker mode="linear" :degree="180" size="medium" :gradients="[{ id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 0.5 } },{ id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }]" @colorChanged="changed" />

```vue
<template>
  <ColorPicker 
    mode="linear"
    :degree="180"
    size="medium"
    :gradients="[{ id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 0.5 } },{ id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }]"
    @colorChanged="changed" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
function changed(color) {
  console.log('changed', color)
}

```

- **radial** 

<ColorPicker mode="radial" size="medium" :gradients="[{ id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 1 } },{ id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }]" @colorChanged="changed" />

```vue
<template>
  <ColorPicker 
    mode="radial"
    size="medium"
    :gradients="[{ id: 0, percent: 10, color: { r: 255, g: 10, b: 20, a: 1 } },{ id: 1, percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }]"
    @colorChanged="changed" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
function changed(color) {
  console.log('changed', color)
}

```