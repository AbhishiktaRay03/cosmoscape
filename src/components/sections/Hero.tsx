"use client";
import React, { useState, useEffect } from "react";
import "../../app/hero-styles.css";
import {Button} from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/space-2.jpg')" }}>
      <span className="animated-span animate-1"></span>
      <span className="animated-span animate-2"></span>
      <span className="animated-span animate-3"></span>
      <span className="animated-span animate-4"></span>
      <span className="animated-span animate-5"></span>
      <span className="animated-span animate-6"></span>
      <span className="animated-span animate-7"></span>
      <span className="animated-span animate-8"></span>
      <span className="animated-span animate-9"></span>
      <span className="animated-span animate-10"></span>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-5xl font-orbitron tracking-widest z-10">
        <h1>COSMOSCAPE</h1>
        <Button className="mt-4 border-1 explore-button" style={{ border: '1px solid white', borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.4)' }}>Explore</Button>
      </div>
    </section>
  );
}
export default Hero;
