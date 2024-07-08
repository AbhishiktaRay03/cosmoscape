"use client";
import { useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import header from "../header";
import { Button } from "../ui/moving-border";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const categories = ["All", "Galaxies", "Space station", "Planets", "Stars"];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="bg-gray-50 dark:bg-slate-950 min-h-screen mb-16 overflow-hidden">
      {header()}
      <div className="container mx-auto p-4">
        <div className="flex justify-center mt-20 mb-4">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-transparent dark:border-slate-800 text-lg text-center py-3 px-8 cursor-none"
          >
            Blogs and insights
          </Button>
        </div>

        <div className="flex justify-end mb-2 space-x-4 px-8 py-2">
          <button className="px-2 py-2 text-lg font-semibold text-white bg-black border-2 border-white rounded-full transition-transform transform hover:scale-105 hover:border-indigo-500">
            + Add Blog
          </button>
          <button className="px-4 py-2 text-lg font-semibold text-white bg-black border-2 border-white rounded-full transition-transform transform hover:scale-105 hover:border-indigo-500">
            <span role="img" aria-label="edit icon">✏️</span> Edit Blog
          </button>
        </div>

        <div className="m-4 flex justify-center text-center space-x-4">
          {categories.map((category) => (
            <HoverBorderGradient
              key={category}
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              onClick={() => setSelectedCategory(category)}
            >
              <span>{category}</span>
            </HoverBorderGradient>
          ))}
        </div>

          
        <div className="max-w-5xl mx-auto px-4">
            <HoverEffect items={projects} />
        </div>


          
      </div>
    </section>
  );
  
}
export const projects = [
  {
    title: "Mars-habitable or not?",
    description:
      "The surface of Mars is barren and inhospitable, but perhaps it wasn't always that way. Billions of years ago, when life emerged on Earth, the climate of Mars could have been Earth-like as well, with a thicker atmosphere than today and oceans of liquid water.",
    link: "/",
  },
  {
    title: "Asteroids",
    description:
      "Ceres has the shape of a flattened sphere with an equatorial radius of 490 km and a polar radius of 455 km, equivalent in volume to a sphere with a diameter of 940 km—i.e., about 27 percent that of Earth's Moon.",
    link: "/",
  },
  {
    title: "SUN-the star!",
    description:
      "The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion ",
    link: "https://google.com",
  },
  {
    title: "Pluto-the dwarf planet",
    description:
      "It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume",
    link: "/",
  },
  {
    title: "Eclipses",
    description:
      "It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume",
    link: "/",
  },
  {
    title: "Space station",
    description:
      "The International Space Station Program brings together international flight crews, multiple launch vehicles, globally distributed launch and flight operations,",
    link: "/",
  },
];