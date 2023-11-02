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
    <div className="block bg-[--color-bg] pb-8">
    <div className=" mx-auto p-4 flex justify-center">
      <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px]">
        {productsArray.slice(0, productsToShow).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    <div className="my-8">    
            {productsToShow < productsArray.length && (
          <div className="w-40 h-10 border border-black shadow-md m-auto text-center p-1 transition ease-in-out delay-150 bg-[#3b6978] text-[white] hover:-translate-y-1 hover:scale-110 hover:bg-[#748c70] duration-200">
            <button onClick={loadMoreProducts}>
            Cargar Más
            </button>
          </div>
            )}

            {productsToShow > 15 && (
          <div className="w-40 h-10 border border-black shadow-md m-auto text-center p-1 transition ease-in-out delay-150 bg-[#3b6978] text-[white] hover:-translate-y-1 hover:scale-110 hover:bg-[#748c70] duration-200">
          <button onClick={loadLessProducts}>
          Cargar Menos
          </button>
        </div>
            )}
        </div>
    </div> 
  );
}

export default Products;
