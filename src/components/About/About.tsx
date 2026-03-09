import box_circles from "../../../assets/box-circles.svg";
import box_eyes from "../../../assets/box-eyes.svg";
import stars_grouped from "../../../assets/Stars-grouped.svg";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutDecoration}>
          <img src={box_eyes} alt="" />
          <img src={stars_grouped} alt="" />
        </div>

        <div className={styles.aboutBox}>
          <h2 className="title">Sobre mim</h2>
          <p>
            Sou graduado em{" "}
            <span className="highlight">Sistemas de Informação</span> pela{" "}
            <span className="highlight">
              Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)
            </span>{" "}
            com interesse em{" "}
            <span className="highlight">
              desenvolvimento fullstack e DevOps.
            </span>{" "}
            Tenho experiência com React, JavaScript, TypeScript, Python e Express,
            além de ORMs para bancos de dados. Também tenho noções sobre Docker e orquestração de containeres com Kubernetes. Possuo boas habilidades em comunicação
            interpessoal, trabalho em equipe e{" "}
            <span className="highlight">
              estou constantemente em busca de desafios!
            </span>
          </p>
        </div>

        <div className={styles.aboutDecoration}>
          <img src={stars_grouped} alt="" />
          <img src={box_circles} alt="" />
        </div>
      </div>
    </section>
  );
}
