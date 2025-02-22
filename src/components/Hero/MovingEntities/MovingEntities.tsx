import Entity from "./Entity";
import styles from "./MovingEntities.module.css";

export default function MovingEntities({ img }: { img: HTMLImageElement }) {
  const NUMBER_STARS = 20;
  let context: CanvasRenderingContext2D | null;

  function draw(canvas: null | HTMLCanvasElement) {
    const entities: Entity[] = [];

    if (canvas && img.complete) {
      context = canvas.getContext("2d");

      if (!context) throw new Error("Context not found");

      canvas.width = innerWidth;
      canvas.height = innerHeight;

      for (let i = 0; i < NUMBER_STARS; i++) {
        entities.push(starCreator());
      }

      function starCreator() {
        const x = Math.random() * 1.5 * innerWidth;
        const y = Math.random() * innerHeight + innerHeight;
        return new Entity(img, x, y);
      }

      (function updateFrame() {
        if (context && canvas) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          entities.forEach((entity, i) => {
            if (entity.isExpired) {
              entities.splice(i, 1);
              entities.push(starCreator());
            } else {
              entity.move();
              entity.Expire();
              if (context) entity.render(context);
            }
          });
        }

        requestAnimationFrame(updateFrame);
      })();
    }
  }

  return (
    <canvas
      ref={draw}
      width={300}
      height={300}
      className={styles.entities}></canvas>
  );
}
