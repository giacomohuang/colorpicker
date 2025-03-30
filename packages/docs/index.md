---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Colorpicker"
  tagline: A powerful and flexible color picker component for Vue 3
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
  - title: Multiple Color Modes
    details: Supports solid color, linear gradient and radial gradient with full control over color stops and angles
  - title: Advanced Controls
    details: Intuitive color selection with HSV color space, alpha channel control, and gradient stop management
  - title: Modern Features
    details: Built-in EyeDropper API support (Chrome 95+), real-time preview, and responsive design
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
