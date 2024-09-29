"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import header from "../header";
import Footer from "../footer";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section
      className="bg-black min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url(/images/dark-sky.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {header()}
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-8 text-slate-300 text-center ">
            About Cosmoscape
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <Image
                src="/images/saturn.jpg"
                alt="Team collaboration"
                width={400}
                height={300}
                className="rounded-lg transform -rotate-12"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4 text-gray-300">
                Cosmoscape is a team of passionate space enthusiasts and
                educators dedicated to bringing the wonders of the universe to
                everyone. Founded in 2023, we've been on a mission to make space
                exploration accessible and exciting for all.
              </p>
              <p className="text-lg text-gray-300">
                Our team consists of astronomers, astrophysicists, educators,
                and space technology experts who work together to create
                engaging content and experiences that inspire curiosity about
                the cosmos.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: 2023, text: "Founded" },
            { number: 1000, text: "Designs created" },
            { number: 200, text: "Employees" },
            { number: 190, text: "Countries reached" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
              >
                <CountUp end={stat.number} duration={2} />
              </motion.h2>
              <p className="text-sm md:text-base">{stat.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-8 text-center text-gray-300">
            Our goals
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <Image
                src="/images/neptune.jpg"
                alt="Team planning"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <ul className="list-disc list-inside text-lg space-y-4 text-gray-300">
                <li>Inspire curiosity about space and astronomy</li>
                <li>Provide accessible education on complex cosmic concepts</li>
                <li>Foster a global community of space enthusiasts</li>
                <li>Promote scientific literacy and critical thinking</li>
                <li>Support and highlight advancements in space exploration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

interface CountUpProps {
  end: number;
  duration: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

export default About;
