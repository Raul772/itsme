export default class Entity {
  x: number;
  y: number;

  nextX: number;
  nextY: number;

  static maxRadius = 90;
  static minRadius = 30;
  radius: number;

  color: string;

  movimentStep: number;
  movimentResistence: number;

  isExpired: boolean;

  img: HTMLImageElement;

  constructor(img: HTMLImageElement, x: number, y: number) {
    this.x = x;
    this.y = y;

    this.nextX = 0.1;
    this.nextY = 0.1;

    this.movimentStep = Math.random() * 0.02;
    this.movimentResistence = 0.01;

    this.radius =
      Math.random() * (Entity.maxRadius - Entity.minRadius) + Entity.minRadius;

    this.img = img;

    this.color = "#B3B3B3";

    this.isExpired = false;

    return this;
  }

  move() {
    this.x += this.nextX;
    this.y += this.nextY;

    this.nextX -= this.movimentStep;
    this.nextY -= this.movimentStep;

    const aux = Math.random() * this.movimentResistence;
    this.nextX += aux;
    this.nextY += aux;
  }

  Expire() {
    this.isExpired = innerWidth - Math.abs(this.x) < -100;
    this.isExpired = innerHeight - Math.abs(this.y) < -100;
  }

  render(context: CanvasRenderingContext2D) {
    context.globalCompositeOperation = "source-over";
    context.drawImage(this.img, this.x, this.y, this.radius, this.radius);
  }
}
