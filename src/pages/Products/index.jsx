/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { ProductCard } from "../../components";
import { read } from "../../services";

function Products() {
  const [productsArray, setProductsArray] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // State for the filtered products based on search
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [productsToShow, setProductsToShow] = useState(12);

  const loadMoreProducts = () => {
    setProductsToShow(productsToShow + 15);
  };

  const loadLessProducts = () => {
    setProductsToShow(productsToShow - 15);
  };

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  async function initializeProductsArray() {
    const productsFromDB = await read("products");
    setProductsArray(productsFromDB);
  }

  // Effect to filter products based on the search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(productsArray);
    } else {
      const results = productsArray.filter((product) =>
        product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchTerm, productsArray]);

  useEffect(() => {
    initializeProductsArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="p-4 bg-[--color-bg] flex justify-center">
      <section className="flex flex-col gap-5 mt-4 mb-16 ">
        {/* Breadcrumb navigation */}
        <nav aria-label="breadcrumb">
          <ol className="flex text-xl">
            <li className="mr-2">
              <a
                href="/"
                className="text-[--color-link-text] hover:underline font-semibold"
              >
                Página Principal
              </a>
            </li>
            <li className="text-gray-700 font-bold">/</li>
            <li className="ml-2 font-bold">Productos</li>
          </ol>
        </nav>

        {/* Search bar */}
        <div className="my-3 flex justify-center">
          <input
            type="text"
            placeholder="Busqueda por nombre de polo"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-lg pl-4 pr-10 py-2 border-2 border-gray-200 rounded-full  transition-colors outline-none"
          />
        </div>

        {/* Product grid */}
        <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px]">
          {filteredProducts.slice(0, productsToShow).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load more or less buttons */}

        {productsArray.length > 0 ? (
          <div className="my-0 m-auto text-center">
            {productsToShow < filteredProducts.length && (
              <button
                className="mb-0 mt-8 items-center px-20 py-6 bg-[--color-cart-text-button-comp] text-white text-sm capitalize leading-normal transition-transform duration-100"
                onClick={loadMoreProducts}
              >
                Cargar Más
              </button>
            )}

            {productsToShow > 15 && (
              <button
                className="mb-0 mt-8 items-center px-20 py-6 bg-[--color-cart-text-button-comp] text-white text-sm capitalize leading-normal transition-transform duration-100"
                onClick={loadLessProducts}
              >
                Cargar Menos
              </button>
            )}
          </div>
        ) : (
          <div className="my-0 m-auto text-center">No hay productos aún</div>
        )}
      </section>
    </main>
  );
}

export default Products;
