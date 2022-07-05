import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { HexColor } from '../mod.ts';

/** Tests hex to RGB convertion. */
Deno.test('test hex_to_rgb', () => {
    const hexColor = new HexColor('#abcabc');
    assertEquals(hexColor.toRGB().toString(), 'rgb(171, 202, 188)');

    const otherHexColor = new HexColor('#65ca25');
    assertEquals(otherHexColor.toRGB().toString(), 'rgb(101, 202, 37)');
});
