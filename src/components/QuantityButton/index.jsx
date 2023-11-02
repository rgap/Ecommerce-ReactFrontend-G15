import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../slices/cartSlice";

export default function QuantityButton({productId,productQuantity,product,className}) {
  
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className={`${className} flex gap-2 md:gap-3.5 w-[70px] h-[28px] md:w-[80px] md:h-[36px]`}>
      <img
        onClick={() => handleRemoveFromCart(productId)}
        className="cursor-pointer w-5 h-5 md:w-7 md:h-7 bg-[--color-quantity-button] hover:scale-90 hover:text-black"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/minimize.svg"
        alt=""
      />

      <span className="text-sm md:text-lg self-baseline "> {productQuantity} </span>

      <img
        onClick={() => handleAddToCart(product)}
        className="cursor-pointer w-5 h-5 md:w-7 md:h-7 bg-[--color-quantity-button] hover:scale-90 hover:text-black"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/add.svg"
        alt=""
      />
    </div>
  );
}
