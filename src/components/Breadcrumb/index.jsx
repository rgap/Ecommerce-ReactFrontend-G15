import { Link, useLocation } from "react-router-dom";

const breadcrumbText = {
  "/cart": "Carrito",
  "/cart-info": "Información",
  "/cart-shipping": "Envío",
  "/cart-payment": "Pago",
};

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;

  // Get the routes in the order they are supposed to be shown
  const orderedRoutes = Object.keys(breadcrumbText);

  // Find the index of the current route in the breadcrumb
  const currentIndex = orderedRoutes.indexOf(path);

  // If the current route is not in the breadcrumb, we can show the full breadcrumb trail
  // Otherwise, we slice the array to only include routes up to and including the current route
  const routesToShow =
    currentIndex === -1
      ? orderedRoutes
      : orderedRoutes.slice(0, currentIndex + 1);

  return (
    <nav aria-label="breadcrumb" className="text-xl mb-5 font-semibold">
      <ol className="flex justify-center md:justify-start mt-3 mb-3">
        {routesToShow.map((route) => (
          <li key={route} className="mr-2">
            {path === route ? (
              <span className="">{breadcrumbText[route]}</span>
            ) : (
              <Link
                to={route}
                className=" text-[--color-link-text] hover:underline"
              >
                {breadcrumbText[route]}
              </Link>
            )}
            {route !== routesToShow[routesToShow.length - 1] && (
              <span>&nbsp;/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
