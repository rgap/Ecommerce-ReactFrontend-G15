import QuantityButton from "../QuantityButton";

export default function ProductShoppingCart({
  productImage,
  productTitle,
  productSize,
  productColor,
  productPrice,
  productQuantity,
}) {
  return (
    <div className="product-shopping-cart flex xl:gap-8 justify-start">
      <img
        className=" w-[120px] h-[140px] md:w-[140px] md:h-[150px] cursor-pointer hover:scale-90 "
        src={productImage}
        title={productTitle}
      />

      <div className="md:w-[210px] flex-col capitalize leading-7 flex justify-start gap-1.5  ">
        <div className="font-bold cursor-pointer hover:underline break-words">
          {productTitle}
        </div>
        <div> Talla: {productSize} </div>
        <div> Color: {productColor} </div>
        <QuantityButton productQuantity={productQuantity}/>
      </div>

      <div className="md:w-[100px] cursor-pointer flex flex-col justify-between place-items-end ">
        <img
          className="h-6 w-6 hover:scale-125 border-2"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/close.svg"
          alt=""
        />
        <p className="md:hidden font-semibold break-words"> S/.{productPrice} </p>
      </div>
    </div>
  );
}
