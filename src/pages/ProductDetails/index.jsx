import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsArray } from "./mockProducts"; // Adjust the import path as needed

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productsArray.find((p) => p.id === productId);

  const [selectedColor, setSelectedColor] = useState(product?.color[0] || "");
  const [selectedSize, setSelectedSize] = useState(
    product?.size.m ? "m" : Object.keys(product?.size)[0] || ""
  );
  const [availableStock, setAvailableStock] = useState(0);
  const [currentPrice, setCurrentPrice] = useState("");
  const [mainImage, setMainImage] = useState(product?.image || "");

  useEffect(() => {
    if (selectedSize && selectedColor) {
      const stock = product.size[selectedSize]?.[selectedColor] || 0;
      setAvailableStock(stock);
      const price = product.prices[selectedSize]?.[selectedColor] || "";
      setCurrentPrice(price);
    }
  }, [selectedSize, selectedColor, product.size, product.prices]);

  if (!product) {
    return <div>Product not found</div>;
  }

  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  // Function to render sizes
  const renderSizes = () => {
    return Object.keys(product.size).map((size) => (
      <button
        key={size}
        className={`p-2 border rounded-md mr-2 transition-all duration-300 ease-in-out
                    ${
                      selectedSize === size
                        ? "bg-[--color-link-text] text-white border-[--color-link-text]"
                        : "bg-white hover:bg-[--color-cart-bg-gray] border-gray-300"
                    }`}
        onClick={() => setSelectedSize(size)}
      >
        {size.toUpperCase()}
      </button>
    ));
  };

  // Function to render color options
  const renderColorOptions = () => {
    return product.color.map((color, index) => (
      <button
        key={index}
        style={{ backgroundColor: color }} // Assuming color names are CSS color values
        className={`w-8 h-8 rounded-full mr-2 border-4 transition-all duration-300 ease-in-out
                    ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent hover:border-gray-300"
                    }`}
        onClick={() => setSelectedColor(color)}
      ></button>
    ));
  };

  // Function to render additional images in a slider
  const renderImageSlider = () => {
    return (
      <div className="flex overflow-x-auto">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className="w-24 h-24 object-cover mr-2 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="mx-auto py-8 px-4 md:px-8 bg-[--color-bg]">
      <section className="flex flex-col md:flex-row gap-8 m-auto max-w-[1200px]">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 ">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-auto mb-4"
          />
          <div className="mt-4">{renderImageSlider()}</div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 bg-white shadow-lg p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4">{product.productDescription}</p>

          <div className="mb-4 p-4 bg-gray-100 rounded-md">
            <strong>Materiales:</strong> {product.productMaterial}
          </div>
          <div className="mb-4 p-4 bg-gray-100 rounded-md">
            <strong>Instrucciones:</strong> {product.productCare.join(", ")}
          </div>
          <div className="mb-4 p-4 bg-gray-100 rounded-md">
            <strong>Precio:</strong> {currentPrice || product.price}
          </div>

          <div className="flex lg:flex-row md:flex-col flex-col  items-center mb-4 mt-8 justify-between gap-6 lg:gap-0">
            <div className="flex">
              {renderColorOptions()}
              {selectedColor && (
                <span className="ml-2 text-lg">
                  Color:{" "}
                  <strong>
                    {selectedColor.charAt(0).toUpperCase() +
                      selectedColor.slice(1)}
                  </strong>
                </span>
              )}
            </div>
            <div className="mt-4 sm:mt-0">{renderSizes()}</div>
            {/* onClick={() => handleAddToCart(product)} */}
            <button className="items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm leading-normal transition-transform duration-300 ease-in-out">
              Agregar al carrito
            </button>
          </div>

          {selectedSize && selectedColor && (
            <div className="text-lg mb-4 mt-8 text-center lg:text-left">
              Stock Disponible: <strong>{availableStock}</strong>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
