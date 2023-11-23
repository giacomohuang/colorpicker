---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Colorpicker"
  tagline: A colorpicker component based on Vue 3.0  
  actions:
    - theme: brand
      text: Guides
      link: /guides
    - theme: alt
      text: Examples
      link: /examples
  image:
    src: /logo.png
    width: 120
    height: 120
features:
  - title: Rich Configuration
    details: Supports color mode (solid / linear / radial ), opacity and grandient control adjustment
  - title: WYSIWYG
    details: Supports real-time preview of color and gradient effects, what you see is what you get.
  - title: EyeDropper
    details: You can quickly pick any color from your screen with the eyedropper. （supports Google Chrome version 95 and above）
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
