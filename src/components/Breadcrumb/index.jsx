import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbText = {
  '/cart': 'Carrito /',
  '/cart-info': 'Información /',
  '/cart-shipping': 'Envío /',
  '/cart-payment': 'Pago',
};

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav aria-label="breadcrumb" className="text-xl ml-10 mb-5 ">
      <ol className="flex">
        {Object.keys(breadcrumbText).map((route) => (
          <li key={route}>
            {path === route ? (
              <span className="font-semibold text-[--color-link-text]"> &nbsp; {breadcrumbText[route]}  </span>
            ) : (
              <Link to={route} className="text-black hover:underline">
              &nbsp;  {breadcrumbText[route]} 
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
