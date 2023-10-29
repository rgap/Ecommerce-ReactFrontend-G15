import { Button,ProductShoppingCart } from "../../components";
import { read } from "../../services";
import { useEffect,useState } from "react";

export default function CartShipping() {

    const [products, setProducts] = useState([]);

    const getShoppingCart = async () => {
        const response = await read("shoppingcart");
        setProducts(response);
      };
      useEffect(() => {
        getShoppingCart();
      }, []);
    
  return (
    <div className="lg:flex">
    <section className="cart-info-left lg:w-[60%] flex flex-col">
      <div className="mt-5 ml-10">
        <img
          className="h-[50px] md:h-[70px]"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
          alt=""
        />
      </div>

      <div className="breadcrumb max-sm:hidden flex gap-3  text-lg mx-20">
        <div className="cursor-pointer hover:underline">Carrito</div>
        <span>/</span>
        <div className="cursor-pointer hover:underline">Informacion</div>
        <span>/</span>
        <div className="cursor-pointer hover:underline">Envios</div>
        <span>/</span>
        <div className="cursor-pointer">Pago</div>
      </div>

      <div className="mx-10 xl:mx-20 my-20 ">
        <div className="contacto-shipping">
          <div className="md:flex place-items-baseline mb-4 justify-between">
            <div className="text-lg capitalize leading-8 break-words">
              Contacto
            </div>
            <button type="button" className="cursor-pointer text-sm">
              Cambiar
            </button>
          </div>

          <hr className="h-1" />

          <div className="md:flex place-items-baseline mb-3 justify-between">
            <div className="text-lg capitalize leading-8 break-words">
              Enviar a
            </div>
            <button type="button" className="cursor-pointer text-sm">
              Cambiar
            </button>
          </div>
        </div>

        <div className="grid-shipping">
          <p className="text-xl font-bold capitalize leading-8 break-words mb-5 mt-14">
            Opciones de Entrega
          </p>
          <hr className="h-1 w-full mb-5" />

          <div className="grid grid-cols-[35px_1fr_1fr] xl:grid-cols-[50px_1fr_1fr] gap-y-3">
            <input type="radio" />
            <div className="font-bold text-lg text-[#868686]">
              Express Courier Lima{" "}
            </div>
            <div className="font-bold text-lg text-[#606060]"> S/25.00 </div>
            <div> </div>
            <p className="font-semibold text-sm">2 a 3 dias Habiles</p>
            <div></div>
            <input type="radio" />
            <div className="font-bold text-lg text-[#868686]">
              Envio Regular
            </div>
            <div className="font-bold text-lg text-[#606060]">S/12.00</div>
            <div> </div>
            <div className="font-semibold text-sm">4 a 5 dias Habiles</div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-10 xl:mx-20">
        <div className="w-full flex justify-between">
          <div className="flex h-[40px] items-center">
            <img
              className="w-6 h-6 hover:scale-50 cursor-pointer"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
              alt=""
            />
            <span className="text-sm leading-6 cursor-pointer hover:underline">
              Regresar
            </span>
          </div>

          <div className="flex w-[190px] h-[40px] justify-center items-center  flex-shrink-0">
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
  
</div>
</section>
</div>

  );
}
