import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Logo,
  ProductShoppingCart,
} from "../../components";
import { counterProductos } from "../../slices/cartSlice";

export default function CartShipping() {
  const navigate = useNavigate();
  const globalCart = useSelector(counterProductos);
  const [selectedValue, setSelectedValue] = useState("regular");
  const [costoEnvio, setCostoEnvio] = useState("0.00");
  const globalUser = useSelector((state) => state.user.data);

  const total = globalCart.reduce((accumulator, product) => {
    const qty = product.quantity;
    const price = product.price;
    const subtotal = qty * price;
    return accumulator + subtotal;
  }, 0);

  const shippingCosts = {
    regular: "12.00",
    rapido: "20.00",
  };
  const getShippingCost = (option) => shippingCosts[option] || "0.00";

  const totalCart = total.toFixed(2);
  const totalCompra = (
    total + (costoEnvio !== "Por definir" ? parseFloat(costoEnvio) : 0)
  ).toFixed(2);
  const [lastProductPath, setLastProductPath] = useState("/products");

  // Redirigir si es que no hay usuario logeado
  useEffect(() => {
    if (!globalUser) {
      navigate("/login");
    }
  }, [globalUser, navigate]);

  useEffect(() => {
    if (globalCart.length > 0) {
      const lastProduct = globalCart[globalCart.length - 1];
      setLastProductPath(lastProduct.productPath || "/products");
    }
  }, [globalCart]);

  useEffect(() => {
    if (total === 0) {
      navigate(lastProductPath, { replace: true });
    }
  }, [lastProductPath, navigate, total]);

  useEffect(() => {
    let savedShippingOption = localStorage.getItem("shippingOption");
    if (!savedShippingOption) {
      savedShippingOption = "regular"; // shippingOption por defecto
      localStorage.setItem("shippingOption", savedShippingOption);
    }
    setSelectedValue(savedShippingOption);
    setCostoEnvio(getShippingCost(savedShippingOption));
  }, []);

  const handleRadioChange = (event) => {
    const shippingOption = event.target.value;
    setSelectedValue(shippingOption);
    setCostoEnvio(getShippingCost(shippingOption));
    localStorage.setItem("shippingOption", shippingOption);
  };

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <main className="lg:flex">
      <section className="cart-info-left lg:w-[60%] flex flex-col min-w-[590px]">
        <Logo />

        <div className="mx-10 xl:mx-20 my-0">
          <div className="grid-shipping">
            <Breadcrumb />
            <p className="text-xl text-center md:text-left font-bold capitalize leading-8 break-words mb-5 mt-8">
              Opciones de Envio
            </p>
            <hr className="h-5 w-full mb-5" />

            <div className="flex justify-center max-w-[520px] flex-col mb-10 gap-2 px-10 w-full m-auto">
              <div className="flex flex-col gap-5 self-center	">
                {/* Envio Regular */}
                <div className="grid grid-cols-[20px_1fr_0.6fr] gap-y-3 items-center gap-0 md:gap-8">
                  <input
                    type="radio"
                    value="regular"
                    checked={selectedValue === "regular"}
                    onChange={handleRadioChange}
                    className="w-4 h-4"
                  />
                  <div className="font-bold text-lg ml-4">
                    Envio Regular
                    <p className="font-semibold text-sm">5 a 7 días hábiles</p>
                  </div>
                  <div className="text-lg ml-5 md:ml-0 text-center">
                    S/ 12.00
                  </div>
                </div>

                {/* Envio Rapido */}
                <div className="grid grid-cols-[20px_1fr_0.6fr] gap-y-3 items-center gap-0 md:gap-8">
                  <input
                    type="radio"
                    value="rapido"
                    checked={selectedValue === "rapido"}
                    onChange={handleRadioChange}
                    className="w-4 h-4"
                  />
                  <div className="font-bold text-lg ml-4">
                    Envio Rapido
                    <p className="font-semibold text-sm">2 a 3 días hábiles</p>
                  </div>
                  <div className="text-lg ml-5 md:ml-0 text-center">
                    S/ 20.00
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-20">
                <div className="w-full flex justify-between">
                  <div
                    className="flex w-[190px] h-[40px] items-center gap-3 cursor-pointer"
                    onClick={redirect("/cart-info")}
                  >
                    <img
                      className="w-6 h-6"
                      src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                      alt=""
                    />
                    <span className="text-sm leading-6 hover:underline">
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
            </div>
          </div>
        </div>
      </section>

      <section className="max-lg:hidden cart-info-right min-h-screen lg:w-[40%]  bg-[--color-bg] flex flex-col justify-start items-center min-w-[460px]">
        <div className="w-full flex justify-center">
          <span className="text-xl font-bold mt-10 mb-10">
            Carrito de Compra
          </span>
        </div>

        <div className="lg:w-[350px] xl:w-[450px]">
          {globalCart.map((product) => (
            <div className="md:mb-2" key={product.id}>
              <ProductShoppingCart
                productId={product.id}
                productImage={product.url}
                productTitle={product.title}
                productSize={product.size}
                productColor={product.color}
                productPrice={product.price}
                productQuantity={product.quantity}
                product={product}
                visible={true}
              />
            </div>
          ))}

          <div className="mt-5 flex flex-col gap-1.5 mb-7">
            <p className="text-lg text-center">
              Subtotal: <span> S/ {totalCart} </span>
            </p>
            <p className="text-lg text-center">
              Envio: <span> S/ {costoEnvio} </span>
            </p>
            <p className="text-lg text-center">Total: S/ {totalCompra}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
