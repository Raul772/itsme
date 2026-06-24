import { ContactData } from "@/data/contacts";
import styles from "./Contact.module.css";
import Element from "./Element";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={`title ${styles.contactTitle}`}>Fale comigo!</h2>
        <div className={styles.contactElementsHolder}>
          {ContactData.map((contact, index) => (
            <Element
              key={index}
              shortcut={contact.shortcut}
              img={contact.img}
              href={contact.href}>
              {contact.title}
            </Element>
          ))}
        </div>
      </div>
    </section>
  );
}
