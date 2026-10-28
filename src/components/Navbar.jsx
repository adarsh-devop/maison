import { Link } from "react-router-dom";
const Navbar = () => (
  <div className="p-5 px-6 bg-[#F5EBD0]   border border-b-rose-200  ">
    <div className="flex  justify-between items-center max-w-6xl w-full mx-auto" >
      <div className="text-2xl font-bold cursor-pointer text-[#7f011f]">
        MAISON
      </div>

      <div className="flex gap-8 text-blue-100 ">
        <Link to="/" className="cursor-pointer text-[#7f011f] font-medium">
          Home
        </Link>
        <Link to="/coll" className="cursor-pointer text-[#7f011f] font-medium">
          Collction
        </Link>
        <Link to="/abo" className="cursor-pointer text-[#7f011f] font-medium">
          Ourstory
        </Link>
        <Link to="/con" className="cursor-pointer text-[#7f011f] font-medium">
          About
        </Link>
      </div>

      <button className="bg-[#7f011f] text-blue-50 outline-0 px-4 py-1.5 rounded-md hover:bg-[#F5EBD0] hover:text-[#7f011f] border border-[#7f011f] transition duration-400">
        Login
      </button>
    </div>
  </div>
);

export default Navbar;
