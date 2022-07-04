export type Colors =
    | HexColor
    | RGBColor
    | HSLColor
    | HSBColor
    | HWBColor
    | CYMKColor;

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

    /** Converts a hex color to a HSL color. */
    public toHSL(): HSLColor {
        return this.toRGB().toHSL();
    }

    /** Converts a hex color to a HSB color. */
    public toHSB(): HSBColor {
        return this.toRGB().toHSB();
    }

    /** Gets the hex value as string. */
    public toString(): string {
        return this.hex;
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

    /**
     * Creates a new RGB color.
     * @param r The red value.
     * @param g The green value.
     * @param b The blue value.
     * @param a The alpha value.
     */
    constructor(r: number, g: number, b: number, a?: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /** Converts the RGB Color to a hex color. */
    public toHex(): HexColor {
        return new HexColor(
            `#${((1 << 24) + (this.red << 16) + (this.green << 8) + this.blue)
                .toString(16)
                .slice(1)}`,
        );
    }

    /** Converts the RGB Color to a HSL color. */
    public toHSL(): HSLColor {
        const r1 = this.red / 255;
        const g1 = this.green / 255;
        const b1 = this.blue / 255;

        const cMax = Math.max(r1, g1, b1);
        const cMin = Math.min(r1, g1, b1);
        const cDelta = cMax - cMin;

        let h = 0;
        if (cDelta !== 0) {
            switch (cMax) {
                case r1:
                    h = 60 * ((g1 - b1) / cDelta + (g1 < b1 ? 6 : 0));
                    break;

                case g1:
                    h = 60 * ((b1 - r1) / cDelta + 2);
                    break;

                case b1:
                    h = 60 * ((r1 - g1) / cDelta + 4);
                    break;
            }
        }

        const l = (cMax + cMin) / 2;

        let s = 0;
        if (cDelta !== 0) {
            s = cDelta / (1 - Math.abs(2 * l - 1));
        }

        return new HSLColor(h, s, l, this.alpha);
    }

    /** Converts the RGB Color to a HSB color. */
    public toHSB(): HSBColor {
        const hsl = this.toHSL();
        const cMax = Math.max(
            this.red / 255,
            this.green / 255,
            this.blue / 255,
        );
        const delta =
            cMax - Math.min(this.red / 255, this.green / 255, this.blue / 255);
        const s = cMax === 0 ? 0 : delta / cMax;

        return new HSBColor(hsl.hue, s, cMax);
    }

    /** Gets the red value. */
    public get red(): number {
        return this.r;
    }

    /** Gets the green value. */
    public get green(): number {
        return this.g;
    }

    /** Gets the blue value. */
    public get blue(): number {
        return this.b;
    }

    /** Gets the alpha value if set. */
    public get alpha(): number | undefined {
        return this.a;
    }

    /** Gets the RGBColor object as string. */
    public toString(): string {
        if (this.alpha) {
            return `rgba(${this.red.toFixed(0)}, ${this.green}, ${this.blue}, ${
                this.alpha
            })`;
        } else {
            return `rgb(${this.red}, ${this.green}, ${this.blue})`;
        }
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

    /** Converts the HSL Color to a RGB color. */
    public toRGB(): RGBColor {
        const c = (1 - Math.abs(2 * this.lightness - 1)) * this.saturation;
        const h1 = this.hue / 60;
        const x = c * (1 - Math.abs((h1 % 2) - 1));

        let r = 0,
            g = 0,
            b = 0;
        if (h1 >= 0 && h1 < 1) {
            r = c;
            g = x;
            b = 0;
        } else if (h1 >= 1 && h1 < 2) {
            r = x;
            g = c;
            b = 0;
        } else if (h1 >= 2 && h1 < 3) {
            r = 0;
            g = c;
            b = x;
        } else if (h1 >= 3 && h1 < 4) {
            r = 0;
            g = x;
            b = c;
        } else if (h1 >= 4 && h1 < 5) {
            r = x;
            g = 0;
            b = c;
        } else if (h1 >= 5 && h1 < 6) {
            r = c;
            g = 0;
            b = x;
        }

        const m = this.lightness - c / 2;
        return new RGBColor(
            Math.round((r + m) * 255),
            Math.round((g + m) * 255),
            Math.round((b + m) * 255),
            this.alpha,
        );
    }

    /** Converts a HSL color to a hex color. */
    public toHex(): HexColor {
        return this.toRGB().toHex();
    }

    /** Converts a HSL color to a HSB color. */
    public toHSB(): HSBColor {
        const h = this.hue;
        const b = this.lightness + this.saturation * Math.min(this.lightness, 1 - this.lightness);
        let s = 0;
        if (b !== 0) {
            s = 2 * (1 - this.lightness / b);
        }

        return new HSBColor(h, s, b, this.alpha);
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

    public toString(): string {
        if (this.alpha) {
            return `hsla(${this.hue.toFixed(0)}°, ${(
                this.saturation * 100
            ).toFixed(1)}%, ${(this.lightness * 100).toFixed(1)}%, ${
                this.alpha
            })`;
        } else {
            return `hsl(${this.hue.toFixed(0)}°, ${(
                this.saturation * 100
            ).toFixed(1)}%, ${(this.lightness * 100).toFixed(1)}%)`;
        }
    }
}

/** A color in HSB/HSV format. */
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

    /** Converts the HSB Color to a RGB color. */
    public toRGB(): RGBColor {
        const c = this.brightness * this.saturation;
        const h1 = this.hue / 60;
        const x = c * (1 - Math.abs((h1 % 2) - 1));

        let r = 0,
            g = 0,
            b = 0;
        if (h1 >= 0 && h1 < 1) {
            r = c;
            g = x;
            b = 0;
        } else if (h1 >= 1 && h1 < 2) {
            r = x;
            g = c;
            b = 0;
        } else if (h1 >= 2 && h1 < 3) {
            r = 0;
            g = c;
            b = x;
        } else if (h1 >= 3 && h1 < 4) {
            r = 0;
            g = x;
            b = c;
        } else if (h1 >= 4 && h1 < 5) {
            r = x;
            g = 0;
            b = c;
        } else if (h1 >= 5 && h1 < 6) {
            r = c;
            g = 0;
            b = x;
        }

        const m = this.brightness - c;
        return new RGBColor(
            Math.round((r + m) * 255),
            Math.round((g + m) * 255),
            Math.round((b + m) * 255),
            this.alpha,
        );
    }

    /** Converts the HSB color to a hex color. */
    public toHex(): HexColor {
        return this.toRGB().toHex();
    }

    /** Converts the HSB color to a HSL color. */
    public toHSL(): HSLColor {
        const h = this.hue;
        const l = this.brightness * (1 - this.saturation / 2);
        let s = 0;
        if (l !== 0 && l !== 1) {
            s = (this.brightness - l) / Math.min(l, 1 - l);
        }

        return new HSLColor(h, s, l, this.alpha);
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

    public toString(): string {
        if (this.alpha) {
            return `hsba(${this.hue.toFixed(0)}°, ${(
                this.saturation * 100
            ).toFixed(1)}%, ${(this.brightness * 100).toFixed(1)}%, ${
                this.alpha
            })`;
        } else {
            return `hsb(${this.hue.toFixed(0)}°, ${(
                this.saturation * 100
            ).toFixed(1)}%, ${(this.brightness * 100).toFixed(1)}%)`;
        }
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
