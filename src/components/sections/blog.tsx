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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];