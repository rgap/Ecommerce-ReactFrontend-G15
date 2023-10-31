/* eslint-disable react/prop-types */
// ProductsPage.jsx
import { ProductCard } from "../../components";
import { productsArray } from "./mockProducts";

export default function Products() {
  return (
    <div className=" mx-auto p-4 bg-[--color-bg] flex justify-center">
      <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px]">
        {productsArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
