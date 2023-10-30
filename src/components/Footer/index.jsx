import { useState } from "react";

export default function Footer() {
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const [subscriptionEmailSubmitted, setSubscriptionEmailSubmitted] =
    useState(false);

  const handleSubscriptionSubmit = (event) => {
    event.preventDefault();
    setSubscriptionEmailSubmitted(true);
    // Send the email to the backend or email service
  };

  return (
    <footer className="pt-5 pb-5">
      <div className="mr-6 ml-6 md:mr-20 md:ml-20 color-text-white flex flex-col justify-between lg:flex-row">
        <div className="footer-left pb-5 my-4">
          <p className="footer-title font-bold md:text-xl my-4">
            Unete y obten un 15% en tu primera compra.
          </p>
          <form
            onSubmit={handleSubscriptionSubmit}
            className="flex flex-col space-y-4"
          >
            <div className="relative">
              <input
                className="p-2 pr-6 w-full lg:w-full border pl-2 text-[--color-main-text]"
                type="email"
                id="email-subscription"
                name="email-subscription"
                placeholder="Tu coreo electrónico"
                value={subscriptionEmail}
                onChange={(e) => setSubscriptionEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center text-white bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover]  px-3 focus:outline-none transition-colors"
              >
                {/* absolute inset-y-0 right-8 md:right-3 flex items-center pointer-events-none cursor-pointer */}
                <img
                  className="w-5"
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow-forward.svg"
                  alt="Submit"
                />
              </button>
            </div>
            {subscriptionEmailSubmitted && (
              <div className=" text-sm flex">
                <img
                  className="w-5 mr-2 bg-white"
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/check.svg"
                  alt="Submit"
                />
                ¡Gracias por suscribirte!
              </div>
            )}
          </form>
        </div>

        <div className="footer-right color-text-white max-md:text-left grid grid-cols-2 md:gap-x-20 gap-x-[25vw]">
          <div className="">
            <p className="font-bold md:text-xl pb-2">Sobre Nosotros</p>
            <p />
            <ul className="md:text-lg md:font-normal">
              <li className="leading-10 cursor-pointer">Nuestra Historia</li>
              <li className="leading-10 cursor-pointer">Contactanos</li>
              <li className="leading-10 cursor-pointer">
                Politica de Privacidad
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold md:text-xl pb-2">Ayuda y Soporte</p>
            <ul className="md:text-lg md:font-normal">
              <li className="leading-10 cursor-pointer">Ordenes y Envios</li>
              <li className="leading-10 cursor-pointer">Devoluciones</li>
              <li className="leading-10 cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ml-6 md:ml-20 md:flex-row mt-6 color-text-white">
        <p className="footer-title font-semibold md:text-lg hidden md:block">
          Siguenos en
        </p>
        <ul className="md:pt-5 flex gap-6">
          <li>
            <a href="#">
              <img
                className="w-6 h-6"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/facebook-logo.svg"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="w-6 h-6"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/instagram-logo.svg"
                alt="Whatsapp"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-6 md:ml-20 max-sm:text-xs md:text-sm gap-1.5 mt-8 color-text-white flex justify-start items-center">
        <img
          className="w-[16px]"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/copyright.svg"
          alt=""
        />
        <p className="">2023 Beautipol. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
