import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/brand.png";
import downArrow from "../../../assets/down-arrow.svg";
import { useClientContext } from "../../contexts/ClientContext";
import Anchor from "../Anchor/Anchor";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isMobile } = useClientContext();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const navbar = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navbar.current?.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#hero">
          <img className={styles.logo} src={logo} alt="" />
        </a>
        <div ref={navbar}>
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
            <Anchor onClick={() => setOpenMenu(false)} to="#about">
              Sobre mim
            </Anchor>
            <Anchor onClick={() => setOpenMenu(false)} to="#projects">
              Projetos
            </Anchor>
            <Anchor onClick={() => setOpenMenu(false)} to="#contact">
              Fale Comigo
            </Anchor>
          </nav>
        </div>
      </div>
    </div>
  );
}
