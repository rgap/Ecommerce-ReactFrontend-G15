export default function Login() {
  function navigateToIndex(event) {
    event.preventDefault();
    window.location.href = "/";
  }

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] mix-w-[380px]">
        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Ingresa Con Tu Cuenta
        </h1>

        <form onSubmit={navigateToIndex}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full p-2 mb-3 border border-[--color-form-border] placeholder:text-sm"
            autoComplete="username"
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            className="w-full p-2 mb-3 border border-[--color-form-border] placeholder:text-sm"
            autoComplete="current-password"
          />

          <div className="h-10 mb-2">
            <a href="#" className="text-base capitalize">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[var(--color-bg-header-footer)] hover:bg-[var(--color-button-text-hero)] text-white text-sm capitalize leading-normal transition-transform duration-100">
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
            <a href="#" className="text-base underline">
              Crea una cuenta
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
