import { useState } from "react";
import logo from "../../../assets/brand.png";
import downArrow from "../../../assets/down-arrow.svg";
import { useClientContext } from "../../contexts/ClientContext";
import Anchor from "../Anchor/Anchor";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isMobile } = useClientContext();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <img className={styles.logo} src={logo} alt="" />

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
          <Anchor to="#about">Sobre mim</Anchor>
          <Anchor to="#projects">Projetos</Anchor>
          <Anchor to="#contact">Fale Comigo</Anchor>
        </nav>
      </div>
    </div>
  );
}
