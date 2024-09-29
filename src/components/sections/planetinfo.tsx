import React from "react";

interface Info {
  name: string;
  basicFacts: string[];
  exploration: string[];
  missionsHistory: string[];
}

const PlanetInfo: React.FC<{ info: Info }> = ({ info }) => {
  return (
    <div className="space-y-6 text-gray-300">
      <h1 className="text-4xl font-bold text-white">{info.name}</h1>
      <div className="space-y-4">
        <InfoSection title="Basic Facts" items={info.basicFacts} />
        <InfoSection title="Exploration" items={info.exploration} />
        <InfoSection title="Missions History" items={info.missionsHistory} />
      </div>
    </div>
  );
};

interface InfoSectionProps {
  title: string;
  items: string[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => (
  <section>
    <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default PlanetInfo;
