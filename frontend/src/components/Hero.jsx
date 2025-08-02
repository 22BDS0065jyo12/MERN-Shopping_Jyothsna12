import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 py-10 bg-gray-100 rounded-xl mb-10">
      {/* Left Text Content */}
      <div className="sm:w-1/2 text-center sm:text-left">
        <p className="text-sm font-medium text-gray-600 mb-2">OUR BESTSELLERS</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Latest Arrivals
        </h1>
        <p className="text-gray-700 mb-6">
          Check out our newest collection of stylish and comfortable apparel.
        </p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
          SHOP NOW
        </button>
      </div>

      {/* Right Image */}
      <div className="sm:w-1/2 mb-6 sm:mb-0">
        <img
          src={assets.hero_img}
          alt="Latest Arrivals"
          className="rounded-xl w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
