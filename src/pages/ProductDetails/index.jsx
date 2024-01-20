import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "../../components/Carousel";
import { sendGetRequest } from "../../services";
import { addToCart } from "../../slices/cartSlice";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [availableStock, setAvailableStock] = useState(0);
  const [currentPrice, setCurrentPrice] = useState("");
  const [mainImage, setMainImage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await sendGetRequest("products", productId);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      }
    };
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
      setMainImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    if (product && selectedSize && selectedColor) {
      const stock = product.stock[selectedSize][selectedColor];
      const price = product.prices[selectedSize][selectedColor];
      setAvailableStock(stock);
      setCurrentPrice(price);
    }
  }, [product, selectedSize, selectedColor]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const customToastStyle = {
    backgroundColor: `var(--color-link-text)`,
    color: "white",
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        color: selectedColor,
        id: `${productId}.${selectedSize}.${selectedColor}`,
        name: product.title,
        price: currentPrice,
        quantity: 1,
        size: selectedSize,
        url: product.image,
      })
    );

    toast(
      <>
        <strong>{product.title}</strong> fue agregado al carrito de compras
      </>,
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        style: customToastStyle,
      }
    );
  };

  const renderSizes = () =>
    product.sizes.map((size) => (
      <button
        key={size}
        className={`p-2 border rounded-md mr-2 ${
          selectedSize === size
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white hover:bg-gray-300 border-gray-300"
        }`}
        onClick={() => setSelectedSize(size)}
      >
        {size.toUpperCase()}
      </button>
    ));

  const renderColorOptions = () =>
    product.availableColors.map((color) => (
      <button
        key={color}
        style={{ backgroundColor: color }}
        className={`w-8 h-8 rounded-full mr-2 border-2 ${
          selectedColor === color ? "border-black" : "hover:border-gray-300"
        }`}
        onClick={() => setSelectedColor(color)}
      ></button>
    ));

  const renderImageSlider = () => {
    return (
      <div className="flex overflow-x-auto">
        <img
          key={0}
          src={product.image}
          alt={`Product ${0}`}
          className="w-24 h-24 object-cover mr-2 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out"
          onClick={() => setMainImage(product.image)}
        />
        {product.imageArray.map((image, index) => (
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

  function formatPrice() {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(currentPrice || product.price);
  }

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <>
      <ToastContainer position="top-left" />
      <main className="py-8 px-4  md:px-8 bg-[--color-bg] flex justify-center">
        <section className="flex flex-col gap-8 max-w-[1200px] mb-4">
          <nav aria-label="breadcrumb">
            <ol className="flex text-xl">
              <li className="mr-2">
                <a
                  onClick={redirect("/products")}
                  className="text-[--color-link-text] hover:underline font-semibold	"
                >
                  Productos
                </a>
              </li>
              <li className="text-gray-700 font-bold">/</li>
              <li className="ml-2 font-bold">{product.title}</li>
            </ol>
          </nav>

          <section className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 ">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-auto mb-4"
              />
              <div className="mt-4">{renderImageSlider()}</div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 bg-white shadow-lg p-6 rounded-lg">
              <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
                {product.title}
              </h1>
              <p className="mb-4">{product.productDescription}</p>

              <div className="mb-4 p-4 bg-gray-100 rounded-md">
                <strong>Materiales:</strong> {product.productMaterial}
              </div>
              <div className="mb-4 p-4 bg-gray-100 rounded-md">
                <strong>Instrucciones:</strong> {product.productCare}
              </div>
              <div className="mb-4 p-4 bg-gray-100 rounded-md">
                <strong>Precio:</strong> {formatPrice()}
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
                <button
                  onClick={handleAddToCart}
                  className="items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm leading-normal transition-transform duration-300 ease-in-out"
                >
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
          <section className="mb-6">
            <h2 className="text-2xl font-bold my-10 text-center md:text-left">
              También te puede interesar
            </h2>
            <div className="ProductDetails">
              <Carousel />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
