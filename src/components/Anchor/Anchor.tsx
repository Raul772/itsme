import { ComponentProps } from "react";
import styles from "./Anchor.module.css";

type AnchorProps = ComponentProps<"a"> & {
  to: string;
};

export default function Anchor({ children, to, ...props}: AnchorProps) {
  return (
    <div className={styles.anchor}>
      <a href={to} {...props}>{children}</a>
    </div>
  );
}
