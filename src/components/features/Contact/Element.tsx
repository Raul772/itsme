import { ComponentProps } from "react";
import styles from "./Element.module.css";

type ElementProps = ComponentProps<"a"> & {
  img: string;
  children: string;
  shortcut?: boolean;
};

export default function Element({
  href,
  img,
  children,
  shortcut,
  ...props
}: ElementProps) {
  return (
    <a className={styles.element} {...props} href={href} target="_blank">
      <div
        className={`${styles.elementSelection}  ${
          shortcut && styles.shortcut
        }`}>
        <div className={styles.elementOverlay}></div>
        <img className={styles.elementImage} src={img} alt="" />
      </div>
      <p className={styles.elementTitle}>{children}</p>
    </a>
  );
}
