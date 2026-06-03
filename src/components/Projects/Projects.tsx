import { Projetos } from "../../Constants/Constants";
import { useDesktopEnvContext } from "../../contexts/DesktopEnvContext";
import { IWDCData } from "../../types/IWDCData";
import Badge from "../Global/Badge/Badge";
import Link from "./Link";
import { Project } from "./Project/Project";
import styles from "./Projects.module.css";

export default function Projects() {
  const { windows, setWindows } = useDesktopEnvContext();

  function handleProjectClick(p: IWDCData) {
    const openedWindow = windows && windows.get(p.title);

    if (windows && openedWindow) return;

    setWindows((windows) => {
      const newWindows = new Map(windows);
      newWindows.set(p.title, {
        title: p.title,
        content: <Project data={p} />,
        id: crypto.randomUUID(),
        isMinimized: false,
      });
      return newWindows;
    });
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className="title">Projetos</h2>
        <div className={styles.projectsIconContent}>
          {Projetos.map((p) => (
            <div key={p.title}>
              <Badge type="PROJECTTAGS" content={p.tags}>
                <Link img={p.img!} onClick={() => handleProjectClick(p)}>
                  {p.title}
                </Link>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
