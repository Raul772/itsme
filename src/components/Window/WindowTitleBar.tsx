import { useDesktopEnvContext } from "../../contexts/DesktopEnvContext";
import WindowButton from "./WindowButton/WindowButton";
import styles from "./WindowTitleBar.module.css";

export default function WindowTitleBar({
  children,
  style,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: {
  children: string;
  style?: React.CSSProperties;
  onPointerDown: React.PointerEventHandler<HTMLDivElement>;
  onPointerMove: React.PointerEventHandler<HTMLDivElement>;
  onPointerUp: React.PointerEventHandler<HTMLDivElement>;
}) {
  const { setWindows } = useDesktopEnvContext();

  return (
    <div
      className={styles.windowTitleBar}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}>
      <div>{children}</div>
      <div className={styles.windowTitleBarButtons}>
        {/* <WindowButton variant="Minimize" /> */}
        {/* <WindowButton variant="Maximize" /> */}
        <WindowButton
          variant="Close"
          onClick={() => {
            setWindows((prev) => {
              const newWindows = new Map(prev);
              newWindows.delete(children);
              return newWindows;
            });
          }}
        />
      </div>
    </div>
  );
}
