import {Background} from "./Background";
import {Ground} from "./Ground";
import {IAnimatable} from "./Types/IAnimatable";
import {TubesPairs} from "./TubesPairs";
import {Birdie} from "./Birdie";
import {IGameStatus} from "./Types/IGameStatus";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const sprite = new Image();
sprite.src = 'src/resources/sprite.png';

const gameStatus: IGameStatus = {
    requestAnimationFrameId: 0,
}

const tubesPairs = new TubesPairs(canvas, ctx, sprite);
const birdie = new Birdie(canvas, ctx, sprite, tubesPairs.tubesPairs, gameStatus);

const drawables: IAnimatable[] = [
    new Background(canvas, ctx, sprite),
    birdie,
    tubesPairs,
    new Ground(canvas, ctx, sprite),
];

function animate() {
    gameStatus.requestAnimationFrameId = window.requestAnimationFrame(animate);

    drawables.forEach((drawable) => {
        drawable.draw();
        drawable.update();
    });
}

sprite.addEventListener('load', () => {
    animate();

    window.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowUp') {
            birdie.goUp();
        }
    });
});