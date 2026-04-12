/// <reference types="vite/client" />

import { ThreeElements } from '@react-three/fiber'
import * as THREE from 'three'

declare module "*.glsl" {
  const value: string;
  export default value;
}

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        customPlaneMaterial: ThreeElements['shaderMaterial'] & {
          uColor?: THREE.ColorRepresentation;
          uTime?: number;
        }
      }
    }
  }
}