import React from "react";
import { useFrame } from "@react-three/fiber";

function Dolly({ scene, setScene, setIsTransitioning, isTransitioning }) {
  useFrame((state) => {
    if (scene === 0 && isTransitioning) {
      if (state.camera.position.z >= -10) {
        state.camera.position.z = state.camera.position.z - 0.1;
      }
      if (state.camera.position.z <= -10) {
        setScene(1);
        setIsTransitioning(false);
      }
    }
  });
  return null;
}

export default Dolly;
