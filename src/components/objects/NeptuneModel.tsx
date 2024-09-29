import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const NeptuneModel = () => {
  const texture = useLoader(TextureLoader, "/textures/neptune.jpg");
  const neptuneRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (neptuneRef.current) {
      neptuneRef.current.rotation.y += 0.003; // Similar to Uranus in speed
    }
  });

  return (
    <mesh ref={neptuneRef} scale={0.8}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial map={texture} metalness={0.1} roughness={0.8} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} />
      <directionalLight position={[-5, -5, -5]} intensity={1.3} />
      <pointLight position={[0, 0, 3]} intensity={0.5} />
      <NeptuneModel />
    </>
  );
};

export default Scene;
