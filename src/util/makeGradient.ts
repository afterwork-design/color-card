import { GradientColor } from "src/server";
export const makeLinearGradient = (gradient: GradientColor) => {
    let res = `linear-gradient(${gradient.deg}deg`;
    gradient.colors.forEach((color) => {
        res += `, ${color.color} ${color.pos ?? ""}`;
    });
    res += ")";
    return res;
};
