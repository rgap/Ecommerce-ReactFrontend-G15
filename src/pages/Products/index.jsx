import React, { useState } from "react";
import { ProductCard } from "../../components";

function Products() {
  
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
      setIsShowMore(!isShowMore);
    };

  return (
    <>
      <div className="py-8 pl-24 max-sm:pl-9 max-lg:pl-12">
        <p>
          <a href="/" alt="">Inicio</a> / <a href="/products" alt="">Productos</a>
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
            productColor3={"bg-yellow-300"}/>
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
        <section className="flex justify-around mb-20 max-lg:block max-lg:mb-16">
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
        {isShowMore && (
        <div>
       <section className="flex justify-around mb-20 max-lg:block max-lg:mb-10">
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-blanco-quiksilver.jpg"}
         productTitle={"Polo Blanco Quiksilver"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-slate-100"}
         productColor2={"bg-slate-200"}
         productColor3={"bg-slate-300"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-amarillo-adidas.jpg"}
         productTitle={"Polo Amarillo Adidas"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-yellow-400"}
         productColor2={"bg-yellow-300"}
         productColor3={"bg-yellow-200"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-nike.jpg"}
         productTitle={"Polo Azul Nike"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-blue-950"}
         productColor2={"bg-blue-900"}
         productColor3={"bg-blue-800"}/>
       </div>
     </section>
     <section className="flex justify-around mb-20 max-lg:block max-lg:mb-10">
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-ripcurl.jpg"}
         productTitle={"Polo Azul Jaspeado Rip Curl"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-sky-950"}
         productColor2={"bg-sky-900"}
         productColor3={"bg-sky-800"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-celeste-quiksilver.jpg"}
         productTitle={"Polo Celeste Quiksilver"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-cyan-500"}
         productColor2={"bg-cyan-400"}
         productColor3={"bg-cyan-300"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-durazno-volcom.jpg"}
         productTitle={"Polo Durazno Volcom"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-red-400"}
         productColor2={"bg-red-300"}
         productColor3={"bg-red-200"}/>
       </div>
     </section>
     <section className="flex justify-around mb-20 max-lg:block max-lg:mb-10">
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-melange-nike.jpg"}
         productTitle={"Polo Melange Nike"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-zinc-100"}
         productColor2={"bg-zinc-200"}
         productColor3={"bg-zinc-300"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-adidas.jpg"}
         productTitle={"Polo Rojo Adidas"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-red-950"}
         productColor2={"bg-red-900"}
         productColor3={"bg-red-800"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verdepasto-quiksilver.jpg"}
         productTitle={"Polo Verde Quiksilver"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-green-950"}
         productColor2={"bg-green-900"}
         productColor3={"bg-green-800"}/>
       </div>
     </section>
     <section className="flex justify-around mb-20 max-lg:block max-lg:mb-16">
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojojaspeado-quiksilver.jpg"}
         productTitle={"Polo Rojo Jaspeado Quiksilver"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-red-900"}
         productColor2={"bg-red-800"}
         productColor3={"bg-red-700"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verdesuave-ripcurl.jpg"}
         productTitle={"Polo Verde Grisaceo Rip Curl"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-teal-800"}
         productColor2={"bg-teal-700"}
         productColor3={"bg-teal-600"}/>
       </div>
       <div className="w-[357px] max-lg:m-auto max-lg:mt-10">
       <ProductCard 
         productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-billabong2.jpg"}
         productTitle={"Polo Rojo Billabong"}
         productText={"Algodon peinado 20 a 1"} 
         productColors={""}
         productPrice={"S/49.99"}
         productColor1={"bg-red-700"}
         productColor2={"bg-red-600"}
         productColor3={"bg-red-500"}/>
       </div>
     </section>
     </div>
        )}
        <div className="mb-14">
          <div className="w-40 h-10 border border-black shadow-md m-auto text-center p-1 transition ease-in-out delay-150 bg-[#3b6978] text-[white] hover:-translate-y-1 hover:scale-110 hover:bg-[#748c70] duration-200">
            <button onClick={toggleReadMoreLess}>
              {isShowMore ? "Cargar menos" : "Cargar más"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
 export default Products;



