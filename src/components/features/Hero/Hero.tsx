import styles from "./Hero.module.css";
import Canvas from "./HeroCanvas/HeroCanvas";
import Photo from "./Photo";
import TitleText from "./TitleText";

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <TitleText />
        <Photo />
      </div>
      <Canvas />
    </section>
  );
}
