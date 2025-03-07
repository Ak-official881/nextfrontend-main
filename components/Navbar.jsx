"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  const { isSeller, router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      
      {/* Logo & Brand Name */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
        <Image className="w-9 md:w-13" src={assets.logo} alt="logo" />
        <span className="text-lg font-semibold text-gray-800">QuickCart</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="#about-us" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="#contact-us" className="hover:text-gray-900 transition">
          Contact
        </Link>
        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Mobile View & Account Button */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
