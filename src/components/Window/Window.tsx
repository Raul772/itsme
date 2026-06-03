import { useEffect, useRef, useState } from "react";
import styles from "./Window.module.css";
import WindowTitleBar from "./WindowTitleBar";

interface Position {
  x: number;
  y: number;
}

let activeZIndex = 10;

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

  const bringToFront = () => {
    if (windowRef.current) {
      activeZIndex++;
      windowRef.current.style.zIndex = activeZIndex.toString();
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!windowRef.current) return;
    bringToFront();

    if ((e.target as HTMLElement).closest("button")) return;

    e.currentTarget.setPointerCapture(e.pointerId);

    const rect = windowRef.current.getBoundingClientRect();

    const computedStyle = window.getComputedStyle(windowRef.current);
    windowRef.current.style.width = computedStyle.width;

    windowRef.current.style.left = `${rect.left}px`;
    windowRef.current.style.top = `${rect.top}px`;
    windowRef.current.style.transform = "none";

    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !windowRef.current) return;
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;
    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  useEffect(() => {
    bringToFront();
  }, []);

  if (content)
    return (
      <div
        onPointerDown={bringToFront}
        ref={windowRef}
        className={`${styles.window} ${!isMinimized ? styles.open : styles.closed}`}
        data-os-window="true"
        autoFocus>
        <WindowTitleBar
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onPointerDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onPointerUp={handlePointerUp}>
          {title}
        </WindowTitleBar>
        <div className={styles.windowContentContainer}>
          <div className={styles.windowContent}>{content}</div>
        </div>
      </div>
    );
}
