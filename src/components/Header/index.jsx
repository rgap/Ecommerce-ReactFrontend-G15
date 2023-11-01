import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counterProductos } from "../../slices/cartSlice";

export default function Header() {
  const navigate = useNavigate();
  const globalUser = useSelector((state) => state.user.data);
  const globalCart = useSelector(counterProductos);

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <header className="bg-[--color-bg]">
      <div className="header-bar py-2 flex items-center justify-center">
        <p className="text-sm">
          Delivery <span className="font-semibold">gratis</span> por compras a
          partir de <span className="font-semibold">S/199.00</span> soles.
        </p>
      </div>

      <nav className="max-sm:p-1.5 flex justify-between items-center md:px-4">
        <div className="nav-left md:px-3.5">
          <img
            className="h-[70px] max-sm:hidden cursor-pointer"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
            alt=""
            onClick={redirect("/")}
          />
        </div>
        <div className="nav-center">
          <ul className="flex gap-6 md:text-lg md:gap-x-12">
            <li className="cursor-pointer">
              <a
                className="nav-center-link"
                href="/products"
                data-link-alt="Productos"
              >
                <span> Productos </span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="nav-center-link" href="" data-link-alt="Descuentos">
                <span> Descuentos </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-right flex px-4 gap-7">
          <a href="profile">
            {globalUser ? (
              <img
                className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/login.svg"
                alt=""
              />
            ) : (
              <span onClick={redirect("login")}>Iniciar Sesión</span>
            )}
          </a>
          <a href="cart">
            {globalCart ? (
              <img
                onClick={redirect("/cart")}
                className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/shopping-cart.svg"
                alt=""
              />
            ) : (
              <> </>
            )}
          </a>
        </div>
      </nav>
    </header>
  );
}
