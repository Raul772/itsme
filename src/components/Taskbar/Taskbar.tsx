import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/brand.png";
import downArrow from "../../../assets/down-arrow.svg";
import { useClientContext } from "../../contexts/ClientContext";
import { useDesktopEnvContext } from "../../contexts/DesktopEnvContext";
import Window from "../../types/Window";
import About from "../About/About";
import Button from "../Button/Button";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import styles from "./Taskbar.module.css";

export default function Taskbar() {
  const { isMobile } = useClientContext();
  const { windows, setWindows } = useDesktopEnvContext();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const taskbar = useRef<HTMLDivElement | null>(null);

  function handleWindowOpen(window: Window) {
    const openedWindow = windows && windows.get(window.title);

    if (windows && openedWindow) return;

    setWindows((windows) => {
      if (!windows) return new Map([[window.title, window]]);
      return new Map([...windows, [window.title, window]]);
    });
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!taskbar.current?.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className={styles.taskbar}>
      <div className={`container ${styles.taskbarContainer}`}>
        <a href="#hero">
          <img className={styles.logo} src={logo} alt="" />
        </a>
        <div ref={taskbar}>
          {isMobile && (
            <Button aria-label="Menu" onClick={() => setOpenMenu(!openMenu)}>
              <img style={{ maxWidth: "20px" }} src={downArrow} alt="" />
            </Button>
          )}

          <nav
            className={`
              ${isMobile ? styles.navMobile : styles.navDesktop}
              ${openMenu && styles.navMobileActive}
          `}>
            <Button
              aria-label="About"
              key={"About"}
              onClick={() =>
                handleWindowOpen({
                  id: crypto.randomUUID(),
                  title: "About",
                  content: <About />,
                  isMinimized: false,
                })
              }>
              Sobre mim
            </Button>
            <Button
              aria-label="Projects"
              key={"Projects"}
              onClick={() =>
                handleWindowOpen({
                  id: crypto.randomUUID(),
                  title: "Projects",
                  content: <Projects />,
                  isMinimized: false,
                })
              }>
              Projetos
            </Button>
            <Button
              aria-label="Contact"
              key={"Contact"}
              onClick={() =>
                handleWindowOpen({
                  id: crypto.randomUUID(),
                  title: "Contact",
                  content: <Contact />,
                  isMinimized: false,
                })
              }>
              Contatos
            </Button>
            <Button
              aria-label="Footer"
              key={"Footer"}
              onClick={() =>
                handleWindowOpen({
                  id: crypto.randomUUID(),
                  title: "Footer",
                  content: <Footer />,
                  isMinimized: false,
                })
              }>
              Créditos
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
