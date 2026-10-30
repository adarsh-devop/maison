
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/product";
import { ThemeContext } from "../Context/ThemeContext";

const ProductDetils = () => {
  const { id } = useParams();
  const { nightMode } = useContext(ThemeContext);

  const productfound = products.find((item) => item.id === Number(id));

  if (!productfound)
    return (
      <p className={`flex flex-col h-screen text-6xl font-ply items-center justify-center ${
        nightMode ? "bg-black text-[#F5EBD0]" : "bg-[#F5EBD0] text-[#7f011f]"
      }`}>
        Producte not Found
      </p>
    );

  return (
    <div className={`flex h-screen px-7 py-12 ${
      nightMode ? "bg-[#0c0c0c]" : "bg-[#F5EBD0]"
    }`}>
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">

        <img
          src={productfound.image}
          alt={productfound.name}
          className="h-[450px] w-full rounded-2xl object-cover"
        />

        <div className="w-full items-start flex flex-col px-9">

          <Link
            to="/coll"
            className={`uppercase font-medium font-out ${
              nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
            }`}
          >
            go back
          </Link>

          <p className={`uppercase mt-10 tracking-[0.3em] font-light font-ply text-1xl pb-6 ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            {productfound.category}
          </p>

          <p className={`font-ply text-4xl ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            {productfound.name}
          </p>

          <div className="flex items-center gap-3">
            <p className={`font-ply text-md ${
              nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
            }`}>
              ${productfound.offerPrice}
            </p>

            <p className={`ml-2 line-through ${
              nightMode ? "text-gray-400" : "text-gray-500"
            }`}>
              ${productfound.price}
            </p>
          </div>

          <p className={`mt-10 font-light font-ply ${
            nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
          }`}>
            {productfound.description}
          </p>

          <button className={`mt-10 uppercase font-ply border p-3 rounded-md px-4 w-full transition ${
            nightMode
              ? "bg-[#F5EBD0] border-[#F5EBD0] text-[#7f011f] hover:bg-black hover:text-[#F5EBD0]"
              : "bg-[#7f011f] border-[#7f011f] text-blue-50 hover:bg-[#F5EBD0] hover:text-[#7f011f]"
          }`}>
            add to bag
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetils;
