import {
  Breadcrumb,
  Button,
  Logo,
  ProductShoppingCart,
} from "../../components";
import { read } from "../../services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counterProductos } from "../../slices/cartSlice";

export default function CartShipping() {
  const navigate = useNavigate();

  const globalCart = useSelector(counterProductos);
  const [selectedValue, setSelectedValue] = useState("12");
  const [envio, setEnvio] = useState(12);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    setEnvio(Number(event.target.value));
  };

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  const total = globalCart.reduce((accumulator, product) => {
    const qty = product.quantity;
    const price = product.price;
    const subtotal = qty * price;
    return accumulator + subtotal;
  }, 0);
  const totalCart = total.toFixed(2)
  const totalenvio = total + envio;

  return (
    <div className="lg:flex">
      <section className="cart-info-left lg:w-[60%] flex flex-col">
        <Logo />
        <Breadcrumb />

        <div className="mx-10 xl:mx-20 my-5">
          <div className="grid-shipping">
            <p className="text-xl font-bold capitalize leading-8 break-words mb-5 mt-14">
              Opciones de Entrega
            </p>
            <hr className="h-1 w-full mb-5" />

            <div className="grid grid-cols-[35px_1fr_1fr] xl:grid-cols-[50px_1fr_1fr] gap-y-3">
              <input
                type="radio"
                value="25"
                checked={selectedValue === "25"}
                onChange={handleRadioChange}
              />
              <div className="font-bold text-lg text-[#868686]">
                Express Courier
              </div>
              <div className="font-bold text-lg text-[#606060]"> S/ 25.00 </div>
              <div> </div>
              <p className="font-semibold text-sm"> 2 a 3 dias Habiles</p>
              <div></div>
              <input
                type="radio"
                value="12"
                checked={selectedValue === "12"}
                onChange={handleRadioChange}
              />
              <div className="font-bold text-lg text-[#868686]">
                Envio Regular
              </div>
              <div className="font-bold text-lg text-[#606060]">S/ 12.00</div>
              <div> </div>
              <div className="font-semibold text-sm"> 5 a 7 dias Habiles</div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-10 xl:mx-20 mt-20">
          <div className="w-full flex justify-between">
            <div className="flex h-[40px] items-center">
              <img
                className="w-6 h-6 hover:scale-50 cursor-pointer"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                alt=""
              />
              <span
                onClick={redirect("/cart-info")}
                className="text-sm leading-6 cursor-pointer hover:underline"
              >
                Regresar
              </span>
            </div>

            <div className="flex w-[190px] h-[40px] justify-center items-center  flex-shrink-0">
              <Button
                ruta="/cart-payment"
                text="Continuar con Pago"
                type="button"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-lg:hidden cart-info-right lg:w-[40%]  bg-[--color-bg] flex flex-col justify-start items-center">
        <div className="w-full flex justify-center">
          <span className="text-xl font-bold mt-10 mb-5">
            Carrito de Compra
          </span>
        </div>

        <div className="lg:w-[350px] xl:w-[450px]">
          {globalCart.map((product) => (
            <div className="md:mb-2">
              <ProductShoppingCart
                productId={product.id}
                productImage={product.url}
                productTitle={product.name}
                productSize={product.size}
                productColor={product.color}
                productPrice={product.price}
                productQuantity={product.quantity}
                product={product}
                visible={true}
              />
            </div>
          ))}

          <div className="mt-5 flex flex-col  gap-1.5 mr-10 mb-7">
            <p className=" text-lg text-end font-semibold">
              Subtotal: <span> S/. {totalCart} </span>
            </p>
            <p className=" text-lg text-end font-semibold ">
              Envio: <span> S/ {envio.toFixed(2)} </span>
            </p>
            <p className=" text-lg text-end font-semibold "> Total: S/ {totalenvio.toFixed(2)} </p>
          </div>
        </div>
      </section>
    </div>
  );
}
