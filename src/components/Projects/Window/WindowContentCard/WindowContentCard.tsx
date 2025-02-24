import { ComponentProps } from "react";
import styles from "./windowContentCard.module.css";
import { WCCTAGS } from "./WindowContentCardTags";

export type IWDCData = {
  title: string;
  img?: string;
  href?: string;
  description: string;
  tags: (keyof typeof WCCTAGS)[];
};

type windowContentCardProps = ComponentProps<"button"> & {
  data: IWDCData;
  onClick: (e: IWDCData) => void;
};

export default function WindowContentCard({
  data,
  onClick,
  ...props
}: windowContentCardProps) {
  return (
    <button {...props} onClick={onClick} className={styles.windowContentCard}>
      <p className={styles.windowContentCardTitle}>{data.title}</p>
      <div className={styles.windowContentCardTags}>
        {data.tags.sort().map((e) => (
          <img key={e} src={WCCTAGS[e]} alt={e} />
        ))}
      </div>
    </button>
  );
}
