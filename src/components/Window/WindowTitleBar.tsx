import { useDesktopEnvContext } from "../../contexts/DesktopEnvContext";
import WindowButton from "./WindowButton/WindowButton";
import styles from "./WindowTitleBar.module.css";

export default function WindowTitleBar({
  children,
  style,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
}: {
  children: string;
  style?: React.CSSProperties;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onMouseMove: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
}) {
  const { setWindows } = useDesktopEnvContext();

  return (
    <div
      className={styles.windowTitleBar}
      style={style}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}>
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
