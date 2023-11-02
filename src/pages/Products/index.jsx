/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { ProductCard } from "../../components";
import { create, read } from "../../services";

export default function Products() {
  const [productsArray, setProductsArray] = useState([]);

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
      <section className="flex flex-col gap-5 mt-8">
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

        <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px] mb-20">
          {productsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
