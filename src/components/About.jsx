import React from "react";
import Sectiontitle from "../Sectiontitle";

const About = () => {
  return (
    <div className="flex flex-col items-center  bg-[#F5EBD0]">
      <Sectiontitle
        title="The Story Behind MAISON"
        maintitle="Style is personal."
        m2="Make it yours."
        description="MAISON is built around a simple idea: menswear should feel effortless,
          look timeless and reflect who you are. We bring together everyday essentials and
          considered designs to make getting dressed feel natural. "
      />
    </div>
  );
};

export default About;
