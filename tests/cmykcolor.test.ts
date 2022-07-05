import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { CMYKColor } from '../mod.ts';

Deno.test('test cmyk_to_rgb', () => {
    const cmykColor = new CMYKColor(0, 1, 1, 0);
    assertEquals(cmykColor.toRGB().toString(), 'rgb(255, 0, 0)');

    const secondColor = new CMYKColor(1, 0, 1, 0);
    assertEquals(secondColor.toRGB().toString(), 'rgb(0, 255, 0)');

    const thirdColor = new CMYKColor(0.69, 0, 0.53, 0.04);
    assertEquals(thirdColor.toRGB().toString(), 'rgb(76, 245, 115)');
});
