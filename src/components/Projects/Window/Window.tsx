import { useEffect, useRef, useState } from "react";
import styles from "./Window.module.css";
import { IWDCData } from "./WindowContentCard/WindowContentCard";
import WindowTitleBar from "./WindowTitleBar";

interface Position {
  x: number;
  y: number;
}

export default function Window({
  setIsOpen,
  isOpen,
  data,
}: {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  data: IWDCData | null;
}) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (isOpen && !hasOpened && windowRef.current) {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const sectionRect = projectsSection.getBoundingClientRect();
        const windowWidth = windowRef.current.offsetWidth;
        const windowHeight = windowRef.current.offsetHeight;

        const centerX = (sectionRect.width - windowWidth) / 2;
        const centerY = (sectionRect.height - windowHeight) / 2;

        windowRef.current.style.left = `${centerX}px`;
        windowRef.current.style.top = `${centerY}px`;
      }
      setHasOpened(true);
    }
  }, [isOpen, hasOpened]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!windowRef.current) return;

    const style = window.getComputedStyle(windowRef.current);
    const left = parseInt(style.left, 10);
    const top = parseInt(style.top, 10);

    setOffset({
      x: e.clientX - left,
      y: e.clientY - top,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !windowRef.current) return;

    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (data)
    return (
      <div
        ref={windowRef}
        className={`${styles.window} ${isOpen ? styles.open : styles.closed}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>
        <WindowTitleBar
          setIsOpen={setIsOpen}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          {data.title}
        </WindowTitleBar>
        <div className={styles.windowContentContainer}>
          {/* <div className={styles.windowContentList}>
            {Projetos.map((e) => (
              <WindowContentCard
                key={e.title}
                onClick={() => setData(e)}
                data={e}
              />
            ))}
          </div> */}

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
