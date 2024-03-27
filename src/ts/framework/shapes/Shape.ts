import {IColor} from "../types/IColor";

export abstract class Shape implements IColor {
    protected readonly ctx: CanvasRenderingContext2D;
    protected x: number;
    protected y: number;
    protected color: IColor;

    protected constructor(ctx: CanvasRenderingContext2D, x: number, y: number,  color: IColor) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.color = color;
    }
}