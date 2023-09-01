---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Colorpicker"
  tagline: 基于vue3.0的拾色器组件
  actions:
    - theme: brand
      text: 开发指南
      link: /Guides#overview
    - theme: alt
      text: 示例
      link: /examples#props
  image:
    src: /logo.png
    width: 120
    height: 120
features:
  - title: 丰富的配置
    details: "支持3种背景颜色模式 (solid / linear / radial )、透明度、渐变控制"
  - title: 所见即所得
    details: 支持实时预览配色和渐变效果，所见即所得
  - title: 取色器
    details: 通过取色器可以快速从你的屏幕上提取任何颜色。（支持谷歌浏览器95版本以上）
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
