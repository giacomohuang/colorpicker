<template>
  <div onselectstart="return false">
    <div class="cbtn" :class="props.size" @click="isShowPanel = !isShowPanel" ref="cbtnEl">
      <div class="cbtn-inner" :style="{ background: previewBackground }"></div>
    </div>

    <div class="panel" v-show="isShowPanel" ref="panelEl" @contextmenu.prevent="bindContext">
      <div class="active-mode-wrapper" :style="{ display: modebar }">
        <div title="solid" class="btn-active-mode solid" :class="activeMode === 'solid' ? '' : 'gray'" @click.stop="changeMode('solid')"></div>
        <div title="linear" class="btn-active-mode linear" :class="activeMode === 'linear' ? '' : 'gray'" @click.stop="changeMode('linear')"></div>
        <div title="radial" class="btn-active-mode radial" :class="activeMode === 'radial' ? '' : 'gray'" @click.stop="changeMode('radial')"></div>
      </div>
      <div class="grad-wrapper" :style="activeMode === 'solid' ? 'display:none' : ''">
        <div class="grad-bar" ref="gradBarEl" :style="{ backgroundImage: gradPreviewColor }" @click.stop="addGradPicker()">
          <div v-for="(item, index) in gradColors" :key="item.id" style="top: -1px" class="picker" :class="index == activeGradPickerIndex ? 'on' : ''" @click.stop="getGradPickerPos($event.target, index)" @mousedown.stop="bindDown($event.target, getGradPickerPos, index)"></div>
        </div>
        <div class="flex-row" :style="activeMode === 'linear' ? '' : 'visibility:hidden'">
          <div class="degree" ref="degreeEl" @click.stop="getDegreePickerPos" @mousedown.stop="bindDown($event, getDegreePickerPos)">
            <div class="picker-deg" ref="degreePickerEl" @mousedown.stop="bindDown($event, getDegreePickerPos)"></div>
          </div>
          <div style="font-size: 10px; width: 36px; padding-left: 8px; user-select: none">{{ degree }}°</div>
        </div>
      </div>
      <div class="palette-wrapper">
        <div class="palette" ref="paletteEl" @click.stop="getPalettePickerPos" @mousedown.stop="bindDown($event, getPalettePickerPos)">
          <div class="white"></div>
          <div class="black"></div>
          <div class="picker" ref="palettePickerEl" @mousedown.stop="bindDown($event, getPalettePickerPos)"></div>
        </div>
      </div>
      <div class="huebar-wrapper">
        <div class="dropper" @click="dropColor" style="cursor: pointer" :style="isDropperEnabled ? '' : 'opacity: 50%;cursor:default'"></div>
        <div class="bar-wrapper">
          <div class="hue-bar" ref="hueBarEl" @click.stop="getHuePickerPos" @mousedown.stop="bindDown($event, getHuePickerPos)">
            <div class="picker" ref="huePickerEl" style="top: -1px" @mousedown.stop="bindDown($event, getHuePickerPos)"></div>
          </div>
          <div class="opacity-bar" ref="opactiyBarEl" @click.stop="getOpacityPickerPos" @mousedown.stop="bindDown($event, getOpacityPickerPos)">
            <div class="picker" ref="opacityPickerEl" style="top: -1px" @click.stop="getOpacityPickerPos" @mousedown.stop="bindDown($event, getOpacityPickerPos)"></div>
          </div>
        </div>
        <div class="preview-wrapper"><div class="preview-color" :style="{ background: previewColor }"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'vue-colorpicker' }
</script>

<script setup>
import { ref, reactive, onMounted, nextTick, watch } from 'vue'

import Utils from './assets/js/Color'
import maskImgUrl from './assets/img/optmask.png'

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'solid'
  },
  degree: {
    type: Number,
    required: false,
    default: 90
  },
  size: {
    type: String,
    required: false,
    default: 'medium'
  },
  color: {
    type: Object,
    required: false,
    default() {
      return { r: 0, g: 0, b: 0, a: 1 }
    }
  },
  modebar: {
    type: String,
    required: false,
    default: ''
  },
  gradients: {
    type: Object,
    required: false,
    default() {
      return [
        { percent: 0, color: { r: 255, g: 255, b: 255, a: 1 } },
        { percent: 100, color: { r: 0, g: 0, b: 0, a: 1 } }
      ]
    }
  }
})

