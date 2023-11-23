import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Vue Colorpicker","tagline":"A colorpicker component based on Vue 3.0","actions":[{"theme":"brand","text":"Guides","link":"/guides"},{"theme":"alt","text":"Examples","link":"/examples"}],"image":{"src":"/logo.png","width":120,"height":120}},"features":[{"title":"Rich Configuration","details":"Supports color mode (solid / linear / radial ), opacity and grandient control adjustment"},{"title":"WYSIWYG","details":"Supports real-time preview of color and gradient effects, what you see is what you get."},{"title":"EyeDropper","details":"You can quickly pick any color from your screen with the eyedropper. （supports Google Chrome version 95 and above）"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
