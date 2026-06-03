import { IWDCData } from "../Window/WindowContentCard/WindowContentCard";
import styles from "./Project.module.css";

export const Project = ({ data }: { data: IWDCData }) => {
  return (
    <div className={styles.ProjectContainer}>
      {data.img && (
        <img className={styles.WCDimg} src={data.img} alt={data.title} />
      )}
      <a href={data.href} target="_blank">
        {data.title}
      </a>
      <p className={styles.WCDDescription}>{data.description}</p>
      <div className={styles.WCDTags}>
        {data.tags.sort().map((e) => (
          <div key={e} className={styles.WDCTag}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};