const emit = defineEmits(['colorChanged'])

// refs
const cbtnEl = ref(null)
const panelEl = ref(null)
const paletteEl = ref(null)
const palettePickerEl = ref(null)
const huePickerEl = ref(null)
const opacityPickerEl = ref(null)
const hueBarEl = ref(null)
const opactiyBarEl = ref(null)
const gradBarEl = ref(null)
const degreeEl = ref(null)
const degreePickerEl = ref(null)
const isShowPanel = ref(false)
const activeGradPickerIndex = ref(0)
const previewColor = ref('')
const previewBackground = ref('')
const gradPreviewColor = ref('')
const isDropperEnabled = ref(true)

const paletteColor = reactive(Utils.rgba2hsba(props.color))
const degree = ref(props.degree)
const modebar = ref(props.modebar)
const activeMode = ref(props.mode)

if (modebar.value == 'none') {
  activeMode.value = 'solid'
}

let g = []
const gradColors = ref(g)
props.gradients.forEach((item, index) => {
  g.push({ id: index, percent: item.percent, color: Utils.rgba2hsba(item.color) })
})
gradColors.value = g
if (g.length > 0) {
  gradColors.value[gradColors.value.length - 1].id
}
let isDragging = false
let paletteWidth = 216
let paletteHeight = 138
let barWidth = 150
let gradMaxId = 0
//Eye Dropper (only supports Google Chrome version 95 and above)
let eyeDropper = null
if ('EyeDropper' in window) {
  // eslint-disable-next-line no-undef
  eyeDropper = new EyeDropper()
} else {
  isDropperEnabled.value = false
  console.log('EyeDropper only supports Google Chrome version 95 and above')
}

onMounted(() => {
  changeMode(activeMode.value)
  updateGradColor()
  updatePreviews()
})

watch(paletteColor, () => {
  updateGradColor()
  updatePreviews()
})

watch(isShowPanel, () => {
  if (isShowPanel.value) {
    document.addEventListener('click', bindOutsideClick, true)
    document.addEventListener('keyup', bindKeyUp, false)
  } else {
    document.removeEventListener('click', bindOutsideClick, true)
    document.removeEventListener('keyup', bindKeyUp, false)
  }
})

function changeMode(mode) {
  activeMode.value = mode
  if (activeMode.value !== 'solid') {
    setGradPickerPos()
    setDegreeHanderPos()
    const c = gradColors.value[activeGradPickerIndex.value].color
    paletteColor.h = c.h
    paletteColor.s = c.s
    paletteColor.b = c.b
    paletteColor.a = c.a
  }
  setPickerPos()
  updateGradColor()
  updatePreviews()
}

async function dropColor() {
  if (!eyeDropper) {
    console.log('EyeDropper only supports Chrome Version 95+')
    return false
  }
  eyeDropper
    .open()
    .then((result) => {
      const c = Utils.hex2hsb(result.sRGBHex)
      paletteColor.h = c.h
      paletteColor.s = c.s
      paletteColor.b = c.b
      paletteColor.a = c.a
      setPickerPos()
    })
    .catch((error) => {
      console.log(error)
    })
}

function bindContext() {
  //prevent context menu
  return false
}

function bindKeyUp(evt) {
  if (evt.keyCode == 27) {
    isShowPanel.value = false
  } else if (evt.keyCode == 32 || evt.keyCode == 8) {
    delGradPicker()
  }
}

//get HTML element's client position
function getBounding(el) {
  let Box = el.getBoundingClientRect(),
    doc = el.ownerDocument,
    body = doc.body,
    html = doc.documentElement,
    clientTop = html.clientTop || body.clientTop || 0,
    clientLeft = html.clientLeft || body.clientLeft || 0,
    top = Box.top + (self.scrollY || html.scrollTop || body.scrollTop) - clientTop,
    left = Box.left + (self.scrollX || html.scrollLeft || body.scrollLeft) - clientLeft
  return { top: top, left: left }
}

