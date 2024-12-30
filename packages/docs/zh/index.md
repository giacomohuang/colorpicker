---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Colorpicker"
  tagline: 功能强大且灵活的 Vue 3 颜色选择器组件
  actions:
    - theme: brand
      text: 开发指南
      link: /zh/guides
    - theme: alt
      text: 示例
      link: /zh/examples
  image:
    src: /logo.png
    width: 120
    height: 120
features:
  - title: 多种颜色模式
    details: 支持纯色、线性渐变和径向渐变，可完全控制渐变节点和角度
  - title: 高级控制
    details: 直观的 HSV 色彩空间选择、透明度控制和渐变节点管理
  - title: 现代特性
    details: 内置屏幕取色器支持（Chrome 95+）、实时预览和响应式设计
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
