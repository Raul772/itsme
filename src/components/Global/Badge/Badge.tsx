import React from "react";
import { WCCTAGS } from "../../Projects/Window/WindowContentCard/WindowContentCardTags";
import styles from "./Badge.module.css";

type BadgeProps = {
  type?: "PROJECTTAGS" | "TEXT";
  content?: (keyof typeof WCCTAGS)[] | string;
  children?: React.ReactNode;
};

export default function Badge({ type, content, children }: BadgeProps) {
  if (type === "PROJECTTAGS" && Array.isArray(content)) {
    return (
      <>
        <div className={styles.badge}>
          {content?.sort().map((e) => (
            <img key={e} src={WCCTAGS[e]} alt={e} />
          ))}
        </div>
        {children}
      </>
    );
  }

  if (type === "TEXT" && typeof content === "string") {
    return (
      <>
        <div className={styles.badge}>{content}</div>
        {children}
      </>
    );
  }
}
