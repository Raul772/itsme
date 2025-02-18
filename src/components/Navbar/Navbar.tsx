import logo from "../../assets/brand.png";
import { useClientContext } from "../../contexts/ClientContext";
import Anchor from "../Anchor/Anchor";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isMobile } = useClientContext();

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <img className={styles.logo} src={logo} alt="" />

        {isMobile ? (
          <Anchor to="">
            
          </Anchor>
        ) : (
          <div className={styles.navButtons}>
            <Anchor to="">Sobre mim</Anchor>
            <Anchor to="">Projetos</Anchor>
            <Anchor to="">Fale Comigo</Anchor>
          </div>
        )}
      </div>
    </nav>
  );
}
