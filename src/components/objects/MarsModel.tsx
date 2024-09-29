import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const MarsModel = () => {
  const texture = useLoader(TextureLoader, "/textures/mars.jpg");

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default MarsModel;
