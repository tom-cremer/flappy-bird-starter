import {settings} from "./settings";
import {Drawable} from "./Drawable";
import {IAnimatable} from "./Types/IAnimatable";

export class Background extends Drawable implements IAnimatable {
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.background.frame.sx,
            settings.background.frame.sy,
            settings.background.frame.sw,
            settings.background.frame.sh,
            settings.background.frame.dx,
            settings.background.frame.dy,
            settings.background.frame.dw,
            settings.background.frame.dh,
        );
    }

    update() {} // No need to update the background because it's static
}