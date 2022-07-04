export type Colors = 'hex' | 'rgb' | 'hsl' | 'hsb' | 'hwb' | 'cymk';

/** A color in hex format. */
export class HexColor {
    /** The hex string */
    private hex: string;

    /** Creates a new hex color class. */
    constructor(hex: string) {
        this.hex = hex.replace('0x', '#');
    }

    /** Converts a hex color to a RGB color. */
    public toRGB(): RGBColor {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
            this.hex,
        );
        if (result) {
            const r = parseInt(result[1], 16);
            const g = parseInt(result[2], 16);
            const b = parseInt(result[3], 16);

            return new RGBColor(r, g, b);
        }

        throw new Error('Invalid hex string found.');
    }

    /** Gets the red value of color. */
    public get red(): number {
        return this.toRGB().red;
    }

    /** Gets the green value of color. */
    public get green(): number {
        return this.toRGB().green;
    }

    /** Gets the blue value of color. */
    public get blue(): number {
        return this.toRGB().blue;
    }
}

/** A color in RGB format. */
export class RGBColor {
    private r: number;
    private g: number;
    private b: number;
    private a?: number | undefined;

    constructor(r: number, g: number, b: number, a?: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public get red(): number {
        return this.r;
    }

    public get green(): number {
        return this.g;
    }

    public get blue(): number {
        return this.b;
    }

    public get alpha(): number | undefined {
        return this.a;
    }

    public toString(): string {
        return `{red: ${this.r}, green: ${this.g}, blue: ${this.b}${
            this.a ? ', alpha: ' + this.a : ''
        }}`;
    }
}

/** A color in HSL format. */
export class HSLColor {
    private h: number;

    private s: number;

    private l: number;

    private a?: number;

    /** Creates a new HSL color. */
    constructor(h: number, s: number, l: number, a?: number) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }

    /** Gets the hue value of the color in degrees. */
    public get hue(): number {
        return this.h;
    }

    /** Gets the saturation value of the color in percent. */
    public get saturation(): number {
        return this.s;
    }

    /** Gets the lightness value of the color in percent. */
    public get lightness(): number {
        return this.l;
    }

    /** Gets the alpha value of the color if set. */
    public get alpha(): number | undefined {
        return this.a;
    }
}

/** A color in HSB format. */
export class HSBColor {
    private h: number;

    private s: number;

    private b: number;

    private a?: number;

    /** Creates a new HSB color. */
    constructor(h: number, s: number, b: number, a?: number) {
        this.h = h;
        this.s = s;
        this.b = b;
        this.a = a;
    }

    /** Gets the hue value of the color in degrees. */
    public get hue(): number {
        return this.h;
    }

    /** Gets the saturation value of the color in percent. */
    public get saturation(): number {
        return this.s;
    }

    /** Gets the brightness (value) value of the color in percent. */
    public get brightness(): number {
        return this.b;
    }

    /** Gets the alpha value of the color if set. */
    public get alpha(): number | undefined {
        return this.a;
    }
}

/** A color in HWB format. */
export class HWBColor {
    private h: number;

    private w: number;

    private b: number;

    private a?: number;

    /** Creates a new HWB color. */
    constructor(h: number, w: number, b: number, a?: number) {
        this.h = h;
        this.w = w;
        this.b = b;
        this.a = a;
    }

    /** Gets the hue value of the color in degrees. */
    public get hue(): number {
        return this.h;
    }

    /** Gets the whiteness value of the color in percent. */
    public get whiteness(): number {
        return this.w;
    }

    /** Gets the blackness value of the color in percent. */
    public get blackness(): number {
        return this.b;
    }

    /** Gets the alpha value of the color if set. */
    public get alpha(): number | undefined {
        return this.a;
    }
}

/** A color in CYMK format. */
export class CYMKColor {
    private c: number;

    private y: number;

    private m: number;

    private k: number;

    /** Creates a new CYMK color. */
    constructor(c: number, y: number, m: number, k: number) {
        this.c = c;
        this.y = y;
        this.m = m;
        this.k = k;
    }

    /** Gets the cyan value of the color. */
    public get cyan(): number {
        return this.c;
    }

    /** Gets the yellow value of the color. */
    public get yellow(): number {
        return this.y;
    }

    /** Gets the magenta value of the color. */
    public get magenta(): number {
        return this.m;
    }

    /** Gets the key (black) value of the color. */
    public get key(): number {
        return this.k;
    }
}