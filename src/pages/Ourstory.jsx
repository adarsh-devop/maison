import { useState } from "react";

const Ourstory = () => {
  const [nightMode, setNightMode] = useState(true);

  const darkMode = () => {
    setNightMode((prve) => !prve);
  };

  return (
    <div
      className={`flex flex-row items-center h-screen ${nightMode ? "bg-[#F5EBD0]" : "bg-[#0c0c0c]"}`}
    >
      <div className="flex flex-col gap-4 max-w-3xl mx-auto p-5">
        <p
          className={`font-extralight ${nightMode ? "text-[#7f011f]" : "text-[#F5EBD0]"}`}
        >
          The Story Behind MAISON
        </p>
        <h1
          className={`font-ply text-7xl ${nightMode ? "text-[#7f011f]" : "text-[#F5EBD0]"}`}
        >
          More than fashion.
        </h1>
        <p
          className={`font-extralight font-osw text-2xl ${nightMode ? "text-[#7f011f]" : "text-[#F5EBD0]"}`}
        >
          It's a statement.
        </p>
        <p
          className={`font-extralight font-osw text-2xl ${nightMode ? "text-[#7f011f]" : "text-[#F5EBD0]"}`}
        >
          MAISON was created around a simple belief: great style should feel
          effortless. We bring together timeless menswear, thoughtful details,
          and everyday essentials to help you express your individuality. From
          everyday basics to refined classics, every piece is chosen with
          comfort, versatility, and confidence in mind.
        </p>
      </div>

      <div className="flex justify-around rounded-md px-5 relative">
        <img
          className="w-full max-w-xl h-[600px] object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000"
        />
      </div>
      <button
        className={`fixed top-5 right-5 z-10 px-4 py-2 rounded-md ${nightMode ? "text-[#F5EBD0] bg-black border border-[#7f011f]" : "text-[#F5EBD0] bg-[#7f011f] border border-[#7f011f]"}`}
        onClick={darkMode}
      >
        {nightMode ? "DARK" : "LIGHT"}
      </button>
    </div>
  );
};

export default Ourstory;
