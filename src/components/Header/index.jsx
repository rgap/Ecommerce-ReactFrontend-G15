import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counterProductos } from "../../slices/cartSlice";

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const globalUser = useSelector((state) => state.user.data);
  const globalCart = useSelector(counterProductos);

  const total = globalCart.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
      setIsDropdownOpen(false);
    };
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (total > 0) {
      navigate("/cart", { state: { from: location.pathname } });
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[--color-bg]">
      <div className="header-bar py-2 flex items-center justify-center">
        <marquee className="text-xs md:text-sm tracking-wide">
          Delivery <span className="font-semibold">gratis</span> por compras a partir de <span className="font-semibold">S/199.00</span> soles
        </marquee>
      </div>

      <nav className="max-sm:p-4 flex justify-between items-center md:px-4">
        <div className="nav-left md:px-3.5">
          <img
            className="h-[70px] max-sm:hidden cursor-pointer"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
            alt=""
            onClick={redirect("/")}
          />
        </div>
        <div className="nav-center">
          <ul className="flex gap-6 text-left text-xs md:text-lg md:gap-x-12">
            <li className="cursor-pointer flex items-center">
              <a className="nav-center-link" onClick={redirect("/products")} data-link-alt="Productos">
                <span>Productos</span>
              </a>
            </li>
            <li className="cursor-pointer hidden md:block">
              <a className="nav-center-link" onClick={redirect("/news")} data-link-alt="Novedades">
                <span>Novedades</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-right flex px-4 gap-7 relative">
          {globalUser ? (
            <a onClick={redirect("profile")}>
              <img
                className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/login.svg"
                alt=""
              />
            </a>
          ) : (
            <a className="nav-center-link cursor-pointer" data-link-alt="Iniciar Sesión" onClick={redirect("login")}>
              <span>Iniciar Sesión</span>
            </a>
          )}
          <div className="relative" ref={dropdownRef}>
            <img
              onClick={toggleDropdown}
              className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/shopping-cart.svg"
              alt=""
            />

            {/* Contador del carrito */}
            {total > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                {total}
              </span>
            )}
            {isDropdownOpen && (
              <section className="absolute right-[-20px] mt-2 py-2 w-[280px] shadow-xl z-50 bg-[#9dbf97] text-sm text-center">
                <div className="flex items-center px-10 pt-4">
                  <div className="flex flex-col align-center gap-1">
                    <div className="capitalize m-auto font-bold">Tu carrito de compra esta vacio</div>
                    <div className="capitalize m-auto">Aun no sabes que elegir?</div>
                    <button
                      className="m-auto mb-6 mt-2 items-center px-2 py-3 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                      onClick={redirect("/products")}
                    >
                      Ver Productos
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
