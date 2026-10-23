import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-[#F5EBD0]">
      <p className="  pt-20 pb-10 uppercase font-light font-out  text-[#7f011f]">
        The Story Behind MAISON
      </p>
      <h1 className="font-ply  text-7xl  text-[#7f011f]">Style is personal.</h1>
      <h1 className="font-ply  text-7xl  text-[#7f011f]">Make it yours.</h1>
      <div className=" flex flex-col items-center p-11 font-light   gap-2  text-[#7f011f]">
        <p>
          MAISON is built around a simple idea: menswear should feel effortless,
          look timeless,
        </p>
        <p>
          and reflect who you are. We bring together everyday essentials and
          considered designs
        </p>
        <p>to make getting dressed feel natural.</p>
      </div>
    </div>
  );
};

export default About;
