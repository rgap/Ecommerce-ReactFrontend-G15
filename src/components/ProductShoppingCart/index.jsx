export default function ProductShoppingCart({
  productImage,
  productTitle,
  productSize,
  productColor,
  productPrice,
})

{
  return (
    <>
      <div className="cart-card-item flex xl:w-[450px] xl:gap-8 max-lg:gap-2 justify-around">
        <img
          className=" w-[120px] h-[140px] md:w-[140px] md:h-[150px] cursor-pointer hover:scale-90"
          src={productImage} 
          title=""
        />

        <div className="md:w-[210px] flex-col capitalize leading-7 flex justify-start gap-2 ">
          <div className="font-bold cursor-pointer hover:underline break-words">
            {productTitle}
          </div>
          <div className="">Talla: {productSize}</div>
          <div className="">Color: {productColor}</div>
          <div className="md:hidden button-comp flex gap-3">
            <img
              className="cursor-pointer w-7 h-7 bg-[#D1D9CF]"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/minimize.svg"
              alt=""
            />
            <span className="text-lg "> 1 </span>
            <img
              className="cursor-pointer w-7 h-7 bg-[#D1D9CF]"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/add.svg"
              alt=""
            />
          </div>
        </div>

        <div className="md:w-[100px] cursor-pointer flex flex-col justify-between place-items-end">
          <img
            className="h-6 w-6 hover:scale-125 border-2"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/close.svg"
            alt=""
          />

          <p className="md:hidden font-semibold md:mb-5"> `Precio: ${productPrice}`</p>
        </div>
      </div>
    </>
  )
}
