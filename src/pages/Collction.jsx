import React from "react";
import products from "../data/product";

const Collction = () => {
  return (
    <div className=" bg-[#F5EBD0] p-5">
      <section className="flex flex-col items-center pb-6 ">
        <p className="uppercase text-[#7f011f] font-light ">The maison edit</p>
        <p className=" text-[#7f011f] font-medium text-4xl font-ply justify-around">
          Our Collection
        </p>
        <p className="text-[#7f011f] font-extralight font-out gap-2 ">
          discover thughtfully selected manswear
        </p>

       
      </section>


       <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
         {products.map((product, index) => (
            <div key={index} className="max-w-md">
               <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full rounded object-cover"
            />

            <h3>
              {product.name}
            </h3>

            <p>
              {product.offerPrice}
              <span>
                {product.price}
              </span>
            </p>

            <button className=" w-full text-[#F5EBD0] bg-[#7f011f] px-30 py-3 ">
              view product
            </button>
            </div>
         ))}
        </div>
    </div>
  );
};

export default Collction;
