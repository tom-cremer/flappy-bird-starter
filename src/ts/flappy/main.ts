import {Background} from "./Background";
import {Ground} from "./Ground";
import {IAnimatable} from "./Types/IAnimatable";
import {TubesPair} from "./TubesPair";
import {TubesPairs} from "./TubesPairs";
import {Birdie} from "./Birdie";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const sprite = new Image();
sprite.src = 'src/resources/sprite.png';
const birdie = new Birdie(canvas, ctx, sprite);
const drawables: IAnimatable[] = [
    new Background(canvas, ctx, sprite),
    new TubesPairs(canvas, ctx, sprite),
    new Ground(canvas, ctx, sprite),
    birdie,
];


function animate() {
    drawables.forEach((drawable) => {
        drawable.draw();
        drawable.update();
    });

    window.requestAnimationFrame(animate);
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        birdie.goUp();
    }
});

sprite.addEventListener('load', () => {
    animate();
});