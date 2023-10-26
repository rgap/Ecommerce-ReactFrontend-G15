import QuantityButton from "../QuantityButton";

export default function ProductShoppingCart({
  productId,  
  productImage,
  productTitle,
  productSize,
  productColor,
  productPrice,
  productQuantity,
}) {
  return (
    <div className="flex w-full mb-2">
      <img
        className="w-[100px] h-[115px] cursor-pointer hover:scale-90  "
        src={productImage}
        title={productTitle}
      />

      <div className="w-full flex justify-center">
        <div className="flex flex-col capitalize leading-7 gap-2">
          <p className="font-semibold">{productTitle} <span className="hidden" > {productId} </span> </p>
          <p> Talla: {productSize} </p>
          <p> Color: {productColor} </p>
          <p className="md:hidden font-semibold break-words">
            Precio: <span className="font-semibold">S/.{productPrice}</span>
          </p>
          <QuantityButton productQuantity={productQuantity} />
        </div>
      </div>

      <div className="w-full cursor-pointer flex flex-col place-items-center">
        <img
          className="h-6 w-6 hover:scale-125 border-2"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/close.svg"
          alt=""
        />
      </div>
    </div>
  );
}
