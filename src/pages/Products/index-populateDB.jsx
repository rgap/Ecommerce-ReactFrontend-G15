/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { ProductCard } from "../../components";
import { create, read } from "../../services";
import { productsArray } from "./mockProducts";

export default function Products() {
  // const [productsArray, setProductsArray] = useState([]);

  async function populateDB() {
    for (const product of productsArray) {
      delete product.createdAt;
      delete product.id;
      await create(product, "products");
    }
  }

  // async function initializeProductsArray() {
  //   const productsArray = await read("products");
  //   setProductsArray(productsArray);
  // }

  // useEffect(() => {
  //   initializeProductsArray();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className=" mx-auto p-4 bg-[--color-bg] flex justify-center">
      <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px]">
        <button onClick={populateDB} className="bg-yellow-500">
          populateDB
        </button>
        {productsArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
