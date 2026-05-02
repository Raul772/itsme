import { useState } from "react";
import { useDesktopEnvContext } from "../../contexts/DesktopEnvContext";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";

export default function DesktopEnvironment() {
  const { windows, setWindows } = useDesktopEnvContext();

  return (
    <>
      <Taskbar />
      <article>
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
