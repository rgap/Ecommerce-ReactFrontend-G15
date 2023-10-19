import { ProductCard } from "../../components";

export default function ProductsDetails() {
  return (
    <>
      <main className="w-ful">
        <div className="py-8 pl-20 max-sm:pl-9 max-lg:pl-12">
          <p>
            <a>Inicio</a> / <a>Productos</a> / <a>Detalle de Producto</a>
          </p>
        </div>
        <section className="flex justify-around items-start max-lg:justify-normal max-lg:gap-8 max-sm:flex-col max-sm:items-center max-sm:justify-around max-sm:gap-8">
          <div className="flex justify-between gap-5">
            <div className="w-[150px] h-[350px] overflow-y-auto max-lg:w-[100px] max-lg:pl-5 max-lg:h-[300px] max-sm:w-[80px] max-sm:h-[250px]">
              <div className="my-4">
                <img
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"
                  alt=""
                />
              </div>
              <div className="my-4">
                <img
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"
                  alt=""
                />
              </div>
              <div className="my-4">
                <img
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"
                  alt=""
                />
              </div>
              <div className="my-4">
                <img
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[350px] h-[350px] max-sm:w-[250px] max-sm:h-[250px] max-lg:w-[300px] max-lg:h-[300px]">
              <img
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-[400px] max-lg:w-[300px]">
            <h1 className="text-3xl font-bold pb-8 leading-[21px]">
              Polo Verde Nike
            </h1>
            <p>
              Polo para todas las ocasiones especialmente para sentirte fresco y
              comodo en tus dias de relax.
            </p>
            <p className="leading-[55px]">Colores</p>
            <div className="flex justify-start gap-2 mt-2">
              <div className="w-5 h-5 bg-green-800 rounded-full"></div>
              <div className="w-5 h-5 bg-green-300 rounded-full"></div>
              <div className="w-5 h-5 bg-lime-500 rounded-full"></div>
            </div>
            <div className="pt-7">
              <select
                name=""
                id=""
                className="w-[400px] border-black border-[1px] max-lg:w-[300px]"
              >
                <option value="0">Tamaño</option>
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
                <option value="5">XXL</option>
              </select>
            </div>
            <div className="mt-5">
              <button className="w-[400px] h-[25px] border-[1px] bg-[#3b6978] text-[#f1ebe3] text-[13px] font-bold max-lg:w-[300px]">
                Agregar al carrito de compras
              </button>
            </div>
            <div className="w-[400px] flex justify-between text-[11px] mt-5 max-lg:w-[300px]">
             <div className="flex items-center gap-1">
                <img className="w-[25px]" src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/1b6b42249b182d8db2cc518596757b2fabaf95a5/icons/truck.svg" alt="" />
                <p>Facil Cambio o Devolución</p>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-[25px]" src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/1b6b42249b182d8db2cc518596757b2fabaf95a5/icons/heart.svg" alt="" />
                <p>Agregar a la Lista de Deseos</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 flex justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-between max-sm:h-[900px] max-sm:gap-3">
          <div className="w-[600px] border-[1px] border-[#404040] bg-neutral-200 shadow-lg max-lg:w-[400px] max-sm:w-[320px]">
            <h2 className="font-bold p-3">Detalles Tecnicos</h2>
            <hr className="border-[#404040]" />
            <h2 className="font-bold text-[#404040] p-3">Fabricacion y Cuidados</h2>
            <div className="px-3 pb-3">
              <p>Fabricación:</p>
              <p>Algodon Peinado 20/1</p>
              <p>Hecho en Peru 80% Algodon, 20% Material Sintetico.</p>
              <p>Cuidados:</p>
              <p>Lavar en Lavadora con agua fria.</p>
              <p>No secar en secadora.</p>
              <p>No planchar sobre el estampado.</p>
            </div>
            <hr className="border-[#404040]" />
            <h2 className="font-bold p-3">Detalles del Envio</h2>
            <hr className="border-[#404040]" />
            <h2 className="font-bold text-[#404040] p-3">Envío y Devolución</h2>
            <div className="px-3 pb-3">
              <p>Envío:</p>
              <p>
                Es gratis en todo el Perú, para otros paises es $100 (Tarifa
                única)
              </p>
              <p>Devolución:</p>
              <p>
                El polo debe estar limpio e intacto para que proceda su
                devolución o cambio dentro de los 30 dias desde su compra. La
                nueva prenda no aplicara para su devolución o cambio.
              </p>
            </div>
          </div>
          <div className="w-[400px] h-[200px] border-[1px] border-[#404040] bg-neutral-200 shadow-lg max-lg:w-[300px] max-lg:h-[250px] max-sm:w-[320px]">
            <h2 className="p-3">Jersey 20/1</h2>
            <hr className="border-[#404040] w-[375px] m-auto max-lg:w-[270px] max-sm:w-[300px]" />
            <p className="p-3">
              Este material es una mezcla de algodon y materiales sinteticos que
              dan a esta tela una textura muy suave. Es ideal para el lavado ya
              que no se encoge ni se destiñe y conserva su forma por mas tiempo.
            </p>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="font-bold text-[24px] mb-8 text-center">
            Tambien te puede interesar
          </h2>
          <div className="flex justify-around mb-20 max-lg:block max-lg:mb-10">
            <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
            <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-billabong-rayas-m.jpg"}
            productTitle={"Polo Rojo Billabong"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}/>
            </div>
            <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
            <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-amarillo-nike-m.jpg"}
            productTitle={"Polo Amarillo Nike"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}/>
            </div>
            <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
            <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-billabong-digital-m.jpg"}
            productTitle={"Polo Negro Billabong"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
