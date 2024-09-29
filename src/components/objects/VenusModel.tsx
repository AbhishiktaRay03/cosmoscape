import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const VenusModel = () => {
  const texture = useLoader(TextureLoader, "/textures/venus.jpg");
  const venusRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (venusRef.current) {
      venusRef.current.rotation.y += 0.003; // Venus rotates slowly
    }
  });

  return (
    <mesh ref={venusRef} scale={0.8}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial map={texture} metalness={0.2} roughness={0.7} />
    </mesh>
  );
};
const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={1.5} />
      <pointLight position={[0, 0, 3]} intensity={0.5} />
      <VenusModel />
    </>
  );
};

export default Scene;
