import { ProductCard } from "../../components";

export default function Home() {
  return (
    <>
    <section className="hero">
      <div className="bord bg-[url('https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polos-colgados-verdes-hero.jpg')] h-[600px] bg-center bg-cover relative bg-no-repeat">
        <div className="flex justify-center items-center flex-col h-full gap-7">
          <div className="bg-white bg-opacity-50 p-6 space-y-4">
            <div>
              <p className="text-3xl font-bold md:text-4xl text-center tracking-wide">
                NUEVA COLECCION
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold md:text-3xl text-center tracking-wide">
                VERANO 2023
              </p>
            </div>
          </div>
          <div className="flex w-[184px] h-[40px] p-4 justify-center items-center gap-1 flex-shrink-0 bg-[#b27652]">
            <button className="cursor-pointer text-white text-sm font-normal capitalize leading-normal">
              Ver Productos
            </button>
          </div>
        </div>
      </div>
    </section>
    <main className="px-10">
    <section className="flex justify-center">
      <div className="max-w-[1200px]">
        <div className="my-10 font-semibold text-3xl">
        <span> Los más vendidos </span>
        </div>
        <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-nike-m.jpg"}
            productTitle={"Polo Azul Nike"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
            <ProductCard
              productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"}
              productTitle={"Polo Verde Nike"}
              productText={"Algodon Pima 100% Peruano"} 
              productColors={""}
              productPrice={"S/49.99"}
            />
            <ProductCard
              productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-ripcurl-m.jpg"}
              productTitle={"Polo Negro Ripcurl"}
              productText={"Algodon Pima 100% Peruano"} 
              productColors={""}
              productPrice={"S/49.99"}/>
        </div>
      </div>
    </section>
    <section className="flex justify-center">
      <div className="flex justify-center flex-col items-center max-w-[1200px]">
        <div className="font-semibold text-3xl text-left w-full">
          <span>Nueva Coleccion</span>
        </div>
        <div
          className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 md:gap-10 md:my-16 m-auto max-w-[1200px]"
        >
          <div className="flex flex-col gap-y-8 md:gap-y-20 justify-between">
            <img
              className="w-full h-auto aspect-square object-cover object-top"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-blanco-modelo-home.jpg"
              alt="Polo Blanco Modelo"
            />
            <img
              className="object-contain w-full h-auto"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-colgador-home.jpg"
              alt="Polo Colgador"
            />
          </div>

          <div className="flex flex-col md:gap-10 justify-between">
            <img
              className="object-contain w-full h-auto"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-modelo-home.jpg"
              alt="Polo Negro Modelo"
            />
            <img
              className="w-full h-auto aspect-square object-cover object-top"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-mano-colgando-home.jpg"
              alt="Polo Negro Mano Colgando"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="w-fit m-auto mb-8 relative max-w-[1200px]">
      <div className="flex justify-center">
        <img
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/algodon.jpg"
          alt=""
        />
      </div>
      <div
        className="absolute max-w-[200px] text-xs bottom-0 right-1 md:text-lg md:min-w-[350px] md:bottom-5 md:right-5"
      >
        <p className="text-center pb-[12px]">
          Todas nuestras prendas son confeccionadas con algodón
          <span className="font-bold"> Pima Peruano. </span>
        </p>
      </div>
    </section>
  </main>
  </>
  );
}
