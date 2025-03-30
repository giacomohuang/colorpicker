---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Colorpicker"
  tagline: Vue 3 向けのパワフルで柔軟なカラーピッカーコンポーネント
  actions:
    - theme: brand
      text: ガイド
      link: /ja/guides
    - theme: alt
      text: 例
      link: /ja/examples
  image:
    src: /logo.png
    width: 120
    height: 120
features:
  - title: 複数のカラーモード
    details: ソリッドカラー、線形グラデーション、放射状グラデーションをサポートし、カラーストップと角度を完全に制御
  - title: 高度なコントロール
    details: HSV色空間での直感的な色選択、アルファチャンネル制御、グラデーションストップ管理
  - title: モダンな機能
    details: スポイトツール機能内蔵（Chrome 95+以降対応）、リアルタイムプレビュー、レスポンシブデザイン
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
