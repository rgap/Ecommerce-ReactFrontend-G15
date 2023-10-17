export default function Register() {
  return (
    <main className="bg-white flex-grow flex items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <form className="w-[393px] h-[534px] flex flex-col items-center bg-white p-6 rounded h-fit">
          <div className="text-center text-[32px] font-semibold capitalize my-5">
            Crear cuenta
          </div>

          <section className="w-full flex flex-col gap-3 mb-10">
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="h-10 w-full px-4 border border-zinc-600"
              placeholder="Nombre"
            />
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              className="w-full h-10 px-4 border border-zinc-600"
              placeholder="Apellidos"
            />

            <input
              type="email"
              id="correo"
              name="correo"
              className="w-full h-10 px-4 border border-zinc-600"
              placeholder="Correo electrónico"
            />

            <input
              type="password"
              id="contraseña"
              name="contraseña"
              className="w-full h-10 px-4 border border-zinc-600"
              placeholder="Contraseña"
            />
          </section>

          <button
            className="h-12 bg-slate-700 text-white text-sm capitalize w-full"
            type="submit"
          >
            Registrarse
          </button>

          <div className="h-10 flex justify-center items-center mb-4">
            <div className="text-sm capitalize">ya tienes una cuenta?</div>
            <div className="h-10 p-4 justify-center items-center gap-1 flex">
              <a href="#" className="text-center text-sm capitalize">
                {" "}
                Ingresar{" "}
              </a>
            </div>
          </div>

          <div className="text-xs mb-10">o entra con tu cuenta gmail</div>

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
      </section>
    </main>
  );
}
