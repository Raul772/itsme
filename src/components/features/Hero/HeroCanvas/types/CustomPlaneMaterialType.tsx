import * as THREE from "three";

export type CustomPlaneMaterialType = THREE.ShaderMaterial & {
  uColor1: THREE.Color;
  uColor2: THREE.Color;
  uColor3: THREE.Color;
  uColor4: THREE.Color;
  uIntensity: number;
  uTime: number;
};
