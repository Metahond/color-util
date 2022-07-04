export type Colors =
    | 'hex'
    | 'rgb'
    | 'rgba'
    | 'hsl'
    | 'hsla'
    | 'hsv'
    | 'hsva'
    | 'hwb'
    | 'hwba'
    | 'cymk';

/** A color representation in hexadecimal format. */
export interface HexColor {
    /** The color in hexadecimal format. */
    hex: string;
}

/** A color representation in RGB format. */
export interface RGBColor {
    /** The red value of the color. */
    r: number;

    /** The green value of the color. */
    g: number;

    /** The blue value of the color. */
    b: number;

    /** The alpha value of the color. */
    a?: number;
}

/** A color representation in HSL format. */
export interface HSLColor {
    /** The hue value of the color in degrees. */
    h: number;

    /** The saturation value of the color in percent. */
    s: number;

    /** The lightness value of the color in percent. */
    l: number;

    /** The alpha value of the color. */
    a?: number;
}

/** A color representation in HSV format. */
export interface HSVColor {
    /** The hue value of the color in degrees. */
    h: number;

    /** The saturation value of the color in percent. */
    s: number;

    /** The "value" (brightness) of the color in percent. */
    v: number;

    /** The alpha value of the color. */
    a?: number;
}

/** A color representation in HWB format. */
export interface HWBColor {
    /** The hue value of the color in degrees. */
    h: number;

    /** The whiteness value of the color in percent. */
    w: number;

    /** The blackness value of the color in percent. */
    b: number;

    /** The alpha value of the color in percent. */
    a?: number;
}

/** A color representation in CYMK format. */
export interface CYMKColor {
    /** The cyan value of the color. */
    c: number;

    /** The yellow value of the color. */
    y: number;

    /** The magenta value of the color. */
    m: number;

    /** The key (black) value of the color. */
    k: number;
}
