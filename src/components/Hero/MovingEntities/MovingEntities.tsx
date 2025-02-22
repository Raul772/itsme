import { useEffect, useRef } from "react";
import Entity from "./Entity";
import styles from "./MovingEntities.module.css";

export default function MovingEntities({ img }: { img: HTMLImageElement }) {
  const NUMBER_STARS = 20;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    function draw(canvas: null | HTMLCanvasElement) {
      const entities: Entity[] = [];

      if (canvas && img.complete) {
        const context: CanvasRenderingContext2D | null =
          canvas.getContext("2d");

        if (!context) throw new Error("Context not found");

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        // window.addEventListener("resize", () => {
        //   canvas.width = innerWidth;
        //   canvas.height = innerHeight;
        // });

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

    const handleResize = () => {
      if (canvas) {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    draw(canvas);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, [img]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      className={styles.entities}></canvas>
  );
}
