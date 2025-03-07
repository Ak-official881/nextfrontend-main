import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        
        {/* About Us Section */}
        <div id="about-us" className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          
          <h2 className="mt-4 text-lg font-semibold text-gray-800">About Us</h2>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold text-blue-600">QuickCart</span> is your go-to platform for high-quality electronic products.  
            We offer a wide range of smart gadgets, home appliances, and business solutions from top brands at competitive prices.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/Privacy-policy">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Section */}
        <div id="contact-us" className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Contact Us</h2>
            <div className="text-sm space-y-2">
              <p>+91-234-567-8769</p>
              <p>Abhishek.dev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © Abhishek.dev All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
