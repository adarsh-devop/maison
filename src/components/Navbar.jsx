const Navbar = () => (
  <div className="p-2 bg-[#F5EBD0] flex  justify-between items-center border border-b-rose-200  ">
    <div className="text-2xl font-bold cursor-pointer text-[#7f011f]">MAISON</div>

    <div className="flex gap-8 text-blue-100 ">
      <p className="cursor-pointer text-[#7f011f] font-medium">Home</p>
      <p className="cursor-pointer text-[#7f011f] font-medium">Contact</p>
      <p className="cursor-pointer text-[#7f011f] font-medium">About</p>
    </div>

    <button className="bg-[#7f011f] text-blue-50 outline-0 px-4 py-1.5 rounded-md hover:bg-[#F5EBD0] hover:text-[#7f011f] transition duration-500">Login</button>
  </div>
)

export default Navbar