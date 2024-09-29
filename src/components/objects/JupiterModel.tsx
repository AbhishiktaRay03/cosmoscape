import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const JupiterModel = () => {
  const texture = useLoader(TextureLoader, "/textures/jupiter.jpg");
  const jupiterRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.002; // Moderate rotation for Jupiter
    }
  });

  return (
    <mesh ref={jupiterRef} scale={0.8}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial map={texture} metalness={0.3} roughness={0.6} />
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
      <JupiterModel />
    </>
  );
};

export default Scene;
