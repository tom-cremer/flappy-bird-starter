import {Drawable} from "./Drawable";
import {settings} from "./settings";
import {IAnimatable} from "./Types/IAnimatable";

export class Ground extends Drawable implements IAnimatable {
    private dx: number;
    private readonly dy: number;
    private readonly maxOffset: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
        this.dx = 0;
        this.dy = canvas.height - settings.ground.frame.sh;
        this.maxOffset = settings.ground.frame.sw - this.canvas.width;
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.ground.frame.sx,
            settings.ground.frame.sy,
            settings.ground.frame.sw,
            settings.ground.frame.sh,
            this.dx,
            this.dy,
            settings.ground.frame.dw,
            settings.ground.frame.dh,
        );
    }

    update() {
        if (this.dx <= -this.maxOffset) {
            this.dx = 0;
        } else {
            this.dx--;
        }
    }
}