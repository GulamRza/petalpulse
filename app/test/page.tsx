import React from "react";
import { prisma } from "../utils/prisma";

const HeroSection = async () => {


  const result = {};

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl text-black min-h-screen bg-white flex p-20 items-center flex-col">
        <pre className="text-wrap"><code>{JSON.stringify(result, null, '\t')}</code></pre>

        <p>

        </p>
      </div>
    </div>
  );
};

export default HeroSection;
