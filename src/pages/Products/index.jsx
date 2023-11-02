/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { ProductCard } from "../../components";
import { create, read } from "../../services";

function Products() {
  const [productsArray, setProductsArray] = useState([]);

  const [productsToShow, setProductsToShow] = useState(12);

  const loadMoreProducts = () => {
    setProductsToShow(productsToShow + 15);
  };

  const loadLessProducts = () => {
    setProductsToShow(productsToShow - 15);
  };

  async function populateDB() {
    for (const product of productsArray) {
      delete product.createdAt;
      delete product.id;
      await create(product, "products");
    }
  }

  async function initializeProductsArray() {
    const productsArray = await read("products");
    setProductsArray(productsArray);
  }

  useEffect(() => {
    initializeProductsArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className=" mx-auto p-4 bg-[--color-bg] flex justify-center">
      <section className="flex flex-col gap-5 mt-8 mb-16">
        <nav aria-label="breadcrumb">
          <ol className="flex text-xl">
            <li className="mr-2">
              <a
                href="/"
                className="text-[--color-link-text] hover:underline font-semibold	"
              >
                Página Principal
              </a>
            </li>
            <li className="text-gray-700 font-bold">/</li>
            <li className="ml-2 font-bold">Productos</li>
          </ol>
        </nav>

        <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px]">
          {productsArray.slice(0, productsToShow).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="my-4 m-auto text-center">
          {productsToShow < productsArray.length && (            
              <button className="mb-6 mt-8 items-center px-20 py-6 bg-[--color-cart-text-button-comp] text-white text-sm capitalize leading-normal transition-transform duration-100"
              onClick={loadMoreProducts}>Cargar Más</button>
            
          )}

          {productsToShow > 15 && (
              <button className="mb-6 mt-8 items-center px-7 py-4 bg-[--color-cart-text-button-comp] text-white text-sm capitalize leading-normal transition-transform duration-100" 
              onClick={loadLessProducts}>Cargar Menos</button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Products;
