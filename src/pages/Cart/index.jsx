import { Button, ProductShoppingCart, QuantityButton } from "../../components";
import { counterProductos } from "../../slices/cartSlice";
import { read } from "../../services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const globalCart = useSelector(counterProductos);
  const total = globalCart.reduce((accumulator, product) => {
    const qty = product.quantity;
    const price = product.price;
    const subtotal = qty * price;
    return accumulator + subtotal;
  }, 0);

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <div className="bg-white">
      <div className="px-2 pt-2 pb-2 md:px-10 md:pt-2 md:pb-5">
        <img
          className="h-[50px] md:h-[70px]"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
          alt=""
        />
      </div>

      <section className="mb-10 flex justify-between items-center md:px-10">
        <div className="p-4 flex justify-content items-center gap-1">
          <div
          onClick={redirect("/")}
          className="text-center text-[--color-cart-text-button-comp] md:text-lg font-normal  capitalize leading-6 cursor-pointer hover:underline">
            volver
          </div>
        </div>

        <p className="text-xl md:text-[30px] font-semibold ">Tu Carrito</p>

        <div className="p-4 flex justify-content items-center gap-1">
          <div
            onClick={redirect("/cart-info")}
            className="text-center text-[--color-cart-text-button-comp] md:text-lg font-normal capitalize leading-6 cursor-pointer hover:underline"
          >
            continuar
          </div>
        </div>
      </section>

      <div className="flex justify-center box-border">
        <div className="flex flex-col">
          <div className="mb-2 text-xl font-semibold grid md:gap-5 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[450px_200px_200px_200px] ">
            <div className="max-md:text-center"> Resumen de Compra</div>
            <div className="max-md:hidden ">Precio</div>
            <div className="max-md:hidden ">Cantidad</div>
            <div className="max-md:hidden ">Total</div>
          </div>

          <hr className="mb-2 h-0.5 bg-[--color-hr]" />

          <div className="max-md:justify-center grid grid-cols-[340px] md:gap-5 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[450px_200px_200px_200px] ">
            {globalCart.map((product) => (
              <>
                <ProductShoppingCart
                  productId={product.id}
                  productImage={product.url}
                  productTitle={product.name}
                  productSize={product.size}
                  productColor={product.color}
                  productPrice={product.price}
                  productQuantity={product.quantity}
                  product={product}
                />

                <div className="max-md:hidden text-lg">S/. {product.price}</div>

                <QuantityButton
                  productId={product.id}
                  productQuantity={product.quantity}
                  product={product}
                  className={"max-md:hidden"}
                />
                <div className="max-md:hidden text-lg">
                  S/. {product.price * product.quantity}
                </div>
              </>
            ))}
          </div>

          <div className="mr-3">
            <p className="font-semibold text-right md:text-md">
              SUBTOTAL: S/. {total} PEN
            </p>
            <p className="text-xs text-right mt-0.5 break-words">
              (*) Los impuestos y gastos de envío se calculan en la pantalla de
              pago.
            </p>
          </div>

          <div className="flex justify-end mt-3 mr-3">
            <div className="border flex w-[185px] h-[50px] justify-center items-center gap-1 flex-shrink-0 ">
              <Button
                ruta="/cart-info"
                text="Pagar Pedido"
                type="submit"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
