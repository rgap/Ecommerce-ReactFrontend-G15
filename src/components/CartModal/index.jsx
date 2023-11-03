export default function CartModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null; // No mostrar el modal si isOpen es falso
  }
  return (
    <div className=" container relative w-[450px] h-[320px] flex flex-col items-center justify-center bg-[--color-bg]">
      <p className="font-bold text-lg"> Tu carrito de compra esta Vacio </p>
      <p className="">¿Aun no sabes que elegir?</p>

      <button
        type="button"
        className="w-1/2 mt-8 p-2 h-12 text-white text-sm capitalize cursor-pointer mx-1 my-0.5 bg-[--color-cart-text-button-comp]"
      >
        Ver Productos
      </button>

      <button
        type="button"
        className="w-1/2 mt-8 p-2 h-12 text-white text-sm capitalize cursor-pointer mx-1 my-0.5 bg-[--color-cart-text-button-comp]"
      >
        Ver Descuentos
      </button>

      <img
        onClick={onClose}
        className="cursor-pointer hover:scale-75 absolute top-1 right-1"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/close.svg"
        alt=""
      />
    </div>
  );
}
