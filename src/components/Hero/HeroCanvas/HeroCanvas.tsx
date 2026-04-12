import { Canvas } from "@react-three/fiber";
import styles from "./HeroCanvas.module.css";

import Scene from "./HeroCanvasScene";

export default function HeroCanvas() {
  return (
    <div className={styles.CanvasContainer}>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 20 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
