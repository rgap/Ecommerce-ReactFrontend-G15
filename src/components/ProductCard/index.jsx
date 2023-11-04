/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, resizingStyle, hideColors }) {
  const navigate = useNavigate();

  const goToProductDetails = () => {
    const productPath = `${product.id}/${encodeURIComponent(
      product.title.replace(/\s+/g, "-")
    )}`;
    navigate(`/products/${productPath}`);
  };

  const colorMap = {
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

    brown: "bg-amber-500",
    turquoise: "bg-turquoise-500",
    wine: "bg-wine-500",
    gold: "bg-gold-500",
    maroon: "bg-red-800",
    cream: "bg-yellow-100",
  };

  const colorClass = (color) => {
    return colorMap[color] || "bg-gray-200"; // Color por defecto
  };

  const mediumPrice = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(product.prices?.m?.[product.colors[0]] || product.price);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer bg-white"
      onClick={goToProductDetails}
    >
      <div className="p-4 bg-white h-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto mb-3"
        />

        <div className="flex flex-col items-center">
          {/* Izquierda */}
          <div className="grid h-[120px] text-center align-center">
            <div>
              <h1 className="font-bold text-xl text-gray-800">
                {product.title}
              </h1>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                {product.shortDescription}
              </p>
            </div>

            {/* Derecha */}
            <div className="flex items-center justify-around">
              <div className="flex items-center justify-around gap-5">
                {/* Colores */}
                {!hideColors && (
                  <div className="flex gap-0">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 sm:w-6 sm:h-6 p-2 sm:p-2 rounded-full border-slate-400 border-2 mr-2 md:mr-[1px] lg:mr-2 ${colorClass(
                          color
                        )}`}
                      ></div>
                    ))}
                  </div>
                )}
                <div className="text-[14px] sm:text-[16px] font-bold text-gray-800">
                  {mediumPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
