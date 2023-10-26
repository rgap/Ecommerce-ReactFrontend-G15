import { useSelector } from "react-redux";
import { Button, ProductShoppingCart, QuantityButton } from "../../components";
import { selectCounter, selectProductos } from "../../slices/counterSlice";
import { useEffect, useState } from "react";
import { read } from "../../services";

export default function Cart() {
  const counter = useSelector(selectCounter);
  const newState = useSelector(selectProductos);

  const [products, setProducts] = useState([]);

  const getShoppingCart = async () => {
    const response = await read("shoppingcart");
    setProducts(response);
  };

  useEffect(() => {
    getShoppingCart();
  }, []);

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
          <div className="text-center text-[--color-cart-text-button-comp] md:text-lg font-normal  capitalize leading-6 cursor-pointer hover:underline">
            volver
          </div>
        </div>

        <p className="text-2xl md:text-[32px] font-semibold">Tu Carrito</p>

        <div className="p-4 flex justify-content items-center gap-1">
          <div className="text-center text-[--color-cart-text-button-comp] md:text-lg font-normal capitalize leading-6 cursor-pointer hover:underline">
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

          <hr className="mb-5 h-0.5 bg-[--color-hr]" />

          <div className="max-md:ml-5 grid grid-col gap-5 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[450px_200px_200px_200px] ">
            {products.map((product) => (
              <>
                <ProductShoppingCart
                  productId={product.id}
                  productImage={product.url}
                  productTitle={product.name}
                  productSize={product.size}
                  productColor={product.color}
                  productPrice={product.price}
                  productQuantity={product.quantity}
                />
                <div className="max-md:hidden text-lg capitalize">
                  S/. {product.price}
                </div>
                <div className="max-md:hidden">
                  <QuantityButton
                    productId={product.id}
                    productQuantity={product.quantity}
                  />
                  <div> {JSON.stringify(newState)} </div>
                </div>
                <div className="max-md:hidden text-lg capitalize">
                  S/.{product.total}
                </div>
              </>
            ))}

            <div className="cart-total mt-5 mr-3">
              <p className="font-semibold text-right md:text-lg">
                SUBTOTAL: S/250.00 PEN
              </p>
              <p className=" text-sm text-right mt-0.5 italic break-words">
                (*)Los impuestos y gastos de envío se calculan en la pantalla de
                pago.
              </p>
            </div>
            <div className="flex justify-end mt-3">
              <div className="border flex w-[185px] h-[50px] justify-center items-center gap-1 flex-shrink-0 ">
                <Button
                  text="Pagar Pedido"
                  type="submit"
                  variant="primary"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
