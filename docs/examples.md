<script setup>
import { useData } from 'vitepress'
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'

const data1 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})
const data2 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})
const data3 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})
const data4 = ref({mode:'solid',color:{ r: 33, g: 137, b: 216, a: 1 }})
const data5 = ref({
  mode: 'linear',
  degree: 90,
  gradients: [
    { percent: 10, color: { r: 255, g: 10, b: 20, a: 0.5 } },
    { percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }
  ]
})
const data6 = ref({
  mode: 'radial',
  gradients: [
    { percent: 10, color: { r: 255, g: 10, b: 20, a: 0.5 } },
    { percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }
  ]
})
const data7 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})

function changed(color) {
  console.log('color changed', color)
}
</script>

# Examples
## size

- **small**
<ClientOnly>
<ColorPicker v-model="data1" size="small" />
</ClientOnly>

```vue
<template>
  <ColorPicker v-model="data1" size="small" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const data1 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})
</script>
```

- **medium**
<ClientOnly>
<ColorPicker v-model="data2" size="medium" />
</ClientOnly>

```vue
<template>
  <ColorPicker v-model="data2" size="medium" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const data2 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})
</script>
```

- **large** 
<ClientOnly>
<ColorPicker v-model="data3" size="large" />
</ClientOnly>

```vue
<template>
  <ColorPicker v-model="data3" size="large" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const data3 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})
</script>
```

## mode

- **solid** 
<ClientOnly> 
<ColorPicker v-model="data4" />
</ClientOnly>

```vue
<template>
  <ColorPicker v-model="data4" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const data4 = ref({mode:'solid',color:{ r: 33, g: 137, b: 216, a: 1 }})
</script>
```

- **linear** 
<ClientOnly>
<ColorPicker v-model="data5" />
</ClientOnly>

```vue
<template>
  <ColorPicker v-model="data5" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const data5 = ref({
  mode: 'linear',
  degree: 90,
  gradients: [
    { percent: 10, color: { r: 255, g: 10, b: 20, a: 0.5 } },
    { percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }
  ]
})
</script>


```

- **radial** 
<ClientOnly>
<ColorPicker v-model="data6" />
</ClientOnly>

```vue
<template>
  <ColorPicker v-model="data6" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const data6 = ref({
  mode: 'radial',
  gradients: [
    { percent: 10, color: { r: 255, g: 10, b: 20, a: 0.5 } },
    { percent: 100, color: { r: 59, g: 50, b: 240, a: 1 } }
  ]
})
</script>
```

## modebar

<ClientOnly>
<ColorPicker v-model="data7" modebar="none" />
</ClientOnly>

```vue
<template>
  <ColorPicker v-model="data7" modebar="none" />
</template>

<script setup>
import ColorPicker from '@mcistudio/vue-colorpicker'
import '@mcistudio/vue-colorpicker/dist/style.css'
import { ref } from 'vue'
const data7 = ref({color:{ r: 33, g: 137, b: 216, a: 1 }})
</script>
```