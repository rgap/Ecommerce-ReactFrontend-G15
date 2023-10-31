import { inputs } from "./form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInRouterContext, useNavigate } from "react-router-dom";
import { Button, CartInputForm, ProductShoppingCart } from "../../components";
import { read, update } from "../../services";
import { counterProductos } from "../../slices/cartSlice";
import { useCartInfoForm } from "../../hooks/useCartInfoForm";

export default function CartInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const globalUser = useSelector((state) => state.user.data);
  const globalCart = useSelector(counterProductos);

  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    region: "",
    telefono: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    region: "",
    telefono: "",
  });

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const getShoppingCart = async () => {
    const response = await read("shoppingcart");
    setProducts(response);
  };

  useEffect(() => {
    getShoppingCart();
  }, []);

  return (
    <>
      <div className="lg:flex">
        <section className="cart-info-left lg:w-[55%] ml-10">
          <div className="mt-5">
            <img
              onClick={redirect("/")}
              className="h-[50px] md:h-[70px] hover:cursor-pointer "
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
              alt=""
            />
          </div>

          {globalUser ? (
            <> </>
          ) : (
            <section className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg  break-words"> ¿Ya tienes una cuenta? </p>
                <div className="border flex w-[120px] h-[40px] justify-center items-center gap-1 flex-shrink-0 ">
                  <Button
                    ruta="/login"
                    text="Ingresar"
                    type="submit"
                    variant="primary"
                    className="hover:cursor-pointer"
                  />
                </div>
                <p className="text-lg text-center"> o </p>
                <p className="text-lg break-words">!Registrate con nosotros!</p>
                <div className="border flex w-[120px] h-[40px] justify-center items-center gap-1 flex-shrink-0 ">
                  <Button
                    ruta="/register"
                    text="Registrarse"
                    type="submit"
                    variant="primary"
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
            </section>
          )}

          <div className="mt-8 flex flex-col items-center">
            <p className="text-lg capitalize leading-8 break-words mb-3">
              Direccion de Envio
            </p>
            <form className="w-[300px] md:w-[400px] xl:w-[500px] mb-10">
              {inputs.map((input) => (
                <div className="mb-4" key={input.name}>
                  <CartInputForm
                    placeholder={input.placeholder}
                    value={input.value}
                    name={input.name}
                    onChange={handleInputChange}
                    type={input.type ?? "text"}
                    className="w-full p-2 border border-gray-700 outline-none"
                  />
                  <span className="text-red-500 mt-1 text-xs">
                    {errors[input.name]}
                  </span>
                </div>
              ))}
              <div className="w-[200px] h-[40px]">
                <Button text="Continuar con Envio" type="button" />
              </div>
            </form>
          </div>

          <div className="flex justify-center mb-4">
            <div className="w-[500px] flex justify-between">
              <div className="flex w-[190px] h-[40px] items-center">
                <img
                  className="w-6 h-6"
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                  alt=""
                />
                <span
                  onClick={redirect("/cart")}
                  className="text-sm leading-6 cursor-pointer hover:underline"
                >
                  Regresar
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-lg:hidden cart-info-right lg:w-[45%] h-screen bg-[--color-bg] flex flex-col justify-start items-center">
          <div className="w-full flex justify-center">
            <span className="text-xl font-bold mt-10 mb-10">
              Carrito de Compras
            </span>
          </div>

          <div className="lg:w-[350px] xl:w-[450px]">
            {globalCart.map((product) => (
              <ProductShoppingCart
                productId={product.id}
                productImage={product.url}
                productTitle={product.name}
                productSize={product.size}
                productColor={product.color}
                productPrice={product.price}
                productQuantity={product.quantity}
                product={product}
                visible={True} //mostrara boton para agregar y quitar y precio.
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
