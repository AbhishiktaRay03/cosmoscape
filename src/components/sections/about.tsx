"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import header from "../header";
import { useTheme } from "next-themes";
import { Vortex } from "../ui/vortex";

import { Star } from "lucide-react"; 
const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-slate-950 min-h-svh overflow-hidden">
      {header()}
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center">
          About Cosmoscape
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum tenetur adipisci odio facere, beatae fugit error sit minima voluptas? Quis cumque velit laborum voluptas? Ad, minima! Harum recusandae, nesciunt fuga error mollitia officia voluptates dolorem quaerat deserunt?
        </p>
        
      </Vortex>
    </div>
    </section>
  );
};

export default About;
