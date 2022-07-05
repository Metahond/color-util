import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { RGBColor } from '../mod.ts';

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

Deno.test('test rgb_to_hsb', () => {
    const rgbColor = new RGBColor(255, 0, 0);
    assertEquals(rgbColor.toHSB().toString(), 'hsb(0°, 100.0%, 100.0%)');

    const secondColor = new RGBColor(0, 255, 0);
    assertEquals(secondColor.toHSB().toString(), 'hsb(120°, 100.0%, 100.0%)');

    const thirdColor = new RGBColor(77, 246, 115);
    assertEquals(thirdColor.toHSB().toString(), 'hsb(133°, 68.7%, 96.5%)');
});

Deno.test('test rgb_to_hwb', () => {
    const rgbColor = new RGBColor(255, 0, 0);
    assertEquals(rgbColor.toHWB().toString(), 'hwb(0°, 0.0%, 0.0%)');

    const secondColor = new RGBColor(0, 255, 0);
    assertEquals(secondColor.toHWB().toString(), 'hwb(120°, 0.0%, 0.0%)');

    const thirdColor = new RGBColor(77, 246, 115);
    assertEquals(thirdColor.toHWB().toString(), 'hwb(133°, 30.2%, 3.5%)');
});