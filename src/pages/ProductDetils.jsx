import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/product";

const ProductDetils = () => {
  const { id } = useParams();
  const productfound = products.find((item) => item.id === Number(id));

  if (!productfound)
    return (
      <p className=" flex flex-col h-screen text-6xl font-ply items-center justify-center text-[#7f011f]">
        Producte not Found
      </p>
    );

  return (
    <div className="flex bg-[#F5EBD0] h-screen px-7 py-12">
      <div className="mx-auto grid max-w-5xl items-center grap-10 md:grid-cols-2">
        <img
          src={productfound.image}
          alt=""
          className=" h-[450px] w-full rounded-2xl object-cover "
        />
        <div className=" w-full items-start flex flex-col px-9">
          <Link to ="/coll" className="uppercase font-medium font-out text-[#7f011f]">go back</Link>
          <p className="uppercase mt-10 tracking-[0.3em] font-light flex flex-col max-w-xl text-center items-center font-ply  text-1xl  text-[#7f011f] pb-6">
            {productfound.category}
          </p>
          <p className="flex flex-col max-w-xl text-center items-center font-ply  text-4xl  text-[#7f011f]">
            {productfound.name}
          </p>

          <div className="flex items-center gap-3">
            <p className="flex max-w-xl text-center items-center font-ply  text-md text-[#7f011f] ">
              ${productfound.offerPrice}
            </p>

            <span className="ml-2 text-gray-500 line-through">
              ${productfound.price}
            </span>
          </div>
          <p className="mt-10 font-light font-ply text-[#7f011f]">
            {productfound.description}
          </p>
          <button className="mt-10 uppercase font-ply bg-[#7f011f] border border-[#7f011f] text-blue-50 p-3 rounded-md px-4 hover:bg-[#F5EBD0]  hover:text-[#7f011f] w-full ">
            add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetils;
