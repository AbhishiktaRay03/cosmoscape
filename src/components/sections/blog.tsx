"use client";

import { useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import header from "../header";
import { Button } from "../ui/moving-border";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const categories = ["All", "Galaxies", "Space station", "Planets", "Stars"];

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section
      className="bg-black min-h-screen pb-16 overflow-hidden animate-fade-in-up"
      style={{
        backgroundImage: "url(/images/dark-sky.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {header()}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center mt-20 mb-12">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-transparent dark:border-slate-700 text-lg text-center py-3 px-8 cursor-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Blogs and Insights
          </Button>
        </div>

        <div className="flex justify-end mb-4 space-x-4 px-8">
          <button className="px-4 py-2 text-lg font-semibold text-white bg-indigo-800 dark:bg-indigo-800 border-2 border-transparent rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
            + Add Blog
          </button>
          <button className="px-4 py-2 text-lg font-semibold text-white bg-indigo-900 dark:bg-indigo-900 border-2 border-transparent rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
            <span role="img" aria-label="edit icon">
              ✏️
            </span>{" "}
            Edit Blog
          </button>
        </div>

        <div className="flex justify-center text-center space-x-4 mb-4">
          {categories.map((category) => (
            <HoverBorderGradient
              key={category}
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-slate-800 bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors duration-300"
              onClick={() => setSelectedCategory(category)}
            >
              <span>{category}</span>
            </HoverBorderGradient>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-2 py-2">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}

export const projects: Project[] = [
  {
    title: "Mars-habitable or not?",
    description:
      "The surface of Mars is barren and inhospitable, but perhaps it wasn't always that way. Billions of years ago, when life emerged on Earth, the climate of Mars could have been Earth-like as well, with a thicker atmosphere than today and oceans of liquid water.",
    link: "/",
    image: "/images/mars.jpg",
  },
  {
    title: "Asteroids",
    description:
      "Ceres has the shape of a flattened sphere with an equatorial radius of 490 km and a polar radius of 455 km, equivalent in volume to a sphere with a diameter of 940 km—i.e., about 27 percent that of Earth's Moon.",
    link: "/",
    image: "/images/meteor.jpg",
  },
  {
    title: "SUN-the star!",
    description:
      "The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion ",
    link: "https://google.com",
    image: "/images/sun.jpg",
  },
  {
    title: "Pluto-the dwarf planet",
    description:
      "It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume",
    link: "/",
    image: "/images/pluto.jpg",
  },
  {
    title: "Eclipses",
    description:
      "It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume",
    link: "/",
    image: "/images/eclipse.jpeg",
  },
  {
    title: "Space station",
    description:
      "The International Space Station Program brings together international flight crews, multiple launch vehicles, globally distributed launch and flight operations,",
    link: "/",
    image: "/images/space-station.jpg",
  },
];
