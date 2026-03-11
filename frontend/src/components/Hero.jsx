import React from "react";
import art1 from "../assets/art1.jpg";

const Hero = () => {
  return (
    <div className="mt-0 flex flex-col sm:flex-row border-0 sm:border sm:border-gray-600 min-h-[70vh] relative overflow-hidden w-screen left-1/2 -translate-x-1/2 sm:w-auto sm:left-0 sm:translate-x-0">

      {/* Background Artwork */}
      <img
        src={art1}
        className="absolute inset-0 w-full h-full object-cover opacity-70 animate-slowZoom"
        alt=""
      />

      {/* Content */}
      <div className="relative w-full sm:w-1/2 flex items-start sm:items-center justify-center py-10 sm:py-0">
        <div className="space-y-4 mt-16 sm:mt-0 px-4 sm:px-0 max-w-md">

          <p className="text-gray-400 tracking-widest text-xs sm:text-sm animate-fadeIn">
            ORIGINAL ARTWORKS
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-slideUp">
            RAVI.DAVINCI
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-sm animate-fadeIn delay-200">
            Minimal. Original. Handcrafted artworks by Ravitej.
          </p>

          <button className="border border-white px-5 py-2 mt-4 text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300">
            VIEW 
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;