import { useEffect, useRef, useState } from "react";
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
    bringToFront();
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

  const bringToFront = () => {
    if (!windowRef.current) return;
    const currentEl = windowRef.current;

    const allWindows = Array.from(
      document.querySelectorAll<HTMLElement>('[data-os-window="true"]'),
    );

    allWindows.sort((a, b) => {
      const zA = parseInt(a.style.zIndex || "10", 10);
      const zB = parseInt(b.style.zIndex || "10", 10);
      return zA - zB;
    });

    const reorderedWindows = allWindows.filter((w) => w !== currentEl);
    reorderedWindows.push(currentEl);

    reorderedWindows.forEach((w, index) => {
      w.style.zIndex = (10 + index).toString();
    });
  };

  useEffect(() => {
    bringToFront();
  }, []);

  if (content)
    return (
      <div
        onMouseDown={bringToFront}
        ref={windowRef}
        className={`${styles.window} ${!isMinimized ? styles.open : styles.closed}`}
        data-os-window="true"
        autoFocus>
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
