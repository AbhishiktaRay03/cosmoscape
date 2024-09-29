import { PlanetData } from './planet';

export const getPlanetData = (planetName: string): PlanetData => {
  switch (planetName.toLowerCase()) {
    case 'sun':
    return {
        basicFacts: [
        "The Sun is the center of our solar system",
        "It's a nearly perfect sphere of hot plasma",
        "Accounts for 99.86% of the solar system’s mass",
        "Composed primarily of hydrogen and helium",
        ],
        exploration: [
        "No spacecraft can land on the Sun due to its extreme heat",
        "NASA's Parker Solar Probe is the closest mission to the Sun",
        "Studying the Sun helps understand space weather affecting Earth",
        "Solar observations are crucial",
        ],
        missionsHistory: [
        "1976: Helios 2 sets the closest solar approach at the time",
        "1990: Ulysses spacecraft explores the Sun’s polar regions",
        "2004: NASA's STEREO mission observes the Sun in 3D",
        "2018: Parker Solar Probe",
        ],
    };

    case 'moon':
    return {
        basicFacts: [
        "Earth's only natural satellite",
        "Fifth largest moon in the Solar System",
        "Diameter is about 1/4 of Earth's",
        "Its gravitational pull causes tides on Earth",
        ],
        exploration: [
        "First celestial body visited by humans",
        "Studied extensively through robotic and crewed missions",
        "Key site for future space exploration missions",
        "Harbors water ice at its poles",
        ],
        missionsHistory: [
        "1959: First successful flyby by Luna 1",
        "1969: Apollo 11, first humans land on the Moon",
        "1971: Apollo 15, first use of a lunar rover",
        "2024: Artemis program aims to return humans to the Moon",
        ],
    };

    case 'mercury':
    return {
        basicFacts: [
        "Closest planet to the Sun",
        "Smallest planet in the Solar System",
        "Has no atmosphere, leading to extreme temperatures",
        "A day on Mercury lasts 59 Earth days",
        ],
        exploration: [
        "Difficult to explore due to proximity to the Sun",
        "NASA's MESSENGER orbited Mercury from 2011-2015",
        "BepiColombo mission launched in 2018 to study Mercury",
        ],
        missionsHistory: [
        "1974: Mariner 10's first flyby of Mercury",
        "2008: MESSENGER’s first orbital insertion",
        "2018: BepiColombo launches to continue Mercury exploration",
        ],
    };

    case 'venus':
    return {
        basicFacts: [
        "Second planet from the Sun",
        "Hottest planet in the Solar System due to its thick atmosphere",
        "Similar in size and structure to Earth but with a toxic atmosphere",
        "A day on Venus is longer than its year",
        ],
        exploration: [
        "Venus is covered by a thick cloud layer",
        "Studied by numerous spacecraft, including Soviet Venera missions",
        "Exploration aims to understand Venus' runaway greenhouse effect",
        "Future missions could study its atmosphere for signs of microbial life",
        ],
        missionsHistory: [
        "1967: Venera 4, first probe to transmit data from Venus' atmosphere",
        "1975: Venera 9, first images of Venus' surface",
        "1990: Magellan orbiter maps Venus surface using radar",
        "2021: NASA announces two Venus missions for the 2030s",
        ],
    };

    case 'earth':
    return {
        basicFacts: [
        "Third planet from the Sun",
        "Only known planet to support life",
        "70% of surface covered in water",
        "Has a protective atmosphere that supports life",
        ],
        exploration: [
        "Humans have extensively explored Earth's land, oceans, and atmosphere",
        "Satellite technology provides continuous global monitoring",
        "Earth is a focal point for climate and environmental research",
        ],
        missionsHistory: [
        "1957: Sputnik 1, first artificial satellite",
        "1961: First human spaceflight (Yuri Gagarin)",
        "1969: Apollo 11, first humans land on the Moon",
        "2021: First civilian crew SpaceX's Inspiration4",
        ],
    };

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
    
    case 'jupiter':
    return {
        basicFacts: [
        "Largest planet in the Solar System",
        "Has over 75 known moons",
        "Known for its Great Red Spot, a massive storm",
        "Composed mostly of hydrogen and helium",
        ],
        exploration: [
        "Visited by several spacecraft, including Voyager and Galileo",
        "Juno mission is currently studying Jupiter's atmosphere",
        "Europa, one of Jupiter's moons, is a focus for future exploration",
        "Jupiter's magnetic field is the strongest in the Solar System",
        ],
        missionsHistory: [
        "1979: Voyager 1 and 2 flyby Jupiter",
        "1995: Galileo orbiter begins detailed study of Jupiter",
        "2016: Juno mission enters Jupiter's orbit",
        "2022: Juno continues its extended mission to study Jupiter and its moons",
        ],
    };

    case 'saturn':
    return {
        basicFacts: [
        "Sixth planet from the Sun",
        "Known for its extensive ring system",
        "Second largest planet in the Solar System",
        "Has over 80 known moons, including Titan",
        ],
        exploration: [
        "Saturn’s rings and moons have been extensively studied",
        "The Cassini mission provided detailed information about Saturn",
        "Future missions may focus on Titan and Enceladus, Saturn's moons",
        "Saturn's rings are composed of ice and rock particles",
        ],
        missionsHistory: [
        "1980: Voyager 1 flyby Saturn",
        "2004: Cassini enters Saturn's orbit",
        "2005: Huygens probe lands on Titan, Saturn's largest moon",
        "2017: Cassini mission ends with a dive into Saturn’s atmosphere",
        ],
    };

    case 'uranus':
    return {
        basicFacts: [
        "Seventh planet from the Sun",
        "Has a tilted axis, causing extreme seasonal changes",
        "An ice giant composed mainly of hydrogen, helium, and methane",
        "Has 27 known moons and faint rings",
        ],
        exploration: [
        "Only visited by Voyager 2 during its flyby in 1986",
        "Uranus’ tilted axis makes it a unique object of study",
        "Studying Uranus helps scientists understand ice giant planets",
        "Future missions may focus on understanding its atmosphere and moons",
        ],
        missionsHistory: [
        "1986: Voyager 2 flyby Uranus",
        "2000s: Plans for future Uranus missions under consideration",
        "Uranus is one of the least explored planets in the Solar System",
        ],
    };

    case 'neptune':
    return {
        basicFacts: [
        "Eighth and farthest planet from the Sun",
        "An ice giant with supersonic winds",
        "Has a deep blue color due to methane in its atmosphere",
        "Known for its large, dark storms",
        ],
        exploration: [
        "Only visited by Voyager 2 during its flyby in 1989",
        "Neptune's atmosphere and weather systems are still largely a mystery",
        "Triton, its largest moon, may have a subsurface ocean",
        "Future missions may focus on Triton and the planet's atmosphere",
        ],
        missionsHistory: [
        "1989: Voyager 2 flyby Neptune",
        "Neptune remains largely unexplored after Voyager 2",
        "Ongoing studies through telescopic observations",
        ],
    };


    default:
      throw new Error(`No data available for planet: ${planetName}`);
  }
};