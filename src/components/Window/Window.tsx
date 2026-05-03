import { useRef, useState } from "react";
import { useDesktopEnvContext } from "../../contexts/DesktopEnvContext";
import styles from "./Window.module.css";
import WindowTitleBar from "./WindowTitleBar";

interface Position {
  x: number;
  y: number;
}

export default function Window({
  isMinimized,
  title,
  content,
}: {
  isMinimized: boolean;
  title: string;
  content: React.ReactNode;
}) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const { windows, setWindows } = useDesktopEnvContext();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!windowRef.current) return;

    const rect = windowRef.current.getBoundingClientRect();

    windowRef.current.style.left = `${rect.left}px`;
    windowRef.current.style.top = `${rect.top}px`;
    windowRef.current.style.transform = "none";

    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !windowRef.current) return;
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;
    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWindowMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (windowRef.current) {
      setWindows((prevWindows) => {
        if (prevWindows) {
          const windowData = prevWindows.get(title);
          if (windowData) {
            const newWindows = new Map(prevWindows);
            newWindows.delete(title);
            newWindows.set(title, {
              id: windowData!.id,
              title,
              content,
              isMinimized: false,
            });
            return newWindows;
          }
        }
        return prevWindows;
      });
    }
  };

  if (content)
    return (
      <div
        onMouseDown={handleWindowMouseDown}
        ref={windowRef}
        className={`${styles.window} ${!isMinimized ? styles.open : styles.closed}`}>
        <WindowTitleBar
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          {title}
        </WindowTitleBar>
        <div className={styles.windowContentContainer}>
          <div className={styles.windowContent}>{content}</div>
        </div>
      </div>
    );
}
