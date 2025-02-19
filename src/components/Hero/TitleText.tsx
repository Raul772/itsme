import styles from './TitleText.module.css'

export default function TitleText(){
  return <div className={styles.title}>
    <p className={styles.firstLine}>Olá, eu sou o</p> 
    <p className={styles.secondLine}>Raul Victor</p>
    </div>;
};
