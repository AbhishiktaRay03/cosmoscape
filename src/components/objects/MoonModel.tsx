import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const MoonModel = () => {
  const texture = useLoader(TextureLoader, "/textures/moon.jpg");
  const moonRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.003; // Slightly faster for the Moon
    }
  });

  return (
    <mesh ref={moonRef} scale={0.8}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial map={texture} metalness={0.1} roughness={0.8} />
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
      <MoonModel />
    </>
  );
};

export default Scene;
