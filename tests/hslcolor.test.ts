import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { HSLColor } from "../mod.ts";

Deno.test('test hsl_to_rgb', () => {
    const hslColor = new HSLColor(0, 1, 0.5);
    assertEquals(hslColor.toRGB().toString(), 'rgb(255, 0, 0)');

    const secondColor = new HSLColor(120, 1, 0.5);
    assertEquals(secondColor.toRGB().toString(), 'rgb(0, 255, 0)');

    const thirdColor = new HSLColor(202, 0.712, 0.476);
    assertEquals(thirdColor.toRGB().toString(), 'rgb(35, 144, 208)');
});

Deno.test('test hsl_to_hsb', () => {
    const hsbColor = new HSLColor(255, 0.4, 0.3);
    assertEquals(hsbColor.toHSB().toString(), 'hsb(255°, 57.1%, 42.0%)');

    const secondColor = new HSLColor(0, 0.45, 0.75);
    assertEquals(secondColor.toHSB().toString(), 'hsb(0°, 26.1%, 86.3%)');

    const thirdColor = new HSLColor(100, 1, 0.5);
    assertEquals(thirdColor.toHSB().toString(), 'hsb(100°, 100.0%, 100.0%)');
});
