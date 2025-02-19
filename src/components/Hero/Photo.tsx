import foto from "../../../assets/Foto.png";
import styles from "./Photo.module.css";

export default function Photo() {
  return (
    <div className={styles.photoContainer}>
      <div className={styles.fotoFrame}>
        <img className={styles.foto} src={foto} alt="" />
      </div>
    </div>
  );
}
