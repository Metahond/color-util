import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { HexColor, HSBColor, HSLColor, RGBColor } from './mod.ts';

/** Tests hex to RGB convertion. */
Deno.test('test hex_to_rgb', () => {
    const hexColor = new HexColor('#abcabc');
    assertEquals(hexColor.toRGB().toString(), 'rgb(171, 202, 188)');

    const otherHexColor = new HexColor('#65ca25');
    assertEquals(otherHexColor.toRGB().toString(), 'rgb(101, 202, 37)');
});

/** Tests RGB to hex convertion. */
Deno.test('test rgb_to_hex', () => {
    const rgbColor = new RGBColor(94, 242, 111);
    assertEquals(rgbColor.toHex().toString(), '#5ef26f');

    const otherRgbColor = new RGBColor(19, 45, 35);
    assertEquals(otherRgbColor.toHex().toString(), '#132d23');
});

Deno.test('test rgb_to_hsl', () => {
    const rgbColor = new RGBColor(255, 0, 0);
    assertEquals(rgbColor.toHSL().toString(), 'hsl(0°, 100.0%, 50.0%)');

    const secondColor = new RGBColor(0, 255, 0);
    assertEquals(secondColor.toHSL().toString(), 'hsl(120°, 100.0%, 50.0%)');

    const thirdColor = new RGBColor(0, 0, 255);
    assertEquals(thirdColor.toHSL().toString(), 'hsl(240°, 100.0%, 50.0%)');
});

Deno.test('test hsl_to_rgb', () => {
    const hslColor = new HSLColor(0, 1, 0.5);
    assertEquals(hslColor.toRGB().toString(), 'rgb(255, 0, 0)');

    const secondColor = new HSLColor(120, 1, 0.5);
    assertEquals(secondColor.toRGB().toString(), 'rgb(0, 255, 0)');

    const thirdColor = new HSLColor(202, 0.712, 0.476);
    assertEquals(thirdColor.toRGB().toString(), 'rgb(35, 144, 208)');
});

Deno.test('test rgb_to_hsb', () => {
    const rgbColor = new RGBColor(255, 0, 0);
    assertEquals(rgbColor.toHSB().toString(), 'hsb(0°, 100.0%, 100.0%)');

    const secondColor = new RGBColor(0, 255, 0);
    assertEquals(secondColor.toHSB().toString(), 'hsb(120°, 100.0%, 100.0%)');

    const thirdColor = new RGBColor(77, 246, 115);
    assertEquals(thirdColor.toHSB().toString(), 'hsb(133°, 68.7%, 96.5%)');
});

Deno.test('test hsb_to_rgb', () => {
    const hsbColor = new HSBColor(0, 1, 1);
    assertEquals(hsbColor.toRGB().toString(), 'rgb(255, 0, 0)');

    const secondColor = new HSBColor(120, 1, 1);
    assertEquals(secondColor.toRGB().toString(), 'rgb(0, 255, 0)');

    const thirdColor = new HSBColor(202, 0.712, 0.476);
    assertEquals(thirdColor.toRGB().toString(), 'rgb(35, 90, 121)');
});

Deno.test('test hsl_to_hsb', () => {
    const hsbColor = new HSLColor(255, 0.4, .3);
    assertEquals(hsbColor.toHSB().toString(), 'hsb(255°, 57.1%, 42.0%)');

    const secondColor = new HSLColor(0, 0.45, 0.75);
    assertEquals(secondColor.toHSB().toString(), 'hsb(0°, 26.1%, 86.3%)');

    const thirdColor = new HSLColor(100, 1, 0.5);
    assertEquals(thirdColor.toHSB().toString(), 'hsb(100°, 100.0%, 100.0%)');
});
