import { aboutData } from "@/data/about";
import box_circles from "@assets/box-circles.svg";
import box_eyes from "@assets/box-eyes.svg";
import stars_grouped from "@assets/Stars-grouped.svg";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutDecoration}>
          <img className={styles.bounce} src={box_eyes} alt="" />
          <img className={styles.bounce} src={stars_grouped} alt="" />
        </div>

        <div className={styles.aboutBox}>
          <h2 className="title">{aboutData.title}</h2>
          <p>{aboutData.content}</p>
        </div>

        <div className={styles.aboutDecoration}>
          <img className={styles.bounce} src={stars_grouped} alt="" />
          <img className={styles.bounce} src={box_circles} alt="" />
        </div>
      </div>
    </section>
  );
}
