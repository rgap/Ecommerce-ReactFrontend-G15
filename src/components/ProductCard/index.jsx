/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, hideColors }) {
  const navigate = useNavigate();

  const goToProductDetails = () => {
    const productPath = `${product.id}/${encodeURIComponent(
      product.title.replace(/\s+/g, "-")
    )}`;
    navigate(`/products/${productPath}`);
  };

  const colorMap = {
    // Existing colors
    green: "bg-green-500",
    blue: "bg-blue-500",
    lime: "bg-lime-500",
    teal: "bg-teal-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    indigo: "bg-indigo-500",
    gray: "bg-gray-500",
    black: "bg-black",
    white: "bg-white",
    cyan: "bg-cyan-500",
    emerald: "bg-emerald-500",
    fuchsia: "bg-fuchsia-500",
    rose: "bg-rose-500",
    sky: "bg-sky-500",
    violet: "bg-violet-500",

    // Added from productsArray
    brown: "bg-amber-500",
    turquoise: "bg-turquoise-500",
    wine: "bg-wine-500",
    gold: "bg-gold-500",
    maroon: "bg-red-800",
    cream: "bg-yellow-100",
    // More colors can be added as needed
  };

  // Function to map color names to Tailwind CSS color classes
  const colorClass = (color) => {
    return colorMap[color] || "bg-gray-200"; // Default color if not found
  };

  // Extract the price for medium size of the first available color
  const mediumPrice = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(product.prices?.m?.[product.colors[0]] || product.price);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer bg-white"
      onClick={goToProductDetails}
    >
      <div className="p-4 bg-white">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto mb-3"
        />

        <div className="flex flex-col justify-between text-center gap-3">
          {/* Left Section: Title and Short Description */}
          <div>
            <h2 className="font-bold text-xl text-gray-800">{product.title}</h2>
          </div>
          <div>
            <p className="text-sm text-gray-600">{product.shortDescription}</p>
          </div>

          {/* Right Section: Price and Colors */}
          <div className="flex items-center justify-between">
            {/* Colors */}
            {!hideColors && (
              <div className="flex ml-4">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full p-2 border-slate-400 border-2 mr-2 ${colorClass(
                      color
                    )}`}
                  ></div>
                ))}
              </div>
            )}
            {/* Price */}
            <div className="font-bold text-lg text-gray-800">{mediumPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
