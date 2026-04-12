import WindowButton from "./WindowButton/WindowButton";
import styles from "./WindowTitleBar.module.css";

export default function WindowTitleBar({
  children,
  setIsOpen,
  style,
}: {
  children?: string;
  setIsOpen?: (isOpen: boolean) => void;
  style?: React.CSSProperties;
}) {
  return (
    <div className={styles.windowTitleBar} style={style}>
      <div>{children}</div>
      <div className={styles.windowTitleBarButtons}>
        {/* <WindowButton variant="Minimize" /> */}
        {/* <WindowButton variant="Maximize" /> */}
        <WindowButton variant="Close" onClick={() => setIsOpen && setIsOpen(false)} />
      </div>
    </div>
  );
}
