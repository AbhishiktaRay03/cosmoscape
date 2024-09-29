import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const SaturnModel = () => {
  const planetTexture = useLoader(TextureLoader, "/textures/saturn.jpg");
  const ringTexture = useLoader(TextureLoader, "/textures/saturn.jpg"); // Load the texture for Saturn's rings
  const saturnRef = React.useRef<THREE.Mesh>(null);
  const ringsRef = React.useRef<THREE.Mesh>(null);

  // Rotate Saturn and its rings every frame
  useFrame(() => {
    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.005; // Saturn's slow rotation
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = Math.PI / 4; // Tilt the rings
    }
  });

  return (
    <group>
      {/* Saturn Planet */}
      <mesh ref={saturnRef} scale={0.69}>
        <sphereGeometry args={[0.69, 32, 32]} />
        <meshStandardMaterial
          map={planetTexture}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>

      {/* Saturn Rings */}
      <mesh ref={ringsRef} rotation={[1.4, 0, 0]} scale={0.67}>
        <ringGeometry args={[1.0, 1.4, 64]} /> {/* Inner and outer radius */}
        <meshBasicMaterial
          map={ringTexture}
          side={THREE.DoubleSide} // Show texture on both sides of the ring
          transparent={true}
          opacity={0.9} // Adjust opacity for a more realistic look
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
      <SaturnModel />
    </>
  );
};

export default Scene;
