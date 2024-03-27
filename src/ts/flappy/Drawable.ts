import {IAnimatable} from "./Types/IAnimatable";

export abstract class Drawable implements IAnimatable {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected sprite: HTMLImageElement;

    protected constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.sprite = sprite;
    }

    draw(): void {
    }

    update(): void {
    }
}