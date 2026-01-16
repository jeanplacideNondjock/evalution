"use client";

import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link"; // ⬅️ IMPORTANT: Ajoute cet import
import { useCart } from "../context/CartContext";

const Navbar = () => {
  // ⬇️⬇️⬇️ useCart() DOIT ÊTRE ICI, DANS LA FONCTION ⬇️⬇️⬇️
  const { itemCount } = useCart();
  
  return (
    <header className="bg-[#3D5A49] text-white">
      {/* NAVBAR */}
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Furni.</h1>

        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-8 text-sm opacity-90">
            <li className="border-b-2 border-yellow-400 pb-1">
              <Link href="/">Home</Link> {/* Utilise Link au lieu de <a> */}
            </li>
            <li><Link href="/products">Products</Link></li> {/* Ajouté */}
            <li><a href="">About us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact us</a></li>
          </ul>
        </nav>

        {/* Icônes */}
        <div className="flex items-center gap-4 text-lg">
          <CgProfile className="cursor-pointer hover:text-yellow-300" />
          
          {/* PANIER */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-xl hover:text-yellow-300" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* HERO SECTION (reste identique) */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-14">
        
        {/* Texte + boutons */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-5xl font-bold leading-tight">
            Modern Interior <br /> Design Studio
          </h2>

          <div className="flex gap-4 pt-2">
            <Link href="/products">
              <button className="bg-amber-400 rounded-3xl px-6 py-3 font-medium text-black hover:bg-amber-500">
                Shop Now
              </button>
            </Link>
            <button className="rounded-3xl bg-white px-6 py-3 font-medium text-black opacity-80 hover:opacity-100">
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