import fourJson from "./palette.json";
import gradientJson from "./gradient.json";

export type FourColor = [string, string, string, string];

export interface GradientColorItem {
    color: string;
    pos: string;
}

export interface GradientColor {
    deg: number;
    colors: {
        color: string;
        pos?: string;
    }[];
}

export interface ColorType<T> {
    zh: string;
    en: string;
    colors: T[];
}

export type Four = ColorType<FourColor>;
export type Gradient = ColorType<GradientColor>;
export const four = fourJson as Four;
export const paletteDefaultShowColor = four.colors[0];
export const gradient = gradientJson as Gradient;
