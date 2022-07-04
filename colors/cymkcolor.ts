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
