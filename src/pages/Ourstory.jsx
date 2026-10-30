
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Sectiontitle from "../components/Sectiontitle";

const Ourstory = () => {
  const { nightMode } = useContext(ThemeContext);

  return (
    <div className={`flex items-center h-screen ${ nightMode ? "bg-[#0c0c0c]":"bg-[#F5EBD0]"}`} >
      <div className="max-w-7xl mx-auto flex">
        <Sectiontitle
        title="The Story Behind MAISON"
        maintitle="More than fashion."
        m2="It's a statement."
        description="MAISON was created around a simple belief: great style should feel effortless. We bring together timeless menswear, thoughtful details, and everyday essentials to help you express your individuality. From everyday basics to refined classics, every piece is chosen with comfort, versatility, and confidence in mind."
      />

      <div className="flex justify-around rounded-md px-5 relative">
        <img
          className="w-full max-w-xl h-[600px] object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000"
          alt="MAISON fashion"
        />
      </div>
      </div>
    </div>
  );
};

export default Ourstory;
