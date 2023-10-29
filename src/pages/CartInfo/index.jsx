import { inputs } from "./form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CartInputForm,
  ProductShoppingCart,
  QuantityButton,
} from "../../components";
import { read, update } from "../../services";

export default function CartInfo() {
  const [products, setProducts] = useState([]);

  const getShoppingCart = async () => {
    const response = await read("shoppingcart");
    setProducts(response);
  };
  useEffect(() => {
    getShoppingCart();
  }, []);

  const [values, setValues] = useState({
    pais: "",
    nombre: "",
    apellidos: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    region: "",
    telefono: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    ciudad: "",
    region: "",
    telefono: "",
  });

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="lg:flex">
        <section className="cart-info-left lg:w-[60%] ml-10">
          <div className="mt-5">
            <img
              className="h-[50px] md:h-[70px]"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
              alt=""
            />
          </div>

          <div className="flex justify-center">
            <div className="md:flex place-items-baseline w-[300px] md:w-[400px] xl:w-[600px] justify-between ">
              <div className="text-lg break-words"> Contacto </div>
              <div className="max-sm:hidden flex justify-start items-end gap-5">
                <p className="text-lg  break-words"> ¿Ya tienes una cuenta? </p>
                <p className="text-lg  break-words cursor-pointer hover:underline">
                  Ingresar
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <form autocomplete="off" className="mt-3 flex-col justify-center">
              <div className="h-[40px] flex border border-gray-700 gap-3 w-[300px] md:w-[400px] xl:w-[600px]  ">
                <img
                  className="ml-3 w-4"
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/04de544e8a09d48261e813159d42e78e59b5043c/icons/icon-person-shopping-cart.svg"
                  alt=""
                />
                <input
                  className="w-full outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" Tu correo electronico."
                />
              </div>

              <div className="flex mt-3 gap-2 items-center">
                <input type="checkbox" id="direccion" />
                <label for="ofertas" className="text-sm leading-6 break-words">
                  Recibir ofertas y novedades por email.
                </label>
              </div>
            </form>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="text-lg capitalize leading-8 break-words mb-3">
              Direccion de Envio
            </div>

            <form className="w-[300px] md:w-[400px] xl:w-[600px] mb-10">
              {inputs.map((input) => (
                <div className="mb-4">
                  <CartInputForm
                    type={input.type ?? "text"}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-700 outline-none"
                  />
                  <span className="text-red-500 mt-1 text-xs">
                    {errors[input.name]}
                  </span>
                </div>
              ))}

              <div className="flex mt-3 gap-2 h-10 border">
                <Button
                  text="Guardar mi informacion"
                  type="submit"
                  variant="primary"
                />
              </div>
            </form>
          </div>

          <div className="flex justify-center mb-4">
            <div className="w-[500px] flex justify-between">
              <div className="flex w-[190px] h-[40px] items-center">
                <img
                  className="w-6 h-6 hover:scale-50 cursor-pointer"
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                  alt=""
                />
                <span className="text-sm leading-6 cursor-pointer hover:underline">
                  Regresar
                </span>
              </div>

              <div className="flex w-[190px] h-[40px] justify-center items-center gap-1 flex-shrink-0">
                <Button text="Continuar con Envio" type="button" className="" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-lg:hidden cart-info-right lg:w-[40%] h-screen bg-[--color-bg] flex flex-col justify-start items-center">
          <div className="w-full flex justify-center">
            <span className="text-xl font-bold mt-10 mb-10">
              Carrito de Compras
            </span>
          </div>

          <div className="lg:w-[350px] xl:w-[450px]">
            {products.map((product) => (
              <ProductShoppingCart
                productId={product.id}
                productImage={product.url}
                productTitle={product.name}
                productSize={product.size}
                productColor={product.color}
                productPrice={product.price}
                productQuantity={product.quantity}
              />
            ))}
          </div>

          <div className="mt-5 flex flex-col w-full">
            <div className="flex justify-end gap-5 mx-5">
              <p className="mb-2 text-lg leading-8">
                Subtotal: <span> S/. 149.90 </span>{" "}
              </p>
            </div>
            <p className="mx-2 text-right text-xs">
              (*) El importe total que pagará sera calculado en la seccion
              ENVIOS.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
