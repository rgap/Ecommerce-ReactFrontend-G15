import QuantityButton from "../QuantityButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../slices/cartSlice";

export default function ProductShoppingCart({
  productId,
  productImage,
  productTitle,
  productSize,
  productColor,
  productPrice,
  productQuantity,
  product,
  visible,
}) {
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);

  const handleDeleteFromCart = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile(); // Verifica  tamaño de la ventana cuando se carga pagina
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div
      className="flex flex-row gap-5 w-full border p-2 rounded-md bg-white "
      key={productId}
    >
      <div className="flex items-center md:items-start">
        <img
          className="w-[100px] h-[100px] hover:scale-90 "
          src={productImage}
          title={productTitle}
          alt={productTitle}
        />
      </div>

      <div className="flex-grow  flex">
        <div className="flex flex-col capitalize gap-2 ml-2">
          <span className="hidden"> {productId} </span>
          <p className="font-semibold "> {productTitle} </p>
          <p className="text-sm"> Talla: {productSize} </p>
          <p className="text-sm"> Color: {productColor} </p>

          {isMobile || visible ? (
            <>
              <p className="text-sm "> Precio: S/.{productPrice} </p>
              
                <QuantityButton
                  productId={productId}
                  productQuantity={productQuantity}
                  product={product}
                />
             
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="">
        <img
          onClick={() => handleDeleteFromCart(productId)}
          className="h-6 w-6 hover:scale-125 hover:cursor-pointer border-2 "
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/close.svg"
          alt=""
        />
      </div>
    </div>
  );
}
