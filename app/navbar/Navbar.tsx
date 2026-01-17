"use client";

import React, { useState } from "react";
import { CgProfile, CgMenu, CgClose } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link"; 
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { href: "/", label: "Home", isActive: true },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact us" },
  ];

  return (
    <header className="bg-[#3D5A49] text-white">
      {/* NAVBAR */}
      <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Furni.</h1>

        {/* Menu Hamburger pour mobile */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <CgClose /> : <CgMenu />}
        </button>

        {/* Menu Desktop (visible sur md et plus) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8 text-sm md:text-base opacity-90">
            {navLinks.map((link) => (
              <li key={link.href} className={link.isActive ? "border-b-2 border-yellow-400 pb-1" : ""}>
                <Link 
                  href={link.href} 
                  className="hover:text-yellow-300 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icônes */}
        <div className="flex items-center gap-4 text-lg">
          <CgProfile className="cursor-pointer hover:text-yellow-300 transition hidden md:block" />
          
          {/* PANIER */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-xl hover:text-yellow-300 transition" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menu Mobile (s'ouvre quand isMenuOpen = true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3D5A49] border-t border-white/20">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4 text-base">
              {navLinks.map((link) => (
                <li key={link.href} className={link.isActive ? "border-b border-yellow-400 pb-2" : ""}>
                  <Link 
                    href={link.href} 
                    className="block py-2 hover:text-yellow-300"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/20">
                <div className="flex items-center gap-4 py-2">
                  <CgProfile className="text-xl" />
                  <span>Profile</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 py-10 md:py-14">
        
        {/* Texte + boutons */}
        <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Modern Interior <br /> Design Studio
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
            <Link href="/products">
              <button className="bg-amber-400 rounded-3xl px-6 py-3 font-medium text-black hover:bg-amber-500 transition w-full sm:w-auto">
                Shop Now
              </button>
            </Link>
            <button className="rounded-3xl bg-white px-6 py-3 font-medium text-black opacity-80 hover:opacity-100 transition w-full sm:w-auto">
              Explore
            </button>
          </div>
        </div>

        {/* Image + décor */}
        <div className="relative mt-10 lg:mt-0">
          <Image
            src="/images/im1.png"
            alt="Interior Design"
            width={600}
            height={600}
            className="object-contain w-full max-w-md lg:max-w-lg mx-auto"
            priority
          />

          {/* Points */}
          <div className="absolute top-4 md:top-10 right-0 md:right-0 grid grid-cols-3 gap-2 opacity-40">
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