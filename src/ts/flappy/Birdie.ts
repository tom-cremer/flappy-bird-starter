import {Drawable} from "./Drawable";
import {IAnimatable} from "./Types/IAnimatable";
import {settings} from "./settings";

export class Birdie extends Drawable implements IAnimatable {
    private step: number;
    private maxAnimationStep: number;
    private x: number;
    private y: number;
    private fallSpeed: number;
    private frameCounter: number;


    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
        this.step = 0;
        this.x = canvas.width / settings.birdie.fractionX;
        this.y = canvas.width / settings.birdie.fractionY;
        this.maxAnimationStep = settings.birdie.frames.length - 1;
        this.fallSpeed = 0;
        this.frameCounter = 0
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.fallSpeed/settings.birdie.maxFallSpeed)
        this.ctx.drawImage(
            this.sprite,
            settings.birdie.frames[this.step].sx,
            settings.birdie.frames[this.step].sy,
            settings.birdie.width,
            settings.birdie.height,
            -settings.birdie.width/2,
            -settings.birdie.height/2,
            settings.birdie.width,
            settings.birdie.height,
        );
        this.ctx.restore();
    }

    update() {
        this.frameCounter++;
        if (this.frameCounter >= settings.birdie.maxFrameInterval) {
            this.step = (this.step >= this.maxAnimationStep) ? 0 : this.step + 1;
            this.frameCounter = 0;
        }
        this.y += this.fallSpeed;
        if (this.fallSpeed <= settings.birdie.maxFallSpeed) {
            this.fallSpeed += settings.birdie.gravity;
        }
        if (this.y >= 400) {
            this.y = 100;
        }
    }

    goUp() {
        this.fallSpeed = -settings.birdie.maxFallSpeed;
    }
}