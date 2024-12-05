import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white  pt-32 overflow-hidden">
      {/* Heading */}
      <div className="px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 text-center">
            Welcome to the Plant Community
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 text-center">
            Grow Together, Share Knowledge
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-500 transition">
            Join Us
            </button>
            <button className="px-6 py-3 border border-green-600 text-green-600 text-lg font-medium rounded-lg hover:bg-green-50 transition">
            Learn More
            </button>
        </div>

      </div>

      {/* Decorative Illustration */}
      <div className="mt-12">
        <div className="w-full h-72 flex gap-40 justify-between">
          {/* Replace the placeholder with a decorative image */}
          <img
            src="/pi2.jpg"
            alt="Potted plants"
            className="object-cover w-full h-full translate-y-6 lg:scale-120 mix-blend-multiply"
          />
          <img
            src="/pi3.jpg"
            alt="Potted plants"
            className=" w-full h-full translate-y-7 scale-[200%] mix-blend-multiply -hue-rotate-15"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
