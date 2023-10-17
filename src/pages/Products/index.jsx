import { ProductCard } from "../../components";

export default function Products() {
  return (
    <>
      <div class="py-8 pl-24 max-sm:pl-9 max-lg:pl-12">
        <p>
          <a>Inicio</a> / <a>Productos</a>
        </p>
      </div>
      <div class="hero">
        <div class="bord bg-[url('https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/banner-nobg.jpg')] h-[600px] bg-center bg-cover bg-no-repeat max-sm:h-[300px] max-lg:h-[400px]"></div>
      </div>
      <main class="mt-20 w-full max-lg:mt-10">
        <section class="flex justify-around mb-20 max-lg:block max-lg:mb-10">
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg"}
            productTitle={"Polo Verde Nike"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-turqueza-quiksilver.jpg"}
            productTitle={"Polo Turqueza Quiksilver"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-%20amarillo-billabong-logo.jpg"}
            productTitle={"Polo Amarillo Billabong"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
        </section>
        <section class="flex justify-around mb-20 max-lg:block max-lg:mb-10">
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-marron-ripcurl-floreado.jpg"}
            productTitle={"Polo Marron Rip Curl"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-nike-m.jpg"}
            productTitle={"Polo Azul Nike"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-quiksilver.jpg"}
            productTitle={"Polo Verde Quiksilver"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
        </section>
        <section class="flex justify-around mb-20 max-lg:block max-lg:mb-10">
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-ripcurl.jpg"}
            productTitle={"Polo Azul Rip Curl"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-guinda-ripcurl.jpg"}
            productTitle={"Polo Guinda Rip Curl"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-volcom.jpg"}
            productTitle={"Polo Negro Volcom"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
        </section>
        <section class="flex justify-around mb-36 max-lg:block max-lg:mb-16">
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-quiksilver.jpg"}
            productTitle={"Polo Rojo Quiksilver"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-morado-adidas.jpg"}
            productTitle={"Polo Morado Adidas"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
          <div class="w-[357px] max-lg:m-auto max-lg:mt-10">
          <ProductCard 
            productImage={"https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-gris-nike.jpg"}
            productTitle={"Polo Gris Nike"}
            productText={"Algodon Pima 100% Peruano"} 
            productColors={""}
            productPrice={"S/49.99"}/>
          </div>
        </section>
        <div class="mb-14">
          <div class="w-40 h-10 border border-black shadow-md m-auto text-center p-1">
            <button>Cargar Más</button>
          </div>
        </div>
      </main>
    </>
  );
}
