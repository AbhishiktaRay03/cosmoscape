import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-screen-xl mx-auto px-2 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
          <div className="flex items-center space-x-3">
            {/* Placeholder for Logo */}
            <div className="w-12 h-12 bg-gray-500"></div>
            <span className="text-lg font-bold">Your Logo</span>
          </div>
          <ul className="flex space-x-5 text-sm font-medium mt-4 md:mt-0">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Facebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Twitter size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Instagram size={24} />
              </a>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="hover:text-gray-400">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-gray-400">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-gray-400">Services</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>
                <Link href="/blogs" legacyBehavior>
                  <a className="hover:text-gray-400">Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/community" legacyBehavior>
                  <a className="hover:text-gray-400">Community</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-gray-400">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <span>© 2024 Cosmoscape. All Rights Reserved.</span>
          <span>
            Made with ❤️ by{" "}
            <a href="https://www.yourwebsite.com" className="hover:underline">
              Abhishikta Ray
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
