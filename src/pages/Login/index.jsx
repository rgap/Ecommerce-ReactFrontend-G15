import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function redirect(event) {
    event.preventDefault();
    navigate("/");
  }

  function redirectResetPassword(event) {
    event.preventDefault();
    navigate("/reset-password");
  }

  function redirectRegister(event) {
    event.preventDefault();
    navigate("/register");
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
          Ingresa Con Tu Cuenta
        </h1>

        <form>
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

          <div className="h-10 mb-2">
            <a onClick={redirectResetPassword} className="text-base capitalize">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-bg-header-footer] hover:bg-[--color-button-text-hero] text-white text-sm capitalize leading-normal transition-transform duration-100"
            onClick={redirect}
          >
            Ingresar
          </button>

          <div className="flex flex-col items-center justify-center text-xs mb-6 text-center gap-6">
            <p>o entra con tu cuenta gmail</p>
            <img
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/google.svg"
              className="cursor-pointer"
              alt="Google login"
            />
          </div>

          <div className="text-center">
            <span className="text-neutral-950 text-base">¿Eres nuevo? </span>
            <a onClick={redirectRegister} className="text-base underline">
              Crea una cuenta
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
