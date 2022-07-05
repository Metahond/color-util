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
