import { useRef, useState } from "react";
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

  if (content)
    return (
      <div
        ref={windowRef}
        className={`${styles.window} ${!isMinimized ? styles.open : styles.closed}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>
        <WindowTitleBar style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          {title}
        </WindowTitleBar>
        <div className={styles.windowContentContainer}>{content}</div>
      </div>
    );
}
