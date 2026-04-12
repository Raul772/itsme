import StarLine from "../../../assets/Star-Line.svg";
import Canvas from "./HeroCanvas/HeroCanvas";
import styles from "./Hero.module.css";
import Photo from "./Photo";
import TitleText from "./TitleText";

export default function Hero() {
  const img = document.createElement("img");
  img.src = StarLine;

  return (
    <section id="hero" className={`${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <TitleText />
        <Photo />
      </div>
      <Canvas />
      {/* <MovingEntities img={img} /> */}
    </section>
  );
}