function getMousePos() {
  let x = 0,
    y = 0
  let e = window.event
  if (e.pageX) {
    x = e.pageX
    y = e.pageY
  } else {
    x = e.clientX + document.body.scrollLeft - document.body.clientLeft
    y = e.clientY + document.body.scrollTop - document.body.clientTop
  }
  return { x: x, y: y }
}

function bindOutsideClick() {
  if (isDragging) {
    isDragging = false
    return false
  }
  if (!isInObject(panelEl.value) && !isInObject(cbtnEl.value)) {
    isShowPanel.value = false
  }
  function isInObject(el) {
    const elPos = getBounding(el)
    const mousePos = getMousePos()
    if (mousePos.x > elPos.left + el.offsetWidth || mousePos.x < elPos.left || mousePos.y > elPos.top + el.offsetHeight || mousePos.y < elPos.top) {
      return false
    } else {
      return true
    }
  }
}

function bindDown(el, fnMove, index) {
  document.addEventListener('mousemove', bindMove, false)
  document.addEventListener('mouseup', bindUp, false)

  function bindMove() {
    isDragging = true
    fnMove(el, index)
  }
  function bindUp() {
    document.removeEventListener('mousemove', bindMove)
    document.removeEventListener('mouseup', bindUp)
  }
}

function addGradPicker() {
  if (gradColors.value.length < 10) {
    const c = JSON.parse(JSON.stringify(gradColors.value[activeGradPickerIndex.value]))
    c.id = gradMaxId++
    gradColors.value.push(c)
    activeGradPickerIndex.value = gradColors.value.length - 1
    nextTick(() => getGradPickerPos(gradBarEl.value.children[activeGradPickerIndex.value], activeGradPickerIndex.value))
  }
}

function delGradPicker() {
  if (gradColors.value.length > 2) {
    gradColors.value.splice(activeGradPickerIndex.value, 1)
    activeGradPickerIndex.value = gradColors.value.length - 1
    nextTick(() => updatePreviews())
  }
}

function getGradPickerPos(el, index) {
  const elPos = getBounding(gradBarEl.value)
  const mousePos = getMousePos()
  let left = Math.max(-3, Math.min(barWidth - 12, mousePos.x - elPos.left - 6))
  el.style.left = left + 'px'
  gradColors.value[index].percent = ((left + 3) / (barWidth - 9)) * 100
  activeGradPickerIndex.value = index
  const c = gradColors.value[index].color
  paletteColor.h = c.h
  paletteColor.s = c.s
  paletteColor.b = c.b
  paletteColor.a = c.a
  setPickerPos()
  updateGradColor()
  updatePreviews()
}

function setGradPickerPos() {
  gradColors.value.forEach((item, index) => {
    gradBarEl.value.children[index].style.left = ((barWidth - 9) / 100) * item.percent - 3 + 'px'
  })
}

function updateGradColor() {
  if (activeMode.value !== 'solid') {
    gradColors.value[activeGradPickerIndex.value].color.a = paletteColor.a
    gradColors.value[activeGradPickerIndex.value].color.h = paletteColor.h
    gradColors.value[activeGradPickerIndex.value].color.s = paletteColor.s
    gradColors.value[activeGradPickerIndex.value].color.b = paletteColor.b
  }
}

