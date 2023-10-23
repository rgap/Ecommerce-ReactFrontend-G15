import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCounter } from "../../slices/counterSlice";

export default function QuantityButton({ productId, productQuantity }) {
  // const [counter, setCounter] = useState(productQuantity);
  // const sumCounter = () => {
  //   // setCounter(counter + 1)

  // }
  // const restCounter = () => {
  //     if (counter >= 1) setCounter(counter - 1);
  // }

  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3.5 w-[70px] h-[28px] md:w-[80px] md:h-[36px] ">
      <img
        onClick={() => dispatch(decrement(productId))}
        className="cursor-pointer w-5 h-5 md:w-7 md:h-7 bg-[--color-quantity-button] hover:scale-90 hover:text-black"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/minimize.svg"
        alt=""
      />
      <span className="text-lg self-baseline "> {counter} </span>

      <img
        onClick={() => dispatch(increment(productId))}
        className="cursor-pointer w-5 h-5 md:w-7 md:h-7 bg-[--color-quantity-button] hover:scale-90 hover:text-black"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/add.svg"
        alt=""
      />
    </div>
  );
}
