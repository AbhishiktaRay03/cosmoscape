import { PlanetData } from './planet';

export const getPlanetData = (planetName: string): PlanetData => {
  switch (planetName.toLowerCase()) {
    case 'mars':
      return {
        basicFacts: [
          "Fourth planet from the Sun",
          "Known as the Red Planet",
          "Has the largest volcano in the solar system",
          "Diameter is about half the size of Earth",
        ],
        exploration: [
          "Explored by numerous robotic missions",
          "Rovers have traversed the surface",
          "Potential site for future human missions",
          "Ongoing search for signs of past or present life",
        ],
        missionsHistory: [
          "1965: First Mars flyby (Mariner 4)",
          "1997: Mars Pathfinder lands with first rover",
          "2012: Curiosity rover lands",
          "2021: Perseverance rover lands with Ingenuity helicopter",
        ]
      };
    case 'earth':
      return {
        basicFacts: [ /* Earth facts */ ],
        exploration: [ /* Earth exploration info */ ],
        missionsHistory: [ /* Earth mission history */ ]
      };
    // Add cases for other planets
    default:
      throw new Error(`No data available for planet: ${planetName}`);
  }
};