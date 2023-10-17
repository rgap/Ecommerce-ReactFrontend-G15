export default function Register() {
  function navigateToIndex(event) {
    event.preventDefault();
    window.location.href = "/?showModal=true";
  }
  return (

    <main className="bg-white h-full flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] mix-w-[380px]">
        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Crear Cuenta
        </h1>

        <form onSubmit={navigateToIndex}>
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

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-bg-header-footer] hover:bg-[--color-button-text-hero] text-white text-sm capitalize leading-normal transition-transform duration-100">
            Registrarse
          </button>

          <div className="h-10 flex justify-center items-center mb-2">
            <p className="text-sm capitalize">ya tienes una cuenta?</p>
            <a href="#" className="pl-4 text-center text-sm capitalize">
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
              Al hacer clic en "Registrarse", aceptas los
            </span>
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
