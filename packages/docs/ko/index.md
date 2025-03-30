---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Colorpicker"
  tagline: Vue 3를 위한 강력하고 유연한 컬러피커 컴포넌트
  actions:
    - theme: brand
      text: 가이드
      link: /ko/guides
    - theme: alt
      text: 예제
      link: /ko/examples
  image:
    src: /logo.png
    width: 120
    height: 120
features:
  - title: 다양한 색상 모드
    details: 단색, 선형 그라데이션, 방사형 그라데이션을 지원하며 색상 정지점과 각도를 완벽하게 제어
  - title: 고급 제어
    details: HSV 색상 공간에서의 직관적인 색상 선택, 알파 채널 제어, 그라데이션 정지점 관리
  - title: 현대적인 기능
    details: 스포이드 도구 내장(Chrome 95+ 지원), 실시간 미리보기, 반응형 디자인
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
