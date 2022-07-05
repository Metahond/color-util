import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { HWBColor } from '../mod.ts';

Deno.test('test hwb_to_hsb', () => {
    const hwbColor = new HWBColor(120, 0, 0);
    assertEquals(hwbColor.toHSB().toString(), 'hsb(120°, 100.0%, 100.0%)');

    const otherColor = new HWBColor(153, 0.67, 0.21);
    assertEquals(otherColor.toHSB().toString(), 'hsb(153°, 15.2%, 79.0%)');
});

Deno.test('test hwb_to_rgb', () => {
    const hwbColor = new HWBColor(120, 0, 0);
    assertEquals(hwbColor.toRGB().toString(), 'rgb(0, 255, 0)');

    const otherColor = new HWBColor(153, 0.67, 0.21);
    assertEquals(otherColor.toRGB().toString(), 'rgb(171, 201, 188)');
});
