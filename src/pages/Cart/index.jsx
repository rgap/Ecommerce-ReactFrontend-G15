import { useSelector } from "react-redux";
import { selectCounter } from "../../slices/counterSlice";
import { Button, ProductShoppingCart, QuantityButton } from "../../components";

//aqui debo hacer uso del MOCKAPI
export default function Cart() {
  // TODO: hacer que esto se cargue desde mockapi y eso lo actualize en el counterSlice
  const counter = useSelector(selectCounter);
  const price = 49.9;

  return (
    <div className="bg-white">
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

      <div className=" flex justify-center box-border">
        <div className="flex flex-col">
          <div className="mb-3 text-xl font-semibold grid md:gap-4 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[600px_200px_200px_200px] ">
            <div className="max-md:text-center "> Resumen de Compra</div>
            <div className="max-md:hidden ">Precio</div>
            <div className="max-md:hidden ">Cantidad</div>
            <div className="max-md:hidden ">Total</div>
          </div>

          <hr className="mb-5 h-0.5 bg-[--color-hr]" />

          <div className="grid grid-cols-1 gap-4 max-md:justify-center md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px]  xl:grid-cols-[600px_200px_200px_200px] ">
            <ProductShoppingCart
              productImage={
                "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"
              }
              productTitle={"Polo Nike"}
              productSize={"M"}
              productColor={"Verde"}
              productPrice={49.9}
              productQuantity={1}
            />
            <div className="max-md:hidden text-lg capitalize">S/49.90 </div>
            <div className="max-md:hidden">
              <QuantityButton productQuantity={1} />
            </div>
            <div className="max-md:hidden text-lg capitalize">
              {" "}
              S/. {price * counter}
            </div>

            <ProductShoppingCart
              productImage={
                "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-guinda-ripcurl.jpg"
              }
              productTitle={"Polo Ripcurl"}
              productSize={"S"}
              productColor={"Guinda"}
              productPrice={49.9}
              productQuantity={1}
            />
            <div className="max-md:hidden text-lg capitalize">S/49.90 </div>
            <div className="max-md:hidden">
              <QuantityButton productQuantity={1} />
            </div>
            <div className="max-md:hidden text-lg capitalize">S/49.90</div>

            <ProductShoppingCart
              productImage={
                "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-volcom.jpg"
              }
              productTitle={"Polo Ripcurl"}
              productSize={"XL"}
              productColor={"Negro"}
              productPrice={69.9}
              productQuantity={1}
            />
            <div className="max-md:hidden text-lg capitalize">S/ 49.90 </div>
            <div className="max-md:hidden">
              <QuantityButton productQuantity={1} />
            </div>
            <div className="max-md:hidden text-lg capitalize">S/49.90</div>
          </div>

          <div className="cart-total mt-10 mr-3">
            <p className=" font-semibold text-right md:text-lg">
              {" "}
              TOTAL: S/250.00 PEN
            </p>
            <p className=" text-sm text-right mt-0.5 italic break-words">
              (*)Los impuestos y gastos de envío se calculan en la pantalla de
              pago.
            </p>
          </div>

          <div className="flex justify-end mt-3 mr-3">
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
  );
}
