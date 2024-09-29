import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const EarthModel = () => {
  const texture = useLoader(TextureLoader, "/textures/earth2.jpg");
  const earthRef = React.useRef<THREE.Mesh>(null);

  // Rotate the Earth model every frame
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005; // Adjust this value for faster/slower rotation
    }
  });

  return (
    <mesh ref={earthRef} scale={0.8}>
      {" "}
      {/* Scale down the Earth model */}
      <sphereGeometry args={[1, 32, 32]} />
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
      <EarthModel />
    </>
  );
};

export default Scene;
