import { TAGS } from "@/types/Tags";
import React from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  type?: "PROJECTTAGS" | "TEXT";
  content?: (keyof typeof TAGS)[] | string;
  children?: React.ReactNode;
};

export default function Badge({ type, content, children }: BadgeProps) {
  if (type === "PROJECTTAGS" && Array.isArray(content)) {
    return (
      <>
        <div className={styles.badge}>
          {content?.sort().map((e) => (
            <img key={e} src={TAGS[e]} alt={e} />
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
