import {Drawable} from "./Drawable";
import {IAnimatable} from "./Types/IAnimatable";
import {settings} from "./settings";
import {TubesPair} from "./TubesPair";
import {IGameStatus} from "./Types/IGameStatus";

export class Birdie extends Drawable implements IAnimatable {
    private step: number;
    private x: number;
    private y: number;
    private maxAnimationStep: number;
    private fallSpeed: number;
    private frameCounter: number;
    private tubesPairs: TubesPair[];
    private gameStatus: IGameStatus;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        sprite: HTMLImageElement,
        tubesPairs: TubesPair[],
        gameStatus:IGameStatus,
    ) {
        super(canvas, ctx, sprite);
        this.step = 0;
        this.x = canvas.width / settings.birdie.fractionX;
        this.y = canvas.height / settings.birdie.fractionY;
        this.maxAnimationStep = settings.birdie.frames.length - 1;
        this.frameCounter = 0;
        this.fallSpeed = 0;
        this.tubesPairs = tubesPairs;
        this.gameStatus = gameStatus;
    }

    draw(): void {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.fallSpeed / settings.birdie.maxFallSpeed);
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

    update(): void {
        this.frameCounter++;
        if (this.frameCounter >= settings.birdie.maxFrameInterval) {
            this.frameCounter = 0;
            if (++this.step > this.maxAnimationStep) {
                this.step = 0;
            }
        }
        // faire descendre le birdie
        if (this.fallSpeed <= settings.birdie.maxFallSpeed) {
            this.fallSpeed += settings.birdie.gravity;
        }
        this.checkCollisionWithGround();
        this.checkCollisionWithTubes();
        this.y += this.fallSpeed;
    }

    // faire monter le birdie
    goUp() {
        this.fallSpeed = -settings.birdie.maxFallSpeed;
    }

    private checkCollisionWithGround() {
        const groundY = this.canvas.height - settings.ground.frame.sh;

        if (this.y + settings.birdie.height / 2 >= groundY) {
            this.y = groundY - settings.birdie.height / 2;
            this.goUp();
        }
    }

    private checkCollisionWithTubes() {
        this.tubesPairs.forEach((tubesPair: TubesPair) => {
            if (this.x + settings.birdie.width / 2 > tubesPair.x &&
                this.x - settings.birdie.width / 2 < tubesPair.x + settings.tubes.sw) {

                if ((this.y - settings.birdie.height / 2) < tubesPair.topY + settings.tubes.sh ||
                    (this.y + settings.birdie.height / 2) > tubesPair.bottomY) {

                    cancelAnimationFrame(this.gameStatus.requestAnimationFrameId);

                    console.log('nice touché'); // game over
                    console.log(this.gameStatus.requestAnimationFrameId); // 0
                }
            }
        });
    }
}