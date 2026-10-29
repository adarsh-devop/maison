const Ourstory = () => {
  
  return (
    <div className="flex flex-row items-center h-screen bg-[#F5EBD0] ">
      <div className="flex flex-col gap-4 max-w-3xl mx-auto p-5">
        <p className="font-extralight  text-[#7f011f]">
          The Story Behind MAISON
        </p>
        <h1 className=" font-ply text-7xl  text-[#7f011f]">
          More than fashion.
        </h1>
        <p className="font-extralight font-osw text-2xl  text-[#7f011f]">
          It's a statement.
        </p>
        <p className="font-extralight font-osw text-2xl  text-[#7f011f]">
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
    </div>
  );
};

export default Ourstory;
