const Utils = {
  hsb2rgb(hsb) {
    var rgb = {}
    var h = Math.round(hsb.h)
    var s = Math.round((hsb.s * 255) / 100)
    var v = Math.round((hsb.b * 255) / 100)

    if (s == 0) {
      rgb.r = rgb.g = rgb.b = v
    } else {
      var t1 = v
      var t2 = ((255 - s) * v) / 255
      var t3 = ((t1 - t2) * (h % 60)) / 60

      if (h == 360) h = 0

      if (h < 60) {
        rgb.r = t1
        rgb.b = t2
        rgb.g = t2 + t3
      } else if (h < 120) {
        rgb.g = t1
        rgb.b = t2
        rgb.r = t1 - t3
      } else if (h < 180) {
        rgb.g = t1
        rgb.r = t2
        rgb.b = t2 + t3
      } else if (h < 240) {
        rgb.b = t1
        rgb.r = t2
        rgb.g = t1 - t3
      } else if (h < 300) {
        rgb.b = t1
        rgb.g = t2
        rgb.r = t2 + t3
      } else if (h < 360) {
        rgb.r = t1
        rgb.g = t2
        rgb.b = t1 - t3
      } else {
        rgb.r = 0
        rgb.g = 0
        rgb.b = 0
      }
    }
    return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b), a: hsb.a }
  },
  hsba2rgba(hsba) {
    const c = this.hsb2rgb(hsba)
    return `rgba(${c.r},${c.g},${c.b},${c.a})`
  },
  rgba2hex(rgba) {
    const toHex = (color) => {
      const hex = color.toString(16)
      return hex.length < 2 ? '0' + hex : hex
    }
    const alpha = rgba.a >= 0 ? Math.round(rgba.a * 255) : 0
    let alphaHex = ''
    if (alpha !== 255) {
      alphaHex = toHex(alpha)
    }
    return '#' + toHex(rgba.r) + toHex(rgba.g) + toHex(rgba.b) + alphaHex
  },
  hex2rgba(hex) {
    const isEightDigits = hex.length === 9
    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)
    let a = isEightDigits ? +(parseInt(hex.slice(7, 9), 16) / 255).toFixed(2) : 1
    return `{r:${r},g:${g},b:${b},a:${a})`
  },

  hex2hsb(hex) {
    const rgba = this.hex2rgba(hex)
    rgba.a = 1
    return this.rgba2hsba(rgba)
  },

  rgba2hsba(rgba) {
    var hsba = { h: 0, s: 0, b: 0, a: rgba.a }
    var min = Math.min(rgba.r, rgba.g, rgba.b)
    var max = Math.max(rgba.r, rgba.g, rgba.b)
    var delta = max - min
    hsba.b = max
    hsba.s = max != 0 ? (255 * delta) / max : 0
    if (hsba.s != 0) {
      if (rgba.r == max) hsba.h = (rgba.g - rgba.b) / delta
      else if (rgba.g == max) hsba.h = 2 + (rgba.b - rgba.r) / delta
      else hsba.h = 4 + (rgba.r - rgba.g) / delta
    } else hsba.h = -1
    hsba.h *= 60
    if (hsba.h < 0) hsba.h += 360
    hsba.s *= 100 / 255
    hsba.b *= 100 / 255
    return hsba
  }
}
export default Utils
