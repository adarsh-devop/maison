
import products from "../data/product";
import { Link } from "react-router-dom";
const Collection = () => {
  return (
    <div className="bg-[#F5EBD0] p-5">
      <section className="flex flex-col items-center pb-6">
        <p className="font-light uppercase text-[#7f011f]">
          The maison edit
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-4xl font-ply text-[#7f011f]">
          Our Collection
        </h2>

        <p className="text-[#7f011f] font-light">
          Discover thoughtfully selected menswear
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}
           key={product.id} className="flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full rounded object-cover"
            />

            <h3 className="mt-3 text-lg font-medium">
              {product.name}
            </h3>

            <p className="mt-2 text-[#7f011f]">
              ₹{product.offerPrice}
              <span className="ml-2 text-gray-500 line-through">
                ₹{product.price}
              </span>
            </p>

            <button className="mt-3 w-full bg-[#F5EBD0] px-4 py-3 text-[#7f011f] hover:bg-[#7f011f] hover:text-[#F5EBD0] border border-[#7f011f] transition duration-400">
              View Product
            </button>
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
