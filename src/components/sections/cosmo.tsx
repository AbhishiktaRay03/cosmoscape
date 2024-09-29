"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthModel from "../../components/objects/EarthModel";
import MarsModel from "../../components/objects/MarsModel";
import PlanetInfo from "../sections/planetinfo";
import { Planet } from "../planet";
import Header from "../header";

const planets: Planet[] = [
  {
    name: "Earth",
    component: EarthModel,
    texture: "/textures/earth2.jpg",
  },
  {
    name: "Mars",
    component: MarsModel,
    texture: "/textures/mars.jpg",
  },
  // Add more planets here
];

const Cosmo: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planets[0]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div
      className="h-screen flex bg-black text-white relative"
      style={{
        backgroundImage: "url(/images/dark-sky.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <Header />
      {/* Hamburger Menu */}
      <div className="absolute top-16 left-4 z-10">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl border border-white rounded-lg p-2"
        >
          ☰ 
        </button>
        {menuOpen && (
          <div className="absolute mt-2 bg-slate-900 rounded shadow-lg">
            {planets.map((planet) => (
              <button
                key={planet.name}
                onClick={() => {
                  setSelectedPlanet(planet);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-800"
              >
                {planet.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Planet Info */}
      <div className="w-1/2 p-8 overflow-y-auto mt-20 ml-32">
        <PlanetInfo
          planetName={selectedPlanet.name}
          texture={selectedPlanet.texture}
        />
      </div>

      {/* Planet Viewer */}
      <div className="w-1/2 h-full mt-8">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <React.Suspense fallback={null}>
            {React.createElement(selectedPlanet.component)}
          </React.Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default Cosmo;
