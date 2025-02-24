import styles from "./Projects.module.css";
import Window from "./Window/Window";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className="title">Projetos</h2>
        <div>
          <Window />
        </div>
      </div>
    </section>
  );
}
