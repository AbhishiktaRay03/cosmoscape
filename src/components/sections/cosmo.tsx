"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthModel from "../../components/objects/EarthModel";
import MarsModel from "../../components/objects/MarsModel";
import PlanetInfo from "../sections/planetinfo";

const planets = [
  {
    name: "Earth",
    component: EarthModel,
    info: {
      name: "Earth",
      basicFacts: [
        "Third planet from the Sun",
        "Only known planet to support life",
        "70% of surface covered in water",
      ],
      exploration: [
        "Humans have explored Earth extensively",
        "Satellite imagery covers entire surface",
        "Deep ocean exploration ongoing",
      ],
      missionsHistory: [
        "1957: First artificial satellite (Sputnik 1)",
        "1961: First human in space (Yuri Gagarin)",
        "1969: First humans on the Moon (Apollo 11)",
      ],
    },
  },
  {
    name: "Mars",
    component: MarsModel,
    info: {
      name: "Mars",
      basicFacts: [
        "Fourth planet from the Sun",
        "Known as the Red Planet",
        "Has the largest volcano in the solar system",
      ],
      exploration: [
        "Explored by numerous robotic missions",
        "Rovers have traversed the surface",
        "Potential site for future human missions",
      ],
      missionsHistory: [
        "1965: First Mars flyby (Mariner 4)",
        "1976: First successful landing (Viking 1)",
        "2012: Curiosity rover lands",
      ],
    },
  },
  // Add more planets here
];

const Cosmo = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen flex bg-black text-white">
      {/* Hamburger Menu */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute mt-2 bg-gray-800 rounded shadow-lg">
            {planets.map((planet) => (
              <button
                key={planet.name}
                onClick={() => {
                  setSelectedPlanet(planet);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                {planet.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Planet Info */}
      <div className="w-1/2 p-8 overflow-y-auto">
        <PlanetInfo info={selectedPlanet.info} />
      </div>

      {/* Planet Viewer */}
      <div className="w-1/2 h-full">
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
