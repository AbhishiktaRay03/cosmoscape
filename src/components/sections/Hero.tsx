"use client";
import React from "react";
import "../../app/hero-styles.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/space-2.jpg')" }}>
      {/* Animated span elements */}
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
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-5xl font-orbitron tracking-widest z-10">
        <h1 className="font-orbitron">COSMOSCAPE</h1>
        <Link href="/about">
          <Button className="mt-4 explore-button" style={{ border: '1px solid white', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.4)' }}>
            Explore
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
