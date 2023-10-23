import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function redirect(event) {
    event.preventDefault();
    navigate("/");
  }

  function redirectLogin(event) {
    event.preventDefault();
    navigate("/login");
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] md:min-w-[380px]">
        <span className="mb-14 flex items-center cursor-pointer">
          <img
            className="w-5"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt=""
          />
          <a className="ml-5 text-[--color-main-text]" onClick={redirect}>
            Volver a la página de inicio
          </a>
        </span>

        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Crear Cuenta
        </h1>

        <form onSubmit={redirect}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre Completo"
            className="w-full p-2 mb-3 border border-[--color-form-border] placeholder:text-sm"
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full p-2 mb-3 border border-[--color-form-border] placeholder:text-sm"
            autoComplete="email"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Contraseña"
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

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-bg-header-footer] hover:bg-[--color-button-text-hero] text-white text-sm capitalize leading-normal transition-transform duration-100">
            Registrarse
          </button>

          <div className="h-10 flex justify-center items-center mb-2">
            <p className="text-sm capitalize">ya tienes una cuenta?</p>
            <a
              onClick={redirectLogin}
              className="pl-4 text-center text-sm capitalize"
            >
              Ingresar
            </a>
          </div>
          <div className="flex flex-col items-center justify-center text-xs mb-6 text-center gap-6">
            <p>o entra con tu cuenta gmail</p>
            <img
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/google.svg"
              className="cursor-pointer"
              alt="Google login"
            />
          </div>

          <div className="text-center">
            <span className="text-neutral-950 text-xs">
              Al hacer clic en &quot;Registrarse&quot;, aceptas los
            </span>
            &nbsp;
            <a href="#" className="text-xs underline">
              terminos y condiciones
            </a>
            <span className="text-xs"> y la </span>
            <a href="#" className="text-xs underline">
              política de privacidad
            </a>
            <span className="text-xs">.</span>
          </div>
        </form>
      </div>
    </main>
  );
}
