import { CameraControls, shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { folder, useControls, useCreateStore } from "leva";
import * as THREE from "three";
import styles from "./HeroCanvas.module.css";

import { useRef } from "react";
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

const CustomPlaneMaterial = shaderMaterial(
  {
    uColor: new THREE.Color("#ff0000"),
    uTime: 0,
  },
  vertexShader,
  fragmentShader,
);

extend({ CustomPlaneMaterial });

function Scene() {
  const materialRef = useRef<typeof CustomPlaneMaterial>(null);

  const store = useCreateStore();

  const {
    color,
    intensity,
    widthSegments,
    heightSegments,
    width,
    height,
    useSegments,
  } = useControls(
    {
      appearance: folder({
        color: "#ff0000",
        intensity: { value: 1, min: 0, max: 1 },
      }),
      grid: folder({
        width: { value: 20, min: 1, max: 20, step: 1 },
        height: { value: 20, min: 1, max: 20, step: 1 },
        useSegments: true,
        widthSegments: {
          value: 20,
          min: 1,
          max: 200,
          step: 1,
          render: (get) => get("grid.useSegments"),
        },
        heightSegments: {
          value: 20,
          min: 1,
          max: 200,
          step: 1,
          render: (get) => get("grid.useSegments"),
        },
      }),
    },
    { store: undefined },
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <>
      <ambientLight intensity={intensity * 0.5} />
      <pointLight position={[10, 10, 10]} intensity={intensity} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry
          args={[
            width,
            height,
            useSegments ? widthSegments : width,
            useSegments ? heightSegments : height,
          ]}
        />
        <customPlaneMaterial
          ref={materialRef}
          uColor={color}
          wireframe={false}
        />
      </mesh>

      <CameraControls makeDefault />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className={styles.CanvasContainer}>
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
