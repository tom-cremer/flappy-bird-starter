import {Circle} from "./shapes/Circle";
import {Triangle} from "./shapes/Triangle";
import {Rectangle} from "./shapes/Rectangle";
import {Hsl} from "./colors/Hsl";
import {Rgb} from "./colors/Rgb";
import {Rgba} from "./colors/Rgba";

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

// const color = new Rgb(200, 100, 100);

const shapes = [
    new Circle(ctx, 150, 100, 30, new Rgb(50, 200, 75)),
    new Rectangle(ctx, 100, 150, 30, 10, 90, new Rgba(100, 100, 100, 0.5)),
    new Triangle(ctx, 50, 80, 50, 20, new Hsl(200, 25, 25)),
];

shapes.forEach((shape) => {
    shape.draw();
});
