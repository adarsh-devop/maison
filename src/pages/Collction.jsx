
import { useContext } from "react";
import products from "../data/product";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

const Collection = () => {
  const { nightMode } = useContext(ThemeContext);

  return (
    <div className={`p-5 ${
      nightMode ? "bg-[#0c0c0c]" : "bg-[#F5EBD0]"
    }`}>

      <section className="flex flex-col items-center pb-6">

        <p className={`font-light uppercase ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          The maison edit
        </p>

        <h2 className={`text-xl sm:text-2xl lg:text-4xl font-ply ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          Our Collection
        </h2>

        <p className={`font-light ${
          nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
        }`}>
          Discover thoughtfully selected menswear
        </p>

      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="flex flex-col"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full rounded object-cover"
            />

            <h3 className={`mt-3 text-lg font-medium ${
              nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
            }`}>
              {product.name}
            </h3>

            <div className="mt-2 flex items-center">
              <span className={`${
                nightMode ? "text-[#F5EBD0]" : "text-[#7f011f]"
              }`}>
                ₹{product.offerPrice}
              </span>

              <span className={`ml-2 line-through ${
                nightMode ? "text-gray-400" : "text-gray-500"
              }`}>
                ₹{product.price}
              </span>
            </div>

            <button className={`mt-3 w-full px-4 py-3 border transition duration-300 ${
              nightMode
                ? "bg-[#F5EBD0] text-[#7f011f] border-[#F5EBD0] hover:bg-black hover:text-[#F5EBD0]"
                : "bg-[#F5EBD0] text-[#7f011f] border-[#7f011f] hover:bg-[#7f011f] hover:text-[#F5EBD0]"
            }`}>
              View Product
            </button>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default Collection;
