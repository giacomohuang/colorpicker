let Utils = {
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
  rgb2hex(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)]
    hex.map(function (str, i) {
      if (str.length == 1) {
        hex[i] = '0' + str
      }
    })
    return hex.join('')
  },
  hex2rgb(hex) {
    let h = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16)
    return { r: h >> 16, g: (h & 0x00ff00) >> 8, b: h & 0x0000ff }
  },

  hex2hsb(hex) {
    const rgba = this.hex2rgb(hex)
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
  },
}
export default Utils
