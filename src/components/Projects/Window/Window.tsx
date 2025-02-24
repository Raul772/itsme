import { useState } from "react";
import { Projetos } from "../../../Constants/Constants";
import styles from "./Window.module.css";
import WindowContentCard, {
  IWDCData,
} from "./WindowContentCard/WindowContentCard";
import WindowTitleBar from "./WindowTitleBar";

export default function Window() {
  const [data, setData] = useState<IWDCData | null>(Projetos[0]);

  if (data)
    return (
      <div className={styles.window}>
        <WindowTitleBar></WindowTitleBar>
        <div className={styles.windowContentContainer}>
          <div className={styles.windowContentList}>
            {Projetos.map((e) => (
              <WindowContentCard
                key={e.title}
                onClick={() => setData(e)}
                data={e}
              />
            ))}
          </div>

          <div className={styles.windowContentDetails}>
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
        </div>
      </div>
    );
}
