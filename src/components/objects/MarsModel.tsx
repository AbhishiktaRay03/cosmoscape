import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const MarsModel = () => {
  const texture = useLoader(TextureLoader, "/textures/mars.jpg"); // Use your Mars texture here
  const marsRef = React.useRef<THREE.Mesh>(null);

  // Rotate the Mars model every frame
  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotation.y += 0.005; // Adjust this value for faster/slower rotation
    }
  });

  return (
    <mesh ref={marsRef} scale={0.8}>
      {" "}
      {/* Scale down the Mars model */}
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial map={texture} metalness={0.1} roughness={0.7} />
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
      <MarsModel /> {/* Add the Mars model to the scene */}
    </>
  );
};

export default Scene;
