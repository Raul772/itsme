import { useState } from "react";
import { Projetos } from "../../Constants/Constants";
import Badge from "../Global/Badge/Badge";
import Link from "./Link";
import styles from "./Projects.module.css";
import Window from "./Window/Window";
import { IWDCData } from "./Window/WindowContentCard/WindowContentCard";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IWDCData | null>(Projetos[0]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className="title">Projetos</h2>
        <div className={styles.projectsIconContent}>
          {Projetos.map((p) => (
            <div key={p.title}>
              <Badge type="PROJECTTAGS" content={p.tags}>
                <Link img={p.img!} onDoubleClick={() => { setData(p); setIsOpen(true); }} >
                  {p.title}
                </Link>
              </Badge>
            </div>
          ))}

          <Window setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
        </div>
      </div>
    </section>
  );
}