function updatePreviews() {
  const c1 = Utils.hsb2rgb(paletteColor)
  previewColor.value = `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${c1.a})`
  previewBackground.value = previewColor.value
  let gradStr = ''
  let gradStyleStr = ''
  let g = [...gradColors.value]
  let gradArr = []
  // sort by percent
  g.sort((a, b) => {
    return a.percent - b.percent
  })
  g.forEach((item) => {
    gradStr += ',' + Utils.hsba2rgba(item.color) + ' ' + item.percent + '%'
    gradArr.push({ percent: item.percent, color: Utils.hsb2rgb(item.color) })
  })

  const emitVal = {}
  emitVal.mode = activeMode.value
  switch (activeMode.value) {
    case 'solid':
      emitVal.color = Utils.hsb2rgb(paletteColor)
      emitVal.css = `background-color:${Utils.hsba2rgba(paletteColor)}`
      break
    case 'linear':
      gradPreviewColor.value = `linear-gradient(to right,${gradStr.slice(1)}),url('${maskImgUrl}')`
      previewBackground.value = `linear-gradient(${degree.value}deg${gradStr}),url('${maskImgUrl}')`
      gradStyleStr = `background-image:linear-gradient(${degree.value}deg${gradStr})`
      emitVal.degree = degree.value
      emitVal.color = gradArr
      emitVal.css = gradStyleStr
      break
    case 'radial':
      gradPreviewColor.value = `linear-gradient(to right,${gradStr.slice(1)}),url('${maskImgUrl}')`
      previewBackground.value = `radial-gradient(${gradStr.slice(1)}),url('${maskImgUrl}')`
      gradStyleStr = `background-image:radial-gradient(${gradStr.slice(1)})`
      emitVal.color = gradArr
      emitVal.css = gradStyleStr
      break
  }
  emit('colorChanged', emitVal)
}

function getDegreePickerPos() {
  const r = 10
  const bar_r = 4
  const elPos = getBounding(degreeEl.value)
  const mousePos = getMousePos()
  const rad = Math.atan2(elPos.top + r - mousePos.y, mousePos.x - elPos.left - r)
  degreePickerEl.value.style.left = Math.cos(rad) * r + bar_r + 1 + 'px'
  degreePickerEl.value.style.top = -Math.sin(rad) * r + bar_r + 1 + 'px'
  let deg = 90 - Math.floor((rad * 180) / Math.PI)
  if (deg < 0) {
    deg += 360
  }
  degree.value = deg
  updateGradColor()
  updatePreviews()
}

function setDegreeHanderPos() {
  const r = 10
  const bar_r = 4
  let deg = degree.value
  if (deg - 360 < 0) {
    deg -= 360
  }
  const rad = -(deg - 90) * (Math.PI / 180)
  degreePickerEl.value.style.left = Math.cos(rad) * r + bar_r + 1 + 'px'
  degreePickerEl.value.style.top = -Math.sin(rad) * r + bar_r + 1 + 'px'
}

function getPalettePickerPos() {
  const elPos = getBounding(paletteEl.value)
  const mousePos = getMousePos()
  const left = Math.max(-6, Math.min(mousePos.x - elPos.left - 6, paletteWidth - 6))
  const top = Math.max(-6, Math.min(mousePos.y - elPos.top - 6, paletteHeight - 6))
  palettePickerEl.value.style.left = left + 'px'
  palettePickerEl.value.style.top = top + 'px'
  paletteColor.s = (100 * (left + 6)) / paletteWidth
  paletteColor.b = (100 * (paletteHeight - top - 6)) / paletteHeight
}

function getHuePickerPos() {
  const elPos = getBounding(hueBarEl.value)
  const mousePos = getMousePos()
  const left = Math.max(-3, Math.min(mousePos.x - elPos.left - 6, barWidth - 12))
  huePickerEl.value.style.left = left + 'px'
  paletteColor.h = (360 * (left + 3)) / (barWidth - 9)
  const c = Utils.hsb2rgb({ h: paletteColor.h, s: 100, b: 100, a: paletteColor.a })
  paletteEl.value.style.background = `rgb(${c.r},${c.g},${c.b},1)`
}

function getOpacityPickerPos() {
  const elPos = getBounding(opactiyBarEl.value)
  const mousePos = getMousePos()
  const left = Math.max(-3, Math.min(barWidth - 12, mousePos.x - elPos.left - 6))
  opacityPickerEl.value.style.left = left + 'px'
  paletteColor.a = (left + 3) / (barWidth - 9)
}

