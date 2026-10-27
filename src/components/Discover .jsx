import products from "../data/product";
const Discover = () => {
  const products = [
    {
      id: 1,
      name: "Classic Burgundy Shirt",
      category: "Shirts",
      price: 1499,
      offerPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1709417596263-a7a965e73314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 2,
      name: "Essential White Shirt",
      category: "Shirts",
      price: 1799,
      offerPrice: 1399,
      image:
        "https://plus.unsplash.com/premium_photo-1749747566115-ad1db55754ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 3,
      name: "Casual Beige Jacket",
      category: "Jackets",
      price: 2999,
      offerPrice: 2499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKJrqTsDaeh1WlnuxxQ6c6g1QE2f-eVzrIeneQjZV1A&s=10",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f7f2e6]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 p-5 pt-6 ">
        <p className="rounded-md border border-[#7f011f] px-2 text-center text-[#7f011f]">
          The MAISON Edit
        </p>

        <h1 className="text-center font-ply text-5xl text-[#7f011f]">
          Discover your style.
        </h1>

        <p className="text-center text-[#7f011f]">
          Everyday essentials, timeless classics, and carefully selected pieces
          designed to make every outfit feel effortless.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-6 px-5">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col relative">
            <div>
              <p className="absolute top-2 left-2 rounded-md bg-[#7f011f] px-2 text-sm text-blue-50">
                {product.category}
              </p>
              <p className="absolute bottom-5 left-2 rounded-md px-2 text-amber-100 text-5xl font-ply">
                {product.name}
              </p>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full rounded-2xl object-cover"
            />

            <h3 className="mt-3 text-lg font-medium"></h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
