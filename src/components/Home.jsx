
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Home = () => {
  const { nightMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col md:flex flex-row items-center h-screen ${
        nightMode ? "bg-[#0c0c0c]" : "bg-[#F5EBD0]"
      }`}
    >
      <div className="flex flex-col p-10 gap-5">

        <p className={`uppercase font-medium ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          Designed for the everyday
        </p>

        <p className={`font-ply text-6xl ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          A little more you.
        </p>

        <p className={`font-extralight font-out ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          Discover thoughtfully curated pieces that bring simplicity, character,
          and timeless style into your everyday life.
        </p>

        <div className="flex gap-10 font-ply">
          <button className={`border p-3 rounded-md px-4 transition ${
            nightMode
              ? "bg-[#F5EBD0] border-[#F5EBD0] text-[#7f011f] hover:bg-black hover:text-[#F5EBD0]"
              : "bg-[#7f011f] border-[#7f011f] text-blue-50 hover:bg-[#F5EBD0] hover:text-[#7f011f]"
          }`}>
            Explore
          </button>

          <button className={`border p-3 rounded-md px-4 transition ${
            nightMode
              ? "bg-[#F5EBD0] border-[#F5EBD0] text-[#7f011f] hover:bg-black hover:text-[#F5EBD0]"
              : "bg-[#7f011f] border-[#7f011f] text-blue-50 hover:bg-[#F5EBD0] hover:text-[#7f011f]"
          }`}>
            Collection
          </button>
        </div>

        <div className={`flex gap-10 font-extralight font-out ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          <div>
            <p className="text-3xl font-bold">100%</p>
            <p>Thoughtfully curated</p>
          </div>

          <div>
            <p className="text-3xl font-bold">10%</p>
            <p>Curated</p>
          </div>
        </div>

      </div>

      <div className="px-5 relative">
        <img
          className="rounded-md max-w-xl"
          src="https://maison-ui-self.vercel.app/assets/mens-fashion-B0stqacK.png"
          alt="Men's fashion collection"
        />

        <div className={`absolute bottom-2 left-8 p-3 rounded-sm ${
          nightMode ? "bg-black" : "bg-[#F5EBD0]"
        }`}>
          <p className={`font-out uppercase text-sm font-light ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            The new collection
          </p>

          <p className={`font-ply font-medium mt-1 ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            Season of simplicity
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;
