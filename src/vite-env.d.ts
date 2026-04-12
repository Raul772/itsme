/// <reference types="vite/client" />

import { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

declare module "*.glsl" {
  const value: string;
  export default value;
}

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        customPlaneMaterial: ThreeElements["shaderMaterial"] & {
          uColor1?: THREE.ColorRepresentation;
          uColor2?: THREE.ColorRepresentation;
          uColor3?: THREE.ColorRepresentation;
          uColor4?: THREE.ColorRepresentation;
          uIntensity?: number;
          uTime?: number;
        };
      }
    }
  }
}
