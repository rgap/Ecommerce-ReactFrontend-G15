export default function Header() {
  return (
    <header>
      <div className="header-bar py-2 flex items-center justify-center">
        <p className="text-sm">
          Delivery <span className="font-semibold">gratis</span> por compras a
          partir de <span className="font-semibold">S/199.00</span> soles.
        </p>
      </div>

      <nav className="max-sm:p-1.5 flex justify-between items-center md:px-4">
        <div className="nav-left md:px-3.5">
          <img
            className="h-[70px] max-sm:hidden"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
            alt=""
          />
        </div>
        <div className="nav-center">
          <ul className="flex gap-4 md:text-lg md:gap-x-12">
            <li className="cursor-pointer">
              <a className="nav-center-link" href="./" data-link-alt="Home">
                {" "}
                <span> Home </span>{" "}
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="nav-center-link" href="./productos" data-link-alt="Productos">
                {" "}
                <span> Productos </span>{" "}
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="nav-center-link" href="" data-link-alt="Descuentos">
                {" "}
                <span> Descuentos </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-right flex px-4 gap-7">
          <img
            className="w-5 cursor-pointer"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/3b80d3e79d23c548200611e147b287de1d22a5ce/icons/login.svg"
            alt=""
          />
          <img
            className="w-5 cursor-pointer"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/3b80d3e79d23c548200611e147b287de1d22a5ce/icons/shopping-cart.svg"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
}
