import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { HexColor, HSLColor, RGBColor } from "./mod.ts";

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

    const thirdColor = new HSLColor(240, 1, 0.5);
    assertEquals(thirdColor.toRGB().toString(), 'rgb(0, 0, 255)');
});