import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Logo,
  ProductShoppingCart,
  QuantityButton,
} from "../../components";
import { counterProductos } from "../../slices/cartSlice";

export default function Cart() {
  const globalCart = useSelector(counterProductos);
  const navigate = useNavigate();
  const total = globalCart.reduce((accumulator, product) => {
    const subtotal = product.quantity * product.price;
    return accumulator + subtotal;
  }, 0);

  const totalCart = total.toFixed(2);
  const [lastProductPath, setLastProductPath] = useState("/products");

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

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <main className="bg-white">
      <Logo />
      <section className="flex flex-col md:px-10">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <nav aria-label="breadcrumb flex">
              <ol className="flex text-xl justify-center md:justify-start mt-3 mb-8">
                <li className="mr-2">
                  <a
                    onClick={redirect("/products")}
                    className="text-[--color-link-text] hover:underline font-semibold	cursor-pointer"
                  >
                    Productos
                  </a>
                </li>
                <li className="text-gray-700 font-bold">/</li>
                <li className="ml-2 font-bold">Carrito</li>
              </ol>
            </nav>

            <div className="md:mb-16 flex justify-center items-center">
              <p className="text-xl md:text-[30px] font-semibold max-md:hidden ">
                Carrito de Compras
              </p>
            </div>

            <div className="mb-2 text-xl font-semibold grid md:gap-5 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[400px_200px_200px_200px] ">
              <div className="max-md:text-center "> Carrito de Compras</div>
              <div className="max-md:hidden  text-center ">Precio</div>
              <div className="max-md:hidden text-center ">Cantidad</div>
              <div className="max-md:hidden  text-center">Total</div>
            </div>

            <hr className="mb-2 h-0.5 bg-[--color-hr]" />

            <div className="max-md:justify-center grid grid-cols-[340px] gap-2  md:gap-5 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[400px_200px_200px_200px] ">
              {globalCart.map((product) => (
                <React.Fragment key={product.id}>
                  <ProductShoppingCart
                    productId={product.id}
                    productImage={product.url}
                    productTitle={product.title}
                    productSize={product.size}
                    productColor={product.color}
                    productPrice={product.price}
                    productQuantity={product.quantity}
                    product={product}
                  />
                  <div className="max-md:hidden text-lg  flex justify-center items-center  ">
                    S/ {product.price}
                  </div>
                  <div className=" flex justify-center items-center">
                    <QuantityButton
                      productId={product.id}
                      productQuantity={product.quantity}
                      product={product}
                      className={"max-md:hidden"}
                    />
                  </div>
                  <div className="max-md:hidden text-lg flex justify-center items-center">
                    S/. {(product.price * product.quantity).toFixed(2)}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <section className="text-center md:text-right mr-0 md:mr-0 lg:mr-14 px-10 md:px-0">
              <div className="gap-4 flex flex-col mt-8">
                <p className="font-semibold md:text-md">
                  SUBTOTAL: S/. {totalCart} PEN
                </p>
                <p className="text-xs break-words">
                  (*) Los impuestos y gastos de envío se calculan en la pantalla
                  de pago.
                </p>
                <div className="justify-center md:justify-end flex">
                  <div className="w-[185px] h-[50px]">
                    <Button
                      ruta="/cart-info"
                      text="Pagar Pedido"
                      type="submit"
                      variant="primary"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
