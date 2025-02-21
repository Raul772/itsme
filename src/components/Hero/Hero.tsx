import styles from "./Hero.module.css";
import Photo from "./Photo";
import TitleText from "./TitleText";

export default function Hero() {
  return (
    <section id="hero" className={`container ${styles.hero}`}>
      <TitleText />
      <Photo />
    </section>
  );
}
