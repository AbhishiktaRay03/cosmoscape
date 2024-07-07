import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/ui/ModeToggle";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-full z-[49] fixed top-0 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-25 bg-gray-50 dark:bg-gray-950/50 text-sm text-zinc-900 dark:text-slate-300 h-[58px] mb-12 shadow-inner-bottom shadow-blue-600/70">
      <Link
        href="/"
        target="_blank"
        className="mr-auto"
      >
        {isMounted && theme === "dark" && (
          <Image
            src="/images/logo_dark.png"
            width={60}
            height={60}
            alt="logo"
            className="ml-20 cursor-pointer hover:scale-110"
          />
        )}
        {isMounted && theme === "light" && (
          <Image
            src="/images/logo_light.png"
            width={60}
            height={60}
            alt="logo"
            className="ml-20 cursor-pointer hover:scale-110"
          />
        )}
      </Link>
      <div className="justify-center gap-12 mx-auto my-2 font-extrabold text-xl hidden md:flex">
        <Link
          href="/"
          className="font-normal hover:text-zinc-500 dark:hover:text-purple-600 hover:transition-all hover:scale-110"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="font-normal hover:text-zinc-500 dark:hover:text-purple-600 hover:transition-all hover:scale-110"
        >
          About
        </Link>
        <div className="relative inline-flex items-center">
          <Link
            href="/"
            className="font-normal hover:text-zinc-500 dark:hover:text-purple-600 hover:transition-all hover:scale-110"
          >
            Cosmoguide
          </Link>
        </div>
        <Link
          href="/blog"
          className="font-normal hover:text-zinc-500 dark:hover:text-purple-600 hover:transition-all hover:scale-110"
        >
          Blogs
        </Link>
        <Link
          href="/"
          className="font-normal hover:text-zinc-500 dark:hover:text-purple-600 hover:transition-all hover:scale-110"
        >
          Community
        </Link>
        <Link
          href="/"
          className="font-normal hover:text-zinc-500 dark:hover:text-purple-600 hover:transition-all hover:scale-110"
        >
          Contact
        </Link>
      </div>
      
      <ModeToggle />
    </header>
  );
};

export default Header;
