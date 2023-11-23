import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Vue Colorpicker","tagline":"基于vue3.0的拾色器组件","actions":[{"theme":"brand","text":"开发指南","link":"/guides"},{"theme":"alt","text":"示例","link":"/examples"}],"image":{"src":"/logo.png","width":120,"height":120}},"features":[{"title":"丰富的配置","details":"支持3种背景颜色模式 (solid / linear / radial )、透明度、渐变控制"},{"title":"所见即所得","details":"支持实时预览配色和渐变效果，所见即所得"},{"title":"取色器","details":"通过取色器可以快速从你的屏幕上提取任何颜色。（支持谷歌浏览器95版本以上）"}]},"headers":[],"relativePath":"zh/index.md","filePath":"zh/index.md"}');
const _sfc_main = { name: "zh/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
