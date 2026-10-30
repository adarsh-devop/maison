
import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Sectiontitle = ({ title, maintitle, m2, description, button }) => {
  const { nightMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center ${
        nightMode ? "bg-[#0c0c0c]" : "bg-[#F5EBD0]"
      }`}
    >
      <p
        className={`pt-20 pb-10 uppercase font-light font-out ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}
      >
        {title}
      </p>

      <h2
        className={`flex flex-col max-w-xl text-center items-center font-ply text-7xl ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}
      >
        {maintitle}
      </h2>

      <h2
        className={`flex flex-col max-w-xl text-center items-center font-ply text-7xl ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}
      >
        {m2}
      </h2>

      <p
        className={`flex flex-col max-w-xl text-center items-center p-11 font-light gap-2 ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Sectiontitle;
