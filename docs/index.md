---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Colorpicker"
  tagline: a vue3.0 based colorpicker component
  actions:
    - theme: brand
      text: Guides
      link: /Guides#overview
    - theme: alt
      text: Examples
      link: /examples#props
  image:
    src: /logo.png
    width: 120
    height: 120
features:
  - title: Adjustable
    details: "Supports color mode (solid / linear / radial ), opacity and grandient control adjustment"
  - title: WYSIWYG
    details: Supports live preview / WYSIWYG
  - title: EyeDropper
    details: You can quickly pick any color from your screen with the eyedropper. （supports Google Chrome version 95+）
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
