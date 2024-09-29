import React from "react";
import { getPlanetData } from "../planetData";

interface PlanetInfoProps {
  planetName: string;
  texture: string;
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({ planetName, texture }) => {
  const planetData = getPlanetData(planetName);

  return (
    <div className="flex flex-col space-y-6 text-gray-300">
      <h1 className="text-4xl font-bold text-gray-300">{planetName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <InfoSection
          title="Basic Facts"
          items={planetData.basicFacts}
          texture={texture}
          className="relative"
        />
        <InfoSection
          title="Exploration"
          items={planetData.exploration}
          texture={texture}
          className="relative ml-6" // Indentation for visual hierarchy
        />
        <InfoSection
          title="Missions History"
          items={planetData.missionsHistory}
          texture={texture}
          className="relative ml-12" // Further indentation
        />
      </div>
    </div>
  );
};

interface InfoSectionProps {
  title: string;
  items: string[];
  texture: string;
  className?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  items,
  texture,
  className,
}) => (
  <div className={`space-y-2 ${className}`}>
    <div className="relative inline-block transform -skew-x-12 overflow-hidden rounded-md">
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{
          backgroundImage: `url(${texture})`,
          filter: "brightness(0.6)",
        }}
      />
      <h2 className="relative text-xl font-semibold text-slate-200 py-2 px-4 z-10">
        {title}
      </h2>
    </div>
    <ul className="space-y-1 pl-4 z-10">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PlanetInfo;
