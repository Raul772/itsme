import { useDraggable } from "@/hooks/useDraggable";
import { useEffect } from "react";
import styles from "./Window.module.css";
import WindowTitleBar from "./WindowTitleBar";

export default function Window({
  isMinimized,
  title,
  content,
}: {
  isMinimized: boolean;
  title: string;
  content: React.ReactNode;
}) {
  const { nodeRef, bringToFront, dragHandlers, isDragging } = useDraggable();

  useEffect(() => {
    bringToFront();
  }, [bringToFront]);

  if (content)
    return (
      <div
        onPointerDown={bringToFront}
        ref={nodeRef}
        className={`${styles.window} ${!isMinimized ? styles.open : styles.closed}`}
        data-os-window="true"
        autoFocus>
        <WindowTitleBar
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onPointerDown={dragHandlers.onPointerDown}
          onMouseMove={dragHandlers.onPointerMove}
          onPointerUp={dragHandlers.onPointerUp}>
          {title}
        </WindowTitleBar>
        <div className={styles.windowContentContainer}>
          <div className={styles.windowContent}>{content}</div>
        </div>
      </div>
    );
}
