import WindowButton from "./WindowButton/WindowButton";
import styles from "./WindowTitleBar.module.css";

export default function WindowTitleBar({
  children,
}: {
  children?: string;
}) {
  return (
    <div className={styles.windowTitleBar}>
      <div>{children}</div>
      <div className={styles.windowTitleBarButtons}>
        <WindowButton variant="Minimize" />
        <WindowButton variant="Maximize" />
        <WindowButton variant="Close" />
      </div>
    </div>
  );
}
