import styles from "./Link.module.css";
import code from "../../../assets/code.svg";

type LinkProps = {
  href?: string;
  img?: string | null;
  children: string;
  shortcut?: boolean;
  onDoubleClick?: () => void;
};

export default function Link({
  href,
  img,
  children,
  shortcut,
  ...props
}: LinkProps) {
  
  let el = (
    <div className={styles.element} onDoubleClick={props.onDoubleClick}>
      <div
        className={`${styles.elementSelection} ${shortcut && styles.shortcut}`}>
        <div className={styles.elementOverlay}></div>
        <img className={styles.elementImage} src={img || code} alt="" />
      </div>
      <p className={styles.elementTitle}>{children}</p>
    </div>
  );

  el = href ? (
    <a {...props} href={href} target="_blank">
      {el}
    </a>
  ) : (
    el
  );

  return el;
}
