import { ProductCard } from "../../components";

export default function Products() {
  return (
    <>
      <div className="py-8 pl-24 max-sm:pl-9 max-lg:pl-12">
        <p>
          <a>Inicio</a> / <a>Productos</a>
        </p>
      </div>
      <div className="hero">
        <div className="bord bg-[url('https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/banner-nobg.jpg')] h-[600px] bg-center bg-cover bg-no-repeat max-sm:h-[300px] max-lg:h-[400px]"></div>
      </div>
      <main className="mt-20 w-full max-lg:mt-10">
        <section className="flex justify-around mb-20 max-lg:block max-lg:mb-10">
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"}
            productTitle={"Polo Verde Nike"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-green-700"}
            productColor2={"bg-green-500"}
            productColor3={"bg-lime-600"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-turqueza-quiksilver.jpg"}
            productTitle={"Polo Turqueza Quiksilver"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-teal-900"}
            productColor2={"bg-teal-700"}
            productColor3={"bg-teal-500"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-%20amarillo-billabong-logo.jpg"}
            productTitle={"Polo Amarillo Billabong"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-yellow-600"}
            productColor2={"bg-yellow-400"}
            productColor3={"bg-yellow-300	"}/>
          </div>
        </section>
        <section className="flex justify-around mb-20 max-lg:block max-lg:mb-10">
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-marron-ripcurl-floreado.jpg"}
            productTitle={"Polo Marron Rip Curl"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-amber-950"}
            productColor2={"bg-amber-900"}
            productColor3={"bg-amber-700"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-nike-m.jpg"}
            productTitle={"Polo Azul Nike"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-blue-900"}
            productColor2={"bg-blue-800"}
            productColor3={"bg-blue-700"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-quiksilver.jpg"}
            productTitle={"Polo Verde Quiksilver"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-lime-400"}
            productColor2={"bg-lime-300"}
            productColor3={"bg-lime-200"}/>
          </div>
        </section>
        <section className="flex justify-around mb-20 max-lg:block max-lg:mb-10">
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-ripcurl.jpg"}
            productTitle={"Polo Azul Rip Curl"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-sky-800"}
            productColor2={"bg-sky-700"}
            productColor3={"bg-sky-600"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-guinda-ripcurl.jpg"}
            productTitle={"Polo Guinda Rip Curl"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-rose-900"}
            productColor2={"bg-rose-800"}
            productColor3={"bg-rose-700"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-volcom.jpg"}
            productTitle={"Polo Negro Volcom"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-neutral-950"}
            productColor2={"bg-neutral-800"}
            productColor3={"bg-neutral-700"}/>
          </div>
        </section>
        <section className="flex justify-around mb-36 max-lg:block max-lg:mb-16">
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-quiksilver.jpg"}
            productTitle={"Polo Rojo Quiksilver"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-red-700"}
            productColor2={"bg-red-500"}
            productColor3={"bg-red-400"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-morado-adidas.jpg"}
            productTitle={"Polo Morado Adidas"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-fuchsia-950"}
            productColor2={"bg-fuchsia-900"}
            productColor3={"bg-fuchsia-600"}/>
          </div>
          <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-gris-nike.jpg"}
            productTitle={"Polo Gris Nike"}
            productText={"Algodon peinado 20 a 1"} 
            productColors={""}
            productPrice={"S/49.99"}
            productColor1={"bg-gray-300"}
            productColor2={"bg-gray-400"}
            productColor3={"bg-gray-600"}/>
          </div>
        </section>
        <div className="mb-14">
          <div className="w-40 h-10 border border-black shadow-md m-auto text-center p-1">
            <button>Cargar Más</button>
          </div>
        </div>
      </main>
    </>
  );
}
