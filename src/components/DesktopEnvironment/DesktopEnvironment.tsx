import { useDesktopEnvContext } from "../../contexts/DesktopEnvContext";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import styles from "./DesktopEnvironment.module.css";

export default function DesktopEnvironment() {
  const { windows } = useDesktopEnvContext();

  return (
    <>
      <Taskbar />
      <article className={styles.desktopEnvironment}>
        {windows &&
          Array.from(windows.entries()).map(([title, window]) => (
            <Window
              isMinimized={window.isMinimized}
              key={window.id}
              content={window.content}
              title={title}
            />
          ))}
      </article>
    </>
  );
}
