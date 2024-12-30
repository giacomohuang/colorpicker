# ガイド

## 概要

Vue Colorpicker は以下の機能を提供する強力なカラー選択コンポーネントです：

- 3つのCSS背景色モード：`solid`（単色）、`linear-gradient`（線形グラデーション）、`radial-gradient`（放射状グラデーション）
- アルファチャンネル制御を含む完全なHSV色空間サポート
- ドラッグ＆ドロップによるグラデーションストップの対話的な制御
- スポイトツール機能内蔵（Chrome 95+以降対応）
- リアルタイムプレビューとCSS出力
- 3つのサイズオプションを備えたレスポンシブデザイン

![screenshot01](/screenshot01.png)
![screenshot02](/screenshot02.png)
![screenshot03](/screenshot03.png)

## インストール

```bash
npm i @mcistudio/vue-colorpicker
```

## 使用方法

### グローバル登録

```javascript
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";

createApp(App).use(ColorPicker).mount("#app");
```

### ローカル登録

```vue
<script setup>
import ColorPicker from "@mcistudio/vue-colorpicker";
import "@mcistudio/vue-colorpicker/dist/style.css";
</script>

<template>
  <ColorPicker v-model="color"></ColorPicker>
</template>
```

## プロパティ

| プロパティ名 | 説明                 | 型     | 使用可能な値                  | デフォルト値 | 必須   |
| ------------ | -------------------- | ------ | ----------------------------- | ------------ | ------ |
| v-model      | カラー値オブジェクト | Object | 下記v-modelフォーマットを参照 | -            | いいえ |
| modebar      | モードバーの表示     | String | 'show'、'none'                | 'show'       | いいえ |
| size         | コンポーネントサイズ | String | 'small'、'medium'、'large'    | 'medium'     | いいえ |

### v-modelフォーマット

| プロパティ | 説明                                       | 型     | 使用可能な値                             | デフォルト値                                                                                                         | 必須   |
| ---------- | ------------------------------------------ | ------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------ |
| mode       | カラーモード                               | String | 'solid'、'linear'、'radial'              | 'solid'                                                                                                              | いいえ |
| color      | RGBAカラーオブジェクト（単色モード）       | Object | \{ r, g, b, a \}                         | \{ r: 0, g: 0, b: 0, a: 1 \}                                                                                         | いいえ |
| hex        | 16進数カラー値（単色モード、読み取り専用） | String | -                                        | -                                                                                                                    | いいえ |
| degree     | グラデーション角度（線形モード）           | Number | 0-360                                    | 90                                                                                                                   | いいえ |
| gradients  | グラデーションストップ配列                 | Array  | グラデーションストップオブジェクトの配列 | [\{ percent: 0, color: \{ r: 255, g: 255, b: 255, a: 1 \}\}, \{ percent: 100, color: \{ r: 0, g: 0, b: 0, a: 1 \}\}] | いいえ |

## イベント

| イベント名   | 説明             | パラメータ           |
| ------------ | ---------------- | -------------------- |
| colorChanged | 色が変更された時 | カラー値オブジェクト |

### 戻り値の例

**単色モード**

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

**線形グラデーションモード**

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

**放射状グラデーションモード**

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
