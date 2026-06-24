import Window from "@/components/ui/Window/Window";
import { useDesktopEnvContext } from "@/contexts/DesktopEnvContext";
import Taskbar from "../Taskbar/Taskbar";
import styles from "./DesktopEnvironment.module.css";

export default function DesktopEnvironment() {
  const { windows } = useDesktopEnvContext();

  const desktopEnvStyle =
    windows && windows.size !== 0
      ? { backdropFilter: "blur(3px) brightness(0.90) saturate(0.8)" }
      : {};

  return (
    <>
      <Taskbar />
      <article className={styles.desktopEnvironment} style={desktopEnvStyle}>
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
