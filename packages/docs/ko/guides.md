# 개발 가이드

## 개요

Vue Colorpicker는 다음과 같은 기능을 제공하는 강력한 색상 선택 컴포넌트입니다:

- 세 가지 CSS 배경색 모드: `solid`(단색), `linear-gradient`(선형 그라데이션), `radial-gradient`(방사형 그라데이션)
- HSV 색상 공간 완벽 지원, 투명도 제어 포함
- 드래그 앤 드롭 방식의 그라데이션 노드 관리를 지원하는 대화형 그라데이션 제어
- 내장 스크린 컬러 피커 기능 (Chrome 95+ 지원)
- 실시간 미리보기 및 CSS 코드 생성
- 반응형 디자인, 세 가지 크기 옵션 제공

![screenshot01](/screenshot01.png)
![screenshot02](/screenshot02.png)
![screenshot03](/screenshot03.png)

## 설치

```bash
npm i @mcistudio/vue-colorpicker
```

## 사용 방법

### 전역 등록

```javascript
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";

createApp(App).use(ColorPicker).mount("#app");
```

### 지역 등록

```vue
<script setup>
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";
</script>

<template>
  <ColorPicker v-model="color"></ColorPicker>
</template>
```

## Props 매개변수

| 매개변수명 | 설명             | 타입   | 가능한 값                  | 기본값   | 필수 여부 |
| ---------- | ---------------- | ------ | -------------------------- | -------- | --------- |
| v-model    | 색상값 객체      | Object | 아래 v-model 형식 참조     | -        | 아니오    |
| modebar    | 모드바 표시 상태 | String | 'show', 'none'             | 'show'   | 아니오    |
| size       | 컴포넌트 크기    | String | 'small', 'medium', 'large' | 'medium' | 아니오    |

### v-model 형식 설명

| 속성명    | 설명                                | 타입   | 가능한 값                   | 기본값                                                                                                               | 필수 여부 |
| --------- | ----------------------------------- | ------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------- |
| mode      | 색상 모드                           | String | 'solid', 'linear', 'radial' | 'solid'                                                                                                              | 아니오    |
| color     | RGBA 색상 객체(단색 모드)           | Object | \{ r, g, b, a \}            | \{ r: 0, g: 0, b: 0, a: 1 \}                                                                                         | 아니오    |
| hex       | 16진수 색상값(단색 모드, 읽기 전용) | String | -                           | -                                                                                                                    | 아니오    |
| degree    | 그라데이션 각도(선형 그라데이션)    | Number | 0-360                       | 90                                                                                                                   | 아니오    |
| gradients | 그라데이션 노드 배열                | Array  | 그라데이션 노드 객체 배열   | [\{ percent: 0, color: \{ r: 255, g: 255, b: 255, a: 1 \}\}, \{ percent: 100, color: \{ r: 0, g: 0, b: 0, a: 1 \}\}] | 아니오    |

## 이벤트

| 이벤트명     | 설명              | 매개변수    |
| ------------ | ----------------- | ----------- |
| colorChanged | 색상 변경 시 발생 | 색상값 객체 |

### 반환값 예시

**단색 모드**

```json
{
  "mode": "solid",
  "color": {
    "r": 0,
    "g": 0,
    "b": 0,
    "a": 1
  },
  "hex": "#000000",
  "css": "background-color:rgba(0,0,0,1)"
}
```

**선형 그라데이션 모드**

```json
{
  "mode": "linear",
  "degree": 90,
  "gradients": [
    {
      "percent": 0,
      "color": {
        "r": 255,
        "g": 255,
        "b": 255,
        "a": 1
      }
    },
    {
      "percent": 100,
      "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 1
      }
    }
  ],
  "css": "background-image:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(0,0,0,1) 100%)"
}
```

**방사형 그라데이션 모드**

```json
{
  "mode": "radial",
  "gradients": [
    {
      "percent": 0,
      "color": {
        "r": 255,
        "g": 255,
        "b": 255,
        "a": 1
      }
    },
    {
      "percent": 100,
      "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 1
      }
    }
  ],
  "css": "background-image:radial-gradient(rgba(255,255,255,1) 0%,rgba(0,0,0,1) 100%)"
}
```

<style>
.content-container img {
  width:50%
}
video {
  width:50%
}
</style>
