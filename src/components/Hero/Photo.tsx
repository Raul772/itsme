import foto from "../../../assets/Foto.png";
import styles from "./Photo.module.css";

export default function Photo() {
  return (
    <div className={styles.photoContainer}>
      <img className={styles.photo} src={foto} alt="" />
    </div>
  );
}
