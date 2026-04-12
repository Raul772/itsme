import { useRef } from "react";

import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";

// @ts-expect-error Avoid TypeScript errors for GLSL imports, since vite-plugin-glsl is configured
import fragmentShader from "./shaders/fragment.glsl";
// @ts-expect-error Avoid TypeScript errors for GLSL imports, since vite-plugin-glsl is configured
import vertexShader from "./shaders/vertex.glsl";
import { CustomPlaneMaterialType } from "./types/CustomPlaneMaterialType";

const CustomPlaneMaterial = shaderMaterial(
  {
    uColor1: new THREE.Color("#f6daf5"), 
    uColor2: new THREE.Color("#e5f1fb"), 
    uColor3: new THREE.Color("#98a6e7"), 
    uColor4: new THREE.Color("#f3bef3"), 
    uIntensity: 1,
    uTime: 0,
  },
  vertexShader,
  fragmentShader,
);

extend({ CustomPlaneMaterial });

export default function Scene() {
  const materialRef = useRef<CustomPlaneMaterialType>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <>
      <mesh
        rotation={[(-Math.PI * 65) / 180, 0, (-Math.PI * 60) / 180]}
        position={[0, 0, -6]}>
        <planeGeometry args={[25, 25, 128, 128]} />
        <customPlaneMaterial
          ref={materialRef}
          uIntensity={1}
          wireframe={false}
        />
      </mesh>
    </>
  );
}
