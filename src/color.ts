import * as types from './types.ts';

export class Color {
    value: number[];
    type: types.Colors;
    alpha: number;

    private constructor(value: number[], type: types.Colors, alpha?: number) {
        this.value = value;
        this.type = type;
        this.alpha = alpha || 1;
    }

    static fromHex(hex: string) {
        // TBA
    }

    static fromRgb(r: number, g: number, b: number, a?: number) {
        // TBA
    }

    static fromHsl(h: number, s: number, l: number, a?: number) {
        // TBA
    }

    static fromHsv(h: number, s: number, v: number, a?: number) {
        // TBA   
    }

    static fromHwb(h: number, w: number, b: number, a?: number) {
        // TBA
    }

    static fromCymk(c: number, y: number, m: number, k: number) {
        // TBA
    }

    as(type: types.Colors) {
        // TBA
    }
}