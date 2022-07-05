import { CMYKColor, hex, HexColor, HSBColor, HSLColor, HWBColor, RGBColor } from '../mod.ts';

const color: HexColor = hex('#aaabbb');
console.log(color.toString()); // => #aaabbb
console.log(color.red); // => 170
console.log(color.green); // => 171
console.log(color.blue); // => 187

const rgbColor: RGBColor = color.toRGB();
console.log(rgbColor.toString()); // => rgb(170, 171, 187)
console.log(rgbColor.red); // => 170
console.log(rgbColor.green); // => 171
console.log(rgbColor.blue); // => 187

const hslColor: HSLColor = color.toHSL();
console.log(hslColor.toString()); // => hsl(236°, 11.1%, 70.0%)
console.log(hslColor.hue); // => approx. 236.47
console.log(hslColor.saturation); // => approx. 0.111
console.log(hslColor.lightness); // => 0.7

const hsbColor: HSBColor = color.toHSB();
console.log(hsbColor.toString()); // => hsb(236°, 9.1%, 73.3%)
console.log(hsbColor.hue); // => approx. 236.47
console.log(hsbColor.saturation); // => approx. 0.091
console.log(hsbColor.brightness); // => approx. 0.73

const hwbColor: HWBColor = color.toHWB();
console.log(hwbColor.toString()); // => hwb(236°, 66.7%, 26.7%)
console.log(hwbColor.hue); // => approx. 236.47
console.log(hwbColor.whiteness); // => approx. 0.667
console.log(hwbColor.blackness); // => approx. 0.267

const cmykColor: CMYKColor = color.toCMYK();
console.log(cmykColor.toString()); // => cmyk(9%, 9%, 0%, 27%)
console.log(cmykColor.cyan); // => approx. 0.091
console.log(cmykColor.magenta); // => approx. 0.086
console.log(cmykColor.yellow); // => 0
console.log(cmykColor.key); // => approx. 0.267
