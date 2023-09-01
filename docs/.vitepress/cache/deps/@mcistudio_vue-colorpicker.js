import {
  Fragment,
  createBaseVNode,
  createElementBlock,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  ref,
  renderList,
  toDisplayString,
  vShow,
  watch,
  withDirectives,
  withModifiers
} from "./chunk-IMLQGPPH.js";

// docs/node_modules/@mcistudio/vue-colorpicker/dist/colorpicker.es.js
var Utils = {
  hsb2rgb(hsb) {
    var rgb = {};
    var h = Math.round(hsb.h);
    var s = Math.round(hsb.s * 255 / 100);
    var v = Math.round(hsb.b * 255 / 100);
    if (s == 0) {
      rgb.r = rgb.g = rgb.b = v;
    } else {
      var t1 = v;
      var t2 = (255 - s) * v / 255;
      var t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360)
        h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b), a: hsb.a };
  },
  hsba2rgba(hsba) {
    const c = this.hsb2rgb(hsba);
    return `rgba(${c.r},${c.g},${c.b},${c.a})`;
  },
  rgb2hex(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    hex.map(function(str, i) {
      if (str.length == 1) {
        hex[i] = "0" + str;
      }
    });
    return hex.join("");
  },
  hex2rgb(hex) {
    let h = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
    return { r: h >> 16, g: (h & 65280) >> 8, b: h & 255 };
  },
  hex2hsb(hex) {
    const rgba = this.hex2rgb(hex);
    rgba.a = 1;
    return this.rgba2hsba(rgba);
  },
  rgba2hsba(rgba) {
    var hsba = { h: 0, s: 0, b: 0, a: rgba.a };
    var min = Math.min(rgba.r, rgba.g, rgba.b);
    var max = Math.max(rgba.r, rgba.g, rgba.b);
    var delta = max - min;
    hsba.b = max;
    hsba.s = max != 0 ? 255 * delta / max : 0;
    if (hsba.s != 0) {
      if (rgba.r == max)
        hsba.h = (rgba.g - rgba.b) / delta;
      else if (rgba.g == max)
        hsba.h = 2 + (rgba.b - rgba.r) / delta;
      else
        hsba.h = 4 + (rgba.r - rgba.g) / delta;
    } else
      hsba.h = -1;
    hsba.h *= 60;
    if (hsba.h < 0)
      hsba.h += 360;
    hsba.s *= 100 / 255;
    hsba.b *= 100 / 255;
    return hsba;
  }
};
var maskImgUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAAAM0lEQVQ4EWM8cuTIfwY8wMbGhhGPNAMTPkli5EYNYBgEgYg3jkHRSCidjEbjYIhGimMBAKIWB2rXs92IAAAAAElFTkSuQmCC";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _withScopeId = (n) => (pushScopeId("data-v-58b8afd3"), n = n(), popScopeId(), n);
var _hoisted_1 = {
  onselectstart: "return false",
  style: { "position": "relative" }
};
var _hoisted_2 = ["onContextmenu"];
var _hoisted_3 = ["onClick", "onMousedown"];
var _hoisted_4 = ["onClick"];
var _hoisted_5 = { style: { "font-size": "10px", "width": "32px", "padding-left": "8px", "user-select": "none" } };
var _hoisted_6 = { class: "palette-wrapper" };
var _hoisted_7 = ["onClick"];
var _hoisted_8 = _withScopeId(() => createBaseVNode("div", { class: "white" }, null, -1));
var _hoisted_9 = _withScopeId(() => createBaseVNode("div", { class: "black" }, null, -1));
var _hoisted_10 = { class: "huebar-wrapper" };
var _hoisted_11 = { class: "bar-wrapper" };
var _hoisted_12 = ["onClick"];
var _hoisted_13 = ["onClick"];
var _hoisted_14 = ["onClick"];
var _hoisted_15 = { class: "preview-wrapper" };
var __default__ = { name: "vue-colorpicker" };
var _sfc_main = Object.assign(__default__, {
  props: {
    mode: {
      type: String,
      required: false,
      default: "solid"
    },
    degree: {
      type: Number,
      required: false,
      default: 90
    },
    size: {
      type: String,
      required: false,
      default: "medium"
    },
    color: {
      type: Object,
      required: false,
      default() {
        return { r: 0, g: 0, b: 0, a: 1 };
      }
    },
    modebar: {
      type: String,
      required: false,
      default: ""
    },
    gradients: {
      type: Object,
      required: false,
      default() {
        return [
          { percent: 0, color: { r: 255, g: 255, b: 255, a: 1 } },
          { percent: 100, color: { r: 0, g: 0, b: 0, a: 1 } }
        ];
      }
    }
  },
  emits: ["colorChanged"],
  setup(__props, { emit }) {
    const props = __props;
    const cbtnEl = ref(null);
    const panelEl = ref(null);
    const paletteEl = ref(null);
    const palettePickerEl = ref(null);
    const huePickerEl = ref(null);
    const opacityPickerEl = ref(null);
    const hueBarEl = ref(null);
    const opactiyBarEl = ref(null);
    const gradBarEl = ref(null);
    const degreeEl = ref(null);
    const degreePickerEl = ref(null);
    const isShowPanel = ref(false);
    const activeGradPickerIndex = ref(0);
    const previewColor = ref("");
    const previewBackground = ref("");
    const gradPreviewColor = ref("");
    const isDropperEnabled = ref(true);
    const paletteColor = reactive(Utils.rgba2hsba(props.color));
    const degree = ref(props.degree);
    const modebar = ref(props.modebar);
    const activeMode = ref(props.mode);
    if (modebar.value == "none") {
      activeMode.value = "solid";
    }
    let g = [];
    const gradColors = ref(g);
    props.gradients.forEach((item, index) => {
      g.push({ id: index, percent: item.percent, color: Utils.rgba2hsba(item.color) });
    });
    gradColors.value = g;
    if (g.length > 0) {
      gradColors.value[gradColors.value.length - 1].id;
    }
    let isDragging = false;
    let paletteWidth = 216;
    let paletteHeight = 138;
    let barWidth = 150;
    let gradMaxId = 0;
    let eyeDropper = null;
    if ("EyeDropper" in window) {
      eyeDropper = new EyeDropper();
    } else {
      isDropperEnabled.value = false;
      console.log("EyeDropper only supports Google Chrome version 95 and above");
    }
    onMounted(() => {
      changeMode(activeMode.value);
      updateGradColor();
      updatePreviews();
    });
    watch(paletteColor, () => {
      updateGradColor();
      updatePreviews();
    });
    watch(isShowPanel, () => {
      if (isShowPanel.value) {
        document.addEventListener("click", bindOutsideClick, true);
        document.addEventListener("keyup", bindKeyUp, false);
      } else {
        document.removeEventListener("click", bindOutsideClick, true);
        document.removeEventListener("keyup", bindKeyUp, false);
      }
    });
    function changeMode(mode) {
      activeMode.value = mode;
      if (activeMode.value !== "solid") {
        setGradPickerPos();
        setDegreeHanderPos();
        const c = gradColors.value[activeGradPickerIndex.value].color;
        paletteColor.h = c.h;
        paletteColor.s = c.s;
        paletteColor.b = c.b;
        paletteColor.a = c.a;
      }
      setPickerPos();
      updateGradColor();
      updatePreviews();
    }
    async function dropColor() {
      if (!eyeDropper) {
        console.log("EyeDropper only supports Chrome Version 95+");
        return false;
      }
      eyeDropper.open().then((result) => {
        const c = Utils.hex2hsb(result.sRGBHex);
        paletteColor.h = c.h;
        paletteColor.s = c.s;
        paletteColor.b = c.b;
        paletteColor.a = c.a;
        setPickerPos();
      }).catch((error) => {
        console.log(error);
      });
    }
    function bindContext() {
      return false;
    }
    function bindKeyUp(evt) {
      if (evt.keyCode == 27) {
        isShowPanel.value = false;
      } else if (evt.keyCode == 32 || evt.keyCode == 8) {
        delGradPicker();
      }
    }
    function getBounding(el) {
      let Box = el.getBoundingClientRect(), doc = el.ownerDocument, body = doc.body, html = doc.documentElement, clientTop = html.clientTop || body.clientTop || 0, clientLeft = html.clientLeft || body.clientLeft || 0, top = Box.top + (self.scrollY || html.scrollTop || body.scrollTop) - clientTop, left = Box.left + (self.scrollX || html.scrollLeft || body.scrollLeft) - clientLeft;
      return { top, left };
    }
    function getMousePos() {
      let x = 0, y = 0;
      let e = window.event;
      if (e.pageX) {
        x = e.pageX;
        y = e.pageY;
      } else {
        x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
        y = e.clientY + document.body.scrollTop - document.body.clientTop;
      }
      return { x, y };
    }
    function bindOutsideClick() {
      if (isDragging) {
        isDragging = false;
        return false;
      }
      if (!isInObject(panelEl.value) && !isInObject(cbtnEl.value)) {
        isShowPanel.value = false;
      }
      function isInObject(el) {
        const elPos = getBounding(el);
        const mousePos = getMousePos();
        if (mousePos.x > elPos.left + el.offsetWidth || mousePos.x < elPos.left || mousePos.y > elPos.top + el.offsetHeight || mousePos.y < elPos.top) {
          return false;
        } else {
          return true;
        }
      }
    }
    function bindDown(el, fnMove, index) {
      document.addEventListener("mousemove", bindMove, false);
      document.addEventListener("mouseup", bindUp, false);
      function bindMove() {
        isDragging = true;
        fnMove(el, index);
      }
      function bindUp() {
        document.removeEventListener("mousemove", bindMove);
        document.removeEventListener("mouseup", bindUp);
      }
    }
    function addGradPicker() {
      if (gradColors.value.length < 10) {
        const c = JSON.parse(JSON.stringify(gradColors.value[activeGradPickerIndex.value]));
        c.id = gradMaxId++;
        gradColors.value.push(c);
        activeGradPickerIndex.value = gradColors.value.length - 1;
        nextTick(() => getGradPickerPos(gradBarEl.value.children[activeGradPickerIndex.value], activeGradPickerIndex.value));
      }
    }
    function delGradPicker() {
      if (gradColors.value.length > 2) {
        gradColors.value.splice(activeGradPickerIndex.value, 1);
        activeGradPickerIndex.value = gradColors.value.length - 1;
        nextTick(() => updatePreviews());
      }
    }
    function getGradPickerPos(el, index) {
      const elPos = getBounding(gradBarEl.value);
      const mousePos = getMousePos();
      let left = Math.max(-3, Math.min(barWidth - 12, mousePos.x - elPos.left - 6));
      el.style.left = left + "px";
      gradColors.value[index].percent = (left + 3) / (barWidth - 9) * 100;
      activeGradPickerIndex.value = index;
      const c = gradColors.value[index].color;
      paletteColor.h = c.h;
      paletteColor.s = c.s;
      paletteColor.b = c.b;
      paletteColor.a = c.a;
      setPickerPos();
      updateGradColor();
      updatePreviews();
    }
    function setGradPickerPos() {
      gradColors.value.forEach((item, index) => {
        gradBarEl.value.children[index].style.left = (barWidth - 9) / 100 * item.percent - 3 + "px";
      });
    }
    function updateGradColor() {
      if (activeMode.value !== "solid") {
        gradColors.value[activeGradPickerIndex.value].color.a = paletteColor.a;
        gradColors.value[activeGradPickerIndex.value].color.h = paletteColor.h;
        gradColors.value[activeGradPickerIndex.value].color.s = paletteColor.s;
        gradColors.value[activeGradPickerIndex.value].color.b = paletteColor.b;
      }
    }
    function updatePreviews() {
      const c1 = Utils.hsb2rgb(paletteColor);
      previewColor.value = `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${c1.a})`;
      previewBackground.value = previewColor.value;
      let gradStr = "";
      let gradStyleStr = "";
      let g2 = [...gradColors.value];
      let gradArr = [];
      g2.sort((a, b) => {
        return a.percent - b.percent;
      });
      g2.forEach((item) => {
        gradStr += "," + Utils.hsba2rgba(item.color) + " " + item.percent + "%";
        gradArr.push({ percent: item.percent, color: Utils.hsb2rgb(item.color) });
      });
      const emitVal = {};
      emitVal.mode = activeMode.value;
      switch (activeMode.value) {
        case "solid":
          emitVal.color = Utils.hsb2rgb(paletteColor);
          emitVal.css = `background-color:${Utils.hsba2rgba(paletteColor)}`;
          break;
        case "linear":
          gradPreviewColor.value = `linear-gradient(to right,${gradStr.slice(1)}),url('${maskImgUrl}')`;
          previewBackground.value = `linear-gradient(${degree.value}deg${gradStr}),url('${maskImgUrl}')`;
          gradStyleStr = `background-image:linear-gradient(${degree.value}deg${gradStr})`;
          emitVal.degree = degree.value;
          emitVal.color = gradArr;
          emitVal.css = gradStyleStr;
          break;
        case "radial":
          gradPreviewColor.value = `linear-gradient(to right,${gradStr.slice(1)}),url('${maskImgUrl}')`;
          previewBackground.value = `radial-gradient(${gradStr.slice(1)}),url('${maskImgUrl}')`;
          gradStyleStr = `background-image:radial-gradient(${gradStr.slice(1)})`;
          emitVal.color = gradArr;
          emitVal.css = gradStyleStr;
          break;
      }
      emit("colorChanged", emitVal);
    }
    function getDegreePickerPos() {
      const r = 10;
      const bar_r = 4;
      const elPos = getBounding(degreeEl.value);
      const mousePos = getMousePos();
      const rad = Math.atan2(elPos.top + r - mousePos.y, mousePos.x - elPos.left - r);
      degreePickerEl.value.style.left = Math.cos(rad) * r + bar_r + 1 + "px";
      degreePickerEl.value.style.top = -Math.sin(rad) * r + bar_r + 1 + "px";
      let deg = 90 - Math.floor(rad * 180 / Math.PI);
      if (deg < 0) {
        deg += 360;
      }
      degree.value = deg;
      updateGradColor();
      updatePreviews();
    }
    function setDegreeHanderPos() {
      const r = 10;
      const bar_r = 4;
      let deg = degree.value;
      if (deg - 360 < 0) {
        deg -= 360;
      }
      const rad = -(deg - 90) * (Math.PI / 180);
      degreePickerEl.value.style.left = Math.cos(rad) * r + bar_r + 1 + "px";
      degreePickerEl.value.style.top = -Math.sin(rad) * r + bar_r + 1 + "px";
    }
    function getPalettePickerPos() {
      const elPos = getBounding(paletteEl.value);
      const mousePos = getMousePos();
      const left = Math.max(-6, Math.min(mousePos.x - elPos.left - 6, paletteWidth - 6));
      const top = Math.max(-6, Math.min(mousePos.y - elPos.top - 6, paletteHeight - 6));
      palettePickerEl.value.style.left = left + "px";
      palettePickerEl.value.style.top = top + "px";
      paletteColor.s = 100 * (left + 6) / paletteWidth;
      paletteColor.b = 100 * (paletteHeight - top - 6) / paletteHeight;
    }
    function getHuePickerPos() {
      const elPos = getBounding(hueBarEl.value);
      const mousePos = getMousePos();
      const left = Math.max(-3, Math.min(mousePos.x - elPos.left - 6, barWidth - 12));
      huePickerEl.value.style.left = left + "px";
      paletteColor.h = 360 * (left + 3) / (barWidth - 9);
      const c = Utils.hsb2rgb({ h: paletteColor.h, s: 100, b: 100, a: paletteColor.a });
      paletteEl.value.style.background = `rgb(${c.r},${c.g},${c.b},1)`;
    }
    function getOpacityPickerPos() {
      const elPos = getBounding(opactiyBarEl.value);
      const mousePos = getMousePos();
      const left = Math.max(-3, Math.min(barWidth - 12, mousePos.x - elPos.left - 6));
      opacityPickerEl.value.style.left = left + "px";
      paletteColor.a = (left + 3) / (barWidth - 9);
    }
    function setPickerPos() {
      const c = Utils.hsb2rgb({ h: paletteColor.h, s: 100, b: 100, a: paletteColor.a });
      paletteEl.value.style.background = `rgb(${c.r},${c.g},${c.b},1)`;
      palettePickerEl.value.style.left = paletteWidth / 100 * paletteColor.s - 6 + "px";
      palettePickerEl.value.style.top = paletteHeight - paletteHeight / 100 * paletteColor.b - 6 + "px";
      huePickerEl.value.style.left = (barWidth - 9) / 360 * paletteColor.h - 3 + "px";
      opacityPickerEl.value.style.left = (barWidth - 9) * paletteColor.a - 3 + "px";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["cbtn", props.size]),
          onClick: _cache[0] || (_cache[0] = ($event) => isShowPanel.value = !isShowPanel.value),
          ref_key: "cbtnEl",
          ref: cbtnEl
        }, [
          createBaseVNode("div", {
            class: "cbtn-inner",
            style: normalizeStyle({ background: previewBackground.value })
          }, null, 4)
        ], 2),
        withDirectives(createBaseVNode("div", {
          class: "panel",
          ref_key: "panelEl",
          ref: panelEl,
          onContextmenu: withModifiers(bindContext, ["prevent"])
        }, [
          createBaseVNode("div", {
            class: "active-mode-wrapper",
            style: normalizeStyle({ display: modebar.value })
          }, [
            createBaseVNode("div", {
              title: "solid",
              class: normalizeClass(["btn-active-mode solid", activeMode.value === "solid" ? "" : "gray"]),
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => changeMode("solid"), ["stop"]))
            }, null, 2),
            createBaseVNode("div", {
              title: "linear",
              class: normalizeClass(["btn-active-mode linear", activeMode.value === "linear" ? "" : "gray"]),
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => changeMode("linear"), ["stop"]))
            }, null, 2),
            createBaseVNode("div", {
              title: "radial",
              class: normalizeClass(["btn-active-mode radial", activeMode.value === "radial" ? "" : "gray"]),
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => changeMode("radial"), ["stop"]))
            }, null, 2)
          ], 4),
          createBaseVNode("div", {
            class: "grad-wrapper",
            style: normalizeStyle(activeMode.value === "solid" ? "display:none" : "")
          }, [
            createBaseVNode("div", {
              class: "grad-bar",
              ref_key: "gradBarEl",
              ref: gradBarEl,
              style: normalizeStyle({ backgroundImage: gradPreviewColor.value }),
              onClick: _cache[4] || (_cache[4] = withModifiers(($event) => addGradPicker(), ["stop"]))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(gradColors.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  style: { "top": "-1px" },
                  class: normalizeClass(["picker", index == activeGradPickerIndex.value ? "on" : ""]),
                  onClick: withModifiers(($event) => getGradPickerPos($event.target, index), ["stop"]),
                  onMousedown: withModifiers(($event) => bindDown($event.target, getGradPickerPos, index), ["stop"])
                }, null, 42, _hoisted_3);
              }), 128))
            ], 4),
            createBaseVNode("div", {
              class: "flex-row",
              style: normalizeStyle(activeMode.value === "linear" ? "" : "visibility:hidden")
            }, [
              createBaseVNode("div", {
                class: "degree",
                ref_key: "degreeEl",
                ref: degreeEl,
                onClick: withModifiers(getDegreePickerPos, ["stop"]),
                onMousedown: _cache[6] || (_cache[6] = withModifiers(($event) => bindDown($event, getDegreePickerPos), ["stop"]))
              }, [
                createBaseVNode("div", {
                  class: "picker-deg",
                  ref_key: "degreePickerEl",
                  ref: degreePickerEl,
                  onMousedown: _cache[5] || (_cache[5] = withModifiers(($event) => bindDown($event, getDegreePickerPos), ["stop"]))
                }, null, 544)
              ], 40, _hoisted_4),
              createBaseVNode("div", _hoisted_5, toDisplayString(degree.value) + "°", 1)
            ], 4)
          ], 4),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", {
              class: "palette",
              ref_key: "paletteEl",
              ref: paletteEl,
              onClick: withModifiers(getPalettePickerPos, ["stop"]),
              onMousedown: _cache[8] || (_cache[8] = withModifiers(($event) => bindDown($event, getPalettePickerPos), ["stop"]))
            }, [
              _hoisted_8,
              _hoisted_9,
              createBaseVNode("div", {
                class: "picker",
                ref_key: "palettePickerEl",
                ref: palettePickerEl,
                onMousedown: _cache[7] || (_cache[7] = withModifiers(($event) => bindDown($event, getPalettePickerPos), ["stop"]))
              }, null, 544)
            ], 40, _hoisted_7)
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", {
              class: "dropper",
              onClick: dropColor,
              style: normalizeStyle([{ "cursor": "pointer" }, isDropperEnabled.value ? "" : "opacity: 50%;cursor:default"])
            }, null, 4),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", {
                class: "hue-bar",
                ref_key: "hueBarEl",
                ref: hueBarEl,
                onClick: withModifiers(getHuePickerPos, ["stop"]),
                onMousedown: _cache[10] || (_cache[10] = withModifiers(($event) => bindDown($event, getHuePickerPos), ["stop"]))
              }, [
                createBaseVNode("div", {
                  class: "picker",
                  ref_key: "huePickerEl",
                  ref: huePickerEl,
                  style: { "top": "-1px" },
                  onMousedown: _cache[9] || (_cache[9] = withModifiers(($event) => bindDown($event, getHuePickerPos), ["stop"]))
                }, null, 544)
              ], 40, _hoisted_12),
              createBaseVNode("div", {
                class: "opacity-bar",
                ref_key: "opactiyBarEl",
                ref: opactiyBarEl,
                onClick: withModifiers(getOpacityPickerPos, ["stop"]),
                onMousedown: _cache[12] || (_cache[12] = withModifiers(($event) => bindDown($event, getOpacityPickerPos), ["stop"]))
              }, [
                createBaseVNode("div", {
                  class: "picker",
                  ref_key: "opacityPickerEl",
                  ref: opacityPickerEl,
                  style: { "top": "-1px" },
                  onClick: withModifiers(getOpacityPickerPos, ["stop"]),
                  onMousedown: _cache[11] || (_cache[11] = withModifiers(($event) => bindDown($event, getOpacityPickerPos), ["stop"]))
                }, null, 40, _hoisted_14)
              ], 40, _hoisted_13)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", {
                class: "preview-color",
                style: normalizeStyle({ background: previewColor.value })
              }, null, 4)
            ])
          ])
        ], 40, _hoisted_2), [
          [vShow, isShowPanel.value]
        ])
      ]);
    };
  }
});
var ColorPicker = _export_sfc(_sfc_main, [["__scopeId", "data-v-58b8afd3"]]);
ColorPicker.install = function(app) {
  app.component("ColorPicker", ColorPicker);
};
export {
  ColorPicker as default
};
//# sourceMappingURL=@mcistudio_vue-colorpicker.js.map
