"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SunModel from "../../components/objects/SunModel";
import MoonModel from "../../components/objects/MoonModel";
import MercuryModel from "../../components/objects/MercuryModel";
import VenusModel from "../../components/objects/VenusModel";
import EarthModel from "../../components/objects/EarthModel";
import MarsModel from "../../components/objects/MarsModel";
import JupiterModel from "../../components/objects/JupiterModel";
import SaturnModel from "../../components/objects/SaturnModel";
import UranusModel from "../../components/objects/UranusModel";
import NeptuneModel from "../../components/objects/NeptuneModel";
import PlanetInfo from "../sections/planetinfo";
import { Planet } from "../planet";
import Header from "../header";

const planets: Planet[] = [
  {
    name: "Sun",
    component: SunModel,
    texture: "/textures/sun.jpg",
  },
  {
    name: "Moon",
    component: MoonModel,
    texture: "/textures/moon.jpg",
  },
  {
    name: "Mercury",
    component: MercuryModel,
    texture: "/textures/mercury.jpg",
  },
  {
    name: "Venus",
    component: VenusModel,
    texture: "/textures/venus.jpg",
  },
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
  {
    name: "Jupiter",
    component: JupiterModel,
    texture: "/textures/jupiter.jpg",
  },
  {
    name: "Saturn",
    component: SaturnModel,
    texture: "/textures/saturn.jpg",
  },
  {
    name: "Uranus",
    component: UranusModel,
    texture: "/textures/uranus.jpg",
  },
  {
    name: "Neptune",
    component: NeptuneModel,
    texture: "/textures/neptune.jpg",
  },
];

const Cosmo: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planets[0]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div
      className="h-screen flex bg-black text-white relative animate-fade-in-up"
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
