import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">typing</p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-6">
          Learning React.
        </h1>
        <div className="flex items-center justify-center ">
          <p className="py-4 text-xl font-bold md:text-5xl sm:text-4xl">
            With React Typed "
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 font-bold text-[#00df9a]"
            strings={["Nodejs", "Vuejs", "Nextjs", "Reactjs", "Yogi Yolangga"]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
        <p className="w-full px-2 text-xl font-bold text-gray-500 md:text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          qui.
        </p>
        <button className="my-6 py-3 px-5 w-[150px] rounded-lg mx-auto text-black font-bold bg-[#00df9a]">
          Find
        </button>
      </div>
    </div>
  );
};
