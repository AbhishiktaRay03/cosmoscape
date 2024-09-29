import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const MercuryModel = () => {
  const texture = useLoader(TextureLoader, "/textures/mercury.jpg");
  const mercuryRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (mercuryRef.current) {
      mercuryRef.current.rotation.y += 0.002; // Faster rotation for Mercury
    }
  });

  return (
    <mesh ref={mercuryRef} scale={0.8}>
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
      <MercuryModel />
    </>
  );
};

export default Scene;
