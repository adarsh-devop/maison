
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { nightMode, darkmode } = useContext(ThemeContext);

  return (
    <div
      className={`p-5 px-6 border border-b-rose-200 ${
        nightMode ? "bg-black" : "bg-[#F5EBD0]"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl w-full mx-auto">

        <div className={`text-2xl font-bold cursor-pointer ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          MAISON
        </div>

        <div className="flex gap-8">
          <Link to="/" className={`cursor-pointer font-medium ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            Home
          </Link>

          <Link to="/coll" className={`cursor-pointer font-medium ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            Collction
          </Link>

          <Link to="/abo" className={`cursor-pointer font-medium ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            Ourstory
          </Link>

          <Link to="/con" className={`cursor-pointer font-medium ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            className={`outline-0 px-4 py-2 rounded-md border transition ${
              nightMode
                ? "bg-[#F5EBD0] text-[#7f011f] border-[#F5EBD0] hover:bg-black hover:text-[#F5EBD0]"
                : "bg-[#7f011f] text-blue-50 border-[#7f011f] hover:bg-[#F5EBD0] hover:text-[#7f011f]"
            }`}
          >
            Login
          </button>

          <button
            onClick={darkmode}
            className={`uppercase font-ply px-4 py-2 rounded-md border whitespace-nowrap transition-colors ${
              nightMode
                ? "bg-[#F5EBD0] text-[#7f011f] border-[#F5EBD0] hover:bg-black hover:text-[#F5EBD0]"
                : "bg-[#7f011f] text-blue-50 border-[#7f011f] hover:bg-[#F5EBD0] hover:text-[#7f011f]"
            }`}
          >
            {nightMode ? "LIGHT" : "DARK"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
