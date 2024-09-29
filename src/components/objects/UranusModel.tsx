import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const UranusModel = () => {
  const planetTexture = useLoader(TextureLoader, "/textures/uranus.jpg");
  const ringTexture = useLoader(TextureLoader, "/textures/uranus.jpg"); // Load the texture for Uranus's rings
  const uranusRef = React.useRef<THREE.Mesh>(null);
  const ringsRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (uranusRef.current) {
      uranusRef.current.rotation.y += 0.006; // Slow rotation for Uranus
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x = Math.PI / 4; // Rotate the ring to be aligned correctly
    }
  });

  return (
    <group>
      {/* Uranus Planet */}
      <mesh ref={uranusRef} scale={0.7}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          map={planetTexture}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Uranus Rings */}
      <mesh ref={ringsRef} rotation={[1.5, 0, 0]} scale={0.7}>
        <ringGeometry args={[1.2, 1.3, 32]} />{" "}
        {/* Thin rings with small inner and outer radius */}
        <meshBasicMaterial
          map={ringTexture}
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.3} // Transparent to give a subtle ring effect
        />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={1.5} />
      <pointLight position={[0, 0, 3]} intensity={0.5} />
      <UranusModel />
    </>
  );
};

export default Scene;
