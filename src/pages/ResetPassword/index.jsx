import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function redirect(event) {
    event.preventDefault();
    navigate("/login");
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
    // navigate("/");
  }

  function handleLinkClick(event) {
    event.preventDefault();
    setIsLinkClicked(true);
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div
        className={`bg-white p-6 w-full max-w-[420px] ${
          isFormSubmitted && !isLinkClicked
            ? "md:min-w-[600px]"
            : "md:min-w-[380px]"
        }`}
      >
        <a
          className="mb-14 flex items-center cursor-pointer"
          onClick={redirect}
        >
          <img
            className="w-5"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt=""
          />
          <span className="ml-5 text-[--color-main-text]">
            Volver a iniciar sesión
          </span>
        </a>

        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Cambio de Contraseña
        </h1>

        {isFormSubmitted && !isLinkClicked ? (
          <div className="text-center">
            <span className="text-neutral-950 text-base leading-loose">
              Si es que existe una cuenta para beautipol.alpha.1@gmail.com,
              recibirás un correo electrónico con instrucciones para restablecer
              su contraseña. Si no te llega, asegúrate de revisar tu carpeta de
              spam.
            </span>
            <br />
            <a href="#" onClick={handleLinkClick} className="mt-4 block">
              Enlace enviado al correo
            </a>
          </div>
        ) : isLinkClicked ? (
          <form autoComplete="off">
            <div className="text-center mb-5">
              <span className="text-neutral-950 text-base">
                Ingresa tu nueva contraseña
              </span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Nueva contraseña"
                className="w-full p-2 mb-3 border border-[--color-form-border] placeholder:text-sm"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-[22px] transform -translate-y-1/2"
              >
                {showPassword ? (
                  <img src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/eye-open.svg" />
                ) : (
                  <img src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/eye-closed.svg" />
                )}
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password-confirmation"
                name="password-confirmation"
                placeholder="Confirmar Nueva contraseña"
                className="w-full p-2 mb-3 border border-[--color-form-border] placeholder:text-sm"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-[22px] transform -translate-y-1/2"
              >
                {showPassword ? (
                  <img src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/eye-open.svg" />
                ) : (
                  <img src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/eye-closed.svg" />
                )}
              </button>
            </div>

            <button
              className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
              onClick={redirect}
            >
              Cambiar Contraseña
            </button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="text-center mb-5">
              <span className="text-neutral-950 text-base">
                Ingresa tu correo electrónico para cambiar tu contraseña
              </span>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full p-2 mb-3 border border-[--color-form-border] placeholder:text-sm"
            />
            <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100">
              Iniciar Cambio de Contraseña
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
