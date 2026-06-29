import { Canvas } from "@react-three/fiber";
import styles from "./HeroCanvas.module.css";

import { useDesktopEnvContext } from "@/contexts/DesktopEnvContext";
import Scene from "./HeroCanvasScene";

export default function HeroCanvas() {
  const { windows } = useDesktopEnvContext();
  const hasOpenWindows = windows !== null && windows.size > 0;

  return (
    <div className={styles.CanvasContainer}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 20 }}
        frameloop={hasOpenWindows ? "demand" : "always"}>
        <Scene isPaused={hasOpenWindows} />
      </Canvas>
    </div>
  );
}
