
import products from "../data/products";

const Collection = () => {
  return (
    <section className="bg-amber-50 p-6">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Our Collection
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg bg-white p-4 shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full rounded object-cover"
            />

            <h3 className="mt-3 text-lg font-semibold">
              {product.name}
            </h3>

            <p className="text-gray-500">{product.category}</p>

            <p className="mt-2 font-bold text-red-800">
              ₹{product.offerPrice}
              <span className="ml-2 text-sm text-gray-400 line-through">
                ₹{product.price}
              </span>
            </p>

            <button className="mt-3 w-full rounded bg-red-800 p-2 text-white hover:bg-red-900">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
