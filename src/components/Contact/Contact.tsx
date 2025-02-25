import document from "../../../assets/Document.svg";
import github from "../../../assets/Github.svg";
import linkedin from "../../../assets/LinkedIn.svg";
import styles from "./Contact.module.css";
import Element from "./Element";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={`title ${styles.contactTitle}`}>Fale comigo!</h2>
        <div className={styles.contactElementsHolder}>
          <Element
            shortcut
            img={linkedin}
            href="https://www.linkedin.com/in/raulvictor772/">
            LinkedIn
          </Element>
          <Element shortcut img={github} href="https://github.com/Raul772">
            Github
          </Element>
          <Element
          shortcut
            img={document}
            href="https://drive.google.com/file/d/1QeyzetkbqU44_2stuSDrwIgQvL_tdsNk/view?usp=sharing">
            Currículo
          </Element>
        </div>
      </div>
    </section>
  );
}
