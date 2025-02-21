import StarLine from "../../../../assets/Star-Line.svg";
import Star from "./Star";
import styles from "./Stars.module.css";

export default function Stars() {
  const NUMBER_STARS = 10;
  let context: CanvasRenderingContext2D | null;

  function draw(canvas: null | HTMLCanvasElement) {
    const stars: Star[] = [];
    const img = document.createElement("img");
    img.src = StarLine;

    if (canvas && img.complete) {
      context = canvas.getContext("2d");

      if (!context) throw new Error("Context not found");

      canvas.width = innerWidth;
      canvas.height = innerHeight;

      for (let i = 0; i < NUMBER_STARS; i++) {
        stars.push(starCreator());
      }

      function starCreator() {
        const x = Math.random() * innerWidth + innerWidth;
        const y = Math.random() * innerHeight + innerHeight;
        return new Star(img, x, y);
      }

      (function updateFrame() {
        if (context && canvas) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          stars.forEach((star, i) => {
            if (star.isExpired) {
              stars.splice(i, 1);
              stars.push(starCreator());
            } else {
              star.move();
              star.Expire();
              if (context) star.render(context);
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
      className={styles.stars}></canvas>
  );
}
