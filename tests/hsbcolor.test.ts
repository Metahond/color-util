import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { HSBColor } from "../mod.ts";

Deno.test('test hsb_to_rgb', () => {
    const hsbColor = new HSBColor(0, 1, 1);
    assertEquals(hsbColor.toRGB().toString(), 'rgb(255, 0, 0)');

    const secondColor = new HSBColor(120, 1, 1);
    assertEquals(secondColor.toRGB().toString(), 'rgb(0, 255, 0)');

    const thirdColor = new HSBColor(202, 0.712, 0.476);
    assertEquals(thirdColor.toRGB().toString(), 'rgb(35, 90, 121)');
});

Deno.test('test hsb_to_hsl', () => {
    const hsbColor = new HSBColor(255, 0.57, 0.42);
    assertEquals(hsbColor.toHSL().toString(), 'hsl(255°, 39.9%, 30.0%)');

    const secondColor = new HSBColor(0, 1, 0.25);
    assertEquals(secondColor.toHSL().toString(), 'hsl(0°, 100.0%, 12.5%)');

    const thirdColor = new HSBColor(100, 1, 1);
    assertEquals(thirdColor.toHSL().toString(), 'hsl(100°, 100.0%, 50.0%)');
});

Deno.test('test hsb_to_hwb', () => {
    const hsbColor = new HSBColor(120, 1, 1);
    assertEquals(hsbColor.toHWB().toString(), 'hwb(120°, 0.0%, 0.0%)');

    const otherColor = new HSBColor(20, 0.667, 0.035);
    assertEquals(otherColor.toHWB().toString(), 'hwb(20°, 1.2%, 96.5%)');

    const thirdColor = new HSBColor(153, 0.152, 0.79);
    assertEquals(thirdColor.toHWB().toString(), 'hwb(153°, 67.0%, 21.0%)');
});