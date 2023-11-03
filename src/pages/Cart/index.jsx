import { Button, Logo, ProductShoppingCart, QuantityButton } from "../../components";
import { counterProductos } from "../../slices/cartSlice";
import { useSelector } from "react-redux";

export default function Cart() {
 
  const globalCart = useSelector(counterProductos);

  const total = globalCart.reduce((accumulator, product) => {
    const subtotal = product.quantity * product.price;
    return accumulator + subtotal;
  }, 0);

  const totalCart = total.toFixed(2);
  
  return (
    <div className="bg-white">

      <Logo/>

      <nav aria-label="breadcrumb" className="ml-12 mb-5">
        <ol className="flex text-xl">
          <li className="mr-2">
            <a
              href="/products"
              className="text-[--color-link-text] hover:underline font-semibold	"
            >
              Productos
            </a>
          </li>
          <li className="text-gray-700 font-bold">/</li>
          <li className="ml-2 font-bold">Carrito</li>
        </ol>
      </nav>

      <div className="md:mb-10 flex justify-center items-center md:px-10">
        <p className="text-xl md:text-[30px] font-semibold max-md:hidden ">Tu Carrito</p>
      </div>

      <div className="flex justify-center box-border">
        <div className="flex flex-col">
          <div className="mb-2 text-xl font-semibold grid md:gap-5 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[400px_200px_200px_200px] ">
            <div className="max-md:text-center "> Resumen de Compra</div>
            <div className="max-md:hidden  text-center ">Precio</div>
            <div className="max-md:hidden text-center ">Cantidad</div>
            <div className="max-md:hidden  text-center">Total</div>
          </div>

          <hr className="mb-2 h-0.5 bg-[--color-hr]" />

          <div className="max-md:justify-center grid grid-cols-[340px] gap-2  md:gap-5 md:grid-cols-[350px_90px_90px_90px] lg:grid-cols-[400px_100px_100px_100px] xl:grid-cols-[400px_200px_200px_200px] ">
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

                <div className="max-md:hidden text-lg  flex justify-center items-center  ">
                  S/. {product.price}
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
              </>
            ))}
          </div>

          <div className="md:mr-10 mt-2">
            <p className="font-semibold text-center md:text-right md:text-md">
              SUBTOTAL: S/. {totalCart} PEN
            </p>
            <p className="text-xs text-center md:text-right mt-0.5 break-words">
              (*) Los impuestos y gastos de envío se calculan en la pantalla de
              pago.
            </p>
          </div>

          <div className="flex justify-center md:justify-end mt-3 mr-10 mb-5">
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
