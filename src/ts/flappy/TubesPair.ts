import {Drawable} from "./Drawable";
import {IAnimatable} from "./Types/IAnimatable";
import {Random} from "../framework/heplers/Random";
import {settings} from "./settings";

export class TubesPair extends Drawable implements IAnimatable {

    private topY: number;
    private x: number;
    private bottomY: number;


    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
        this.x = this.canvas.width;
        this.topY = Random.int(settings.tubes.randomY.min, settings.tubes.randomY.max);
        this.bottomY = this.topY + settings.tubes.sh + settings.tubes.gap;
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.tubes.top.sx,
            settings.tubes.top.sy,
            settings.tubes.sw,
            settings.tubes.sh,
            this.x,
            this.topY,
            settings.tubes.dw,
            settings.tubes.dh,

        );
        this.ctx.drawImage(
            this.sprite,
            settings.tubes.bottom.sx,
            settings.tubes.bottom.sy,
            settings.tubes.sw,
            settings.tubes.sh,
            this.x,
            this.bottomY,
            settings.tubes.dw,
            settings.tubes.dh,

        );

    }

    update() {
        this.x -= settings.tubes.speed;

    }

}