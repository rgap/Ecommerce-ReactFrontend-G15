/* eslint-disable react/prop-types */
import { ProductCard } from "../../components";
import { sendPostRequest } from "../../services";
import { productsArray } from "./mockProducts";

export default function Products() {
  async function populateDB() {
    for (const product of productsArray) {
      delete product.createdAt;
      delete product.id;
      await sendPostRequest(product, "products");
    }
  }

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
