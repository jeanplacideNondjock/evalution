import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-[#3D5A49] text-white">
      {/* NAVBAR */}
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Furni.</h1>

        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-8 text-sm opacity-90">
            <li className="border-b-2 border-yellow-400 pb-1">Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </nav>

        {/* Icônes */}
        <div className="flex items-center gap-4 text-lg">
          <CgProfile />
          <FiShoppingCart />
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-14">
        
        {/* Texte + boutons */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-5xl font-bold leading-tight">
            Modern Interior <br /> Design Studio
          </h2>

          <div className="flex gap-4 pt-2">
            <button className="bg-amber-400 rounded-3xl px-6 py-3 font-medium text-black">
              Shop Now
            </button>
            <button className="rounded-3xl bg-white px-6 py-3 font-medium text-black opacity-80">
              Explore
            </button>
          </div>
        </div>

        {/* Image + décor */}
        <div className="relative mt-10 md:mt-0">
          <Image
            src="/images/im1.png"
            alt="Interior Design"
            width={600}
            height={600}
            className="object-contain"
          />

          {/* Points */}
          <div className="absolute top-10 right-0 grid grid-cols-3 gap-2 opacity-40">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-white"></span>
            ))}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
