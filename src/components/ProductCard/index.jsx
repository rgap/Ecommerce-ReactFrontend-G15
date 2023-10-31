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

  // Function to map color names to Tailwind CSS color classes
  const colorClass = (color) => {
    const colorMap = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      lime: "bg-lime-500",
      teal: "bg-teal-500",
      yellow: "bg-yellow-500",
      // Add more mappings as needed
    };
    return colorMap[color] || "bg-gray-200"; // Default color if not found
  };

  // Extract the price for medium size of the first available color
  const mediumPrice = product.prices?.m?.[product.color[0]] || product.price;

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer bg-white"
      onClick={goToProductDetails}
    >
      <img
        className="w-full  object-cover transition-transform duration-300 hover:scale-105"
        src={product.image}
        alt={product.title}
      />

      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-xl text-gray-800 mb-1">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600">{product.shortDescription}</p>
          </div>
          <div className="font-bold text-lg text-gray-800 flex flex-col justify-center ml-4">
            {mediumPrice}
          </div>
        </div>
        {!hideColors && (
          <>
            <div className="flex justify-center gap-2 mt-3">
              {/* <span className="mr-5">Colores</span> */}
              {product.color.map((color, index) => (
                <div
                  key={index}
                  className={`${colorClass(color)} w-6 h-6 rounded-full`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
