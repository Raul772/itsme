import StarLine from "../../../assets/Star-Line.svg";
import styles from "./Hero.module.css";
import MovingEntities from "./MovingEntities/MovingEntities";
import Photo from "./Photo";
import TitleText from "./TitleText";

export default function Hero() {
  const img = document.createElement("img");
  img.src = StarLine;

  return (
    <section id="hero" className={`container ${styles.hero}`}>
      <TitleText />
      <Photo />
      <MovingEntities img={img} />
    </section>
  );
}
