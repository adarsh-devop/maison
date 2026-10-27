import Discover from "./Discover ";
const Home = () => {
  return (
    <div className="flex  items-center bg-[#F5EBD0] h-screen">
      <div className="flex flex-col p-10 gap-5 ">
        <p className="uppercase text-[#7f011f] font-medium">
          Designed for the everyday
        </p>
        <p className="font-ply text-6xl text-[#7f011f] ">A little more you.</p>
        <p className="text-[#7f011f] font-extralight font-out">
          Discover thoughtfully curated pieces that bring simplicity, character,
          and timeless style into your everyday life.
        </p>
        <div className="flex gap-10 font-ply">
          <button className="bg-[#7f011f]  border border-[#7f011f] text-blue-50 p-3 rounded-md px-4 hover:bg-[#F5EBD0]  hover:text-[#7f011f]">
            Explore
          </button>
          <button className="bg-[#7f011f] border border-[#7f011f] text-blue-50 p-3 rounded-md px-4 hover:bg-[#F5EBD0]  hover:text-[#7f011f] ">
            Collection
          </button>
        </div>
        <div className="flex gap-10 text-[#7f011f] font-extralight font-out ">
          <div>
            <p className="text-3xl font-normal font-bold">100%</p>
            <p>Thoughtfully curated</p>
          </div>
          <div>
            <p className="text-3xl font-normal font-bold">10%</p>
            <p>Curated</p>
          </div>
        </div>
      </div>
      <div className="px-5 relative ">
        <img
          className="  rounded-md max-w-xl"
          src="https://maison-ui-self.vercel.app/assets/mens-fashion-B0stqacK.png"
        />
        <div className="bg-[#F5EBD0] absolute bottom-2 left-8 p-3 rounded-sm ">
          <p className="text-[#7f011f] font-out uppercase text-sm font-light">
            The new collection
          </p>
          <p className="text-[#7f011f] font-ply font-medium mt-1">
            Season of simplicity
          </p>
        </div>
        
      </div>

    </div>
  );
};

export default Home;
