export default function CartMessageFail(){


return(
    <>
    <div className=" text-center md:h-screen flex flex-col justify-center items-center gap-10 bg-white">
      <img
        className="w-[65px] h-[65px] mt-5 md:mt-0"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/payment-check-error.svg"
        alt=""
      />
      <p
        className="text-[#C30000] text-[40px] font-bold capitalize leading-10 break-words"
      >
        ERROR 
      </p>
      <p className="text-xl">  Desafortunadamente su orden no pudo ser procesada.</p>
      <p className="text-xl text-center break-words">Asegúrese de que la dirección de facturación es la misma en la que está registrada su tarjeta de débito/crédito</p>
      <p className="text-xl text-center break-words">Si lo prefiere, pruebe con otro método de pago.</p>
      
         <button
            type="submit"
            className="w-[300px] mt-8 p-2 h-12 text-white text-sm capitalize cursor-pointer mx-1 my-0.5 bg-[--color-cart-text-button-comp]"
          >
            Pagar
          </button>
      
    </div>
    </>
)


}