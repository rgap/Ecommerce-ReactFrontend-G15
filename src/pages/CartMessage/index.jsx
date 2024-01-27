import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CartMessage() {
  const location = useLocation();
  const { purchaseBody } = location.state || {};

  // useEffect(() => {

  // }, []);

  return (
    <main className="text-center md:h-screen flex flex-col justify-center items-center gap-10 bg-white mb-10 my-8">
      <img
        className="w-[65px] h-[65px] mt-5 md:mt-0"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/payment-check-circle.svg"
        alt=""
      />
      <p className="text-[#00966D] text-[40px] font-bold capitalize leading-10 break-words">
        Pago exitoso
      </p>
      <p className="text-xl">
        <span className="font-semibold"> GRACIAS </span>, la orden #
        {purchaseBody.orderId || "---"} ha sido
        <span className="font-semibold"> GENERADA </span>.
      </p>
      <p className="text-xl">
        El recibo de su compra ha sido enviado a
        <span className="font-semibold">
          {" "}
          {purchaseBody.payerEmail || "---"}{" "}
        </span>
      </p>

      <p className="text-lg text-[#796969]">
        Contactenos en caso de alguna duda con respecto a su pedido.
      </p>
      <div className="flex gap-2 place-items-center md:mb-0 mb-5">
        <img
          className="w-5 h-5"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/whatsapp.svg"
          alt=""
        />
        <p className="text-sm text-[#404040]"> + 51 123909090</p>
      </div>
    </main>
  );
}
