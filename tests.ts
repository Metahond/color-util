import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { HexColor, RGBColor } from "./mod.ts";

Deno.test('test hex_to_rgb', () => {
    const hexColor = new HexColor('#abcabc');
    assertEquals(hexColor.toRGB().toString(), 'rgb(171, 202, 188)');

    const otherHexColor = new HexColor('#65ca25');
    assertEquals(otherHexColor.toRGB().toString(), 'rgb(101, 202, 37)');
});

Deno.test('test rgb_to_hex', () => {
    const rgbColor = new RGBColor(94, 242, 111);
    assertEquals(rgbColor.toHex().toString(), '#5ef26f');

    const otherRgbColor = new RGBColor(19, 45, 35);
    assertEquals(otherRgbColor.toHex().toString(), '#132d23');
});