function setPickerPos() {
  const c = Utils.hsb2rgb({ h: paletteColor.h, s: 100, b: 100, a: paletteColor.a })
  paletteEl.value.style.background = `rgb(${c.r},${c.g},${c.b},1)`
  palettePickerEl.value.style.left = (paletteWidth / 100) * paletteColor.s - 6 + 'px'
  palettePickerEl.value.style.top = paletteHeight - (paletteHeight / 100) * paletteColor.b - 6 + 'px'
  huePickerEl.value.style.left = ((barWidth - 9) / 360) * paletteColor.h - 3 + 'px'
  opacityPickerEl.value.style.left = (barWidth - 9) * paletteColor.a - 3 + 'px'
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}
</style>
<style lang="scss" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cbtn {
  border: 1px solid #dcdfe6;
  background: #ffffff;
}

.small {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  padding: 3px;
}
.medium {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  padding: 4px;
}

.large {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  padding: 5px;
}

.cbtn-inner {
  background: #dcdfe6;
  width: 100%;
  height: 100%;
}

.panel {
  position: absolute;
  background: #fff;
  margin-top: 6px;
  width: 240px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  z-index: 1000;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -6px;
    left: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #dcdfe6;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
  }
}
.active-mode-wrapper {
  border-bottom: 1px solid #dcdfe6;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
}
.btn-active-mode {
  border: 1px solid #ff7d3a;
  margin-right: 12px;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  cursor: pointer;
  &.solid {
    background: #ffc9b6;
    &.gray {
      border: 1px solid #7d7d7d;
      background: #e2e2e2;
    }
  }
  &.linear {
    background: linear-gradient(180deg, #ffc9b6, #ff5011);
    &.gray {
      border: 1px solid #7d7d7d;
      background: linear-gradient(180deg, #ffffff, #999999);
    }
  }
  &.radial {
    background-image: radial-gradient(circle, #ffc9b6, #ff5011);
    &.gray {
      border: 1px solid #7d7d7d;
      background: radial-gradient(circle, #ffffff, #999999);
    }
  }
}
.palette-wrapper {
  margin: 10px;
  height: 140px;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.palette {
  position: absolute;
  overflow: hidden;
  inset: 0px;
  border-radius: 4px;
  background: rgb(255, 0, 0);
  .white {
    position: absolute;
    inset: 0px;
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  }
  .black {
    position: absolute;
    inset: 0px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
}

.picker {
  position: absolute;
  width: 14px;
  height: 14px;
  top: -4px;
  left: -4px;
  &::before {
    content: '';
    top: 3px;
    left: 3px;
    position: absolute;
    width: 6px;
    height: 6px;
    display: block;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 1px #979797, 0 0 0 3px #fff, 0 0 0 4px #979797;
    border-radius: 50%;
    cursor: default;
  }
  &.on::before {
    box-shadow: 0 0 0 1px #979797, 0 0 0 3px #f50, 0 0 0 4px #979797;
  }
}
.dropper {
  width: 25px;
  height: 30px;
  background: url('./assets/img/dropper@2x.png') center center no-repeat;
  background-size: 25px;
}
.grad-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 0 10px;
  .grad-bar {
    border: 1px solid #aaaaaa;
    border-radius: 8px;
    height: 12px;
    width: 150px;
    background-image: url('./assets/img/optmask.png');
    background-size: auto 100%;
    display: absolute;
  }
}

.degree {
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.picker-deg {
  position: absolute;
  display: inline-block;
  z-index: 1;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  width: 8px;
  height: 8px;
  background: #cccccc;
  &:hover,
  &:active {
    background: #999999;
  }
}

.huebar-wrapper {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .bar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30px;
  }
  .hue-bar,
  .opacity-bar {
    border: 1px solid #aaaaaa;
    border-radius: 8px;
    width: 150px;
    height: 12px;
  }
  .hue-bar {
    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
  .opacity-bar {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%), url('./assets/img/optmask.png');
    background-size: auto 100%;
  }
}
.preview-wrapper {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #aaaaaa;
  background-image: url('./assets/img/optmask.png');
  background-size: 50% 50%;
}
.preview-color {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
</style>
