import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex justify-center">
      <div className="bg-e7dfd5 text-center px-0 md:px-16 pb-12">
        <h1 className="text-4xl font-bold mb-10 text-black leading-relaxed max-w-[600px] m-auto">Oferta de Nuevos Polos de Lana Merino</h1>
        <p className="text-lg mb-0 text-black">¡Recientemente hemos incorporado esta exclusiva línea de polos!</p>
        <p className="text-lg mb-0 text-black">Experimenta la calidad, comodidad y elegancia que solo la lana merino puede ofrecer.</p>
      </div>
    </section>
  );
};

// Características de los Polos
const ProductFeatures = () => {
  return (
    <section className="flex justify-center">
      <section className="flex flex-col justify-center">
        {/* Primera Característica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12 px-[16px] md:px-[50px] py-[30px] bg-gray-100 shadow-lg">
          <div>
            <h3 className="text-3xl font-bold mb-4">Térmico Natural</h3>
            <p className="text-lg">
              Los polos de Merino mantienen tu temperatura corporal, permitiéndote sentirte fresco en climas cálidos y cálido en climas fríos.
            </p>
          </div>
          <div className="m-auto">
            <img
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/landing/merino-termico.jpg"
              alt="Polo de Merino"
              className="w-full h-full object-cover max-w-[400px]"
            />
          </div>
        </div>

        {/* Segunda Característica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12  px-[16px] md:px-[50px] py-[30px] bg-gray-100 shadow-lg">
          <div className="m-auto">
            <img
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/landing/merino-olor.jpg"
              alt="Polo de Merino"
              className="w-full h-full object-cover max-w-[400px]"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Resistente al Olor</h3>
            <p className="text-lg">
              La lana de Merino posee propiedades anti-microbianas naturales, lo que hace que los polos sean resistentes al olor incluso después de
              usos prolongados.
            </p>
          </div>
        </div>

        {/* Tercera Característica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center  px-[16px] md:px-[50px]  py-[30px] bg-gray-100 shadow-lg">
          <div>
            <h3 className="text-3xl font-bold mb-4">Absorción y Evaporación de Humedad</h3>
            <p className="text-lg">
              Los polos de Merino son conocidas por sus propiedades de absorción de humedad. Estas pueden absorber y liberar la humedad al ambiente,
              manteniéndote seco y cómodo en todas las condiciones.
            </p>
          </div>
          <div className="m-auto">
            <img
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/landing/merino-secado.jpg"
              alt="Polo de Merino"
              className="w-full h-full object-cover max-w-[400px]"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

// Formulario y CTA
const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateInput = () => {
    let inputErrors = {};
    let valid = true;

    if (!name.trim()) {
      inputErrors.name = "Por favor, ingresa tu nombre.";
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.trim())) {
      inputErrors.email = "Por favor, introduce un correo válido.";
      valid = false;
    }

    const phoneRegex = /^\+?([0-9]{1,3})?[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,9})$/;
    if (!phoneRegex.test(phone.trim())) {
      inputErrors.phone = "Por favor, introduce un número de teléfono válido.";
      valid = false;
    }

    setErrors(inputErrors);
    return valid;
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const debug = true;
    if (debug) {
      setEmail("");
      setName("");
      setPhone("");
      setErrors({});
      setSubmitted(true);
    } else if (validateInput()) {
      setEmail("");
      setName("");
      setPhone("");
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <section className="flex justify-center my-8">
      <div className="bg-e7dfd5 px-0 md:px-12 py-12 max-w-[1000px]">
        <div className="p-8 bg-[--color-cart-bg-gray] text-center  shadow-lg mx-auto">
          <div className="max-w-md flex flex-col m-auto">
            <h2 className="text-3xl font-bold mb-4">¡Oferta Especial!</h2>
            <p className="mb-6">¡Obtén un 10% de descuento y envío gratuito en nuestros polos de lana merino al completar este formulario!</p>
            <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
              <input
                type="text"
                placeholder="Tu nombre completo"
                className={`p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg w-full shadow-sm`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

              <input
                type="text"
                placeholder="Tu correo electrónico"
                className={`mt-[10px] p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg w-full shadow-sm`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

              <input
                type="text"
                placeholder="Tu número de teléfono"
                className={`mt-[10px] p-2 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg w-full shadow-sm`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}

              <button
                type="submit"
                className="bg-[#3EA381] text-white font-bold transition-transform transform hover:scale-105 mb-6 mt-2 px-7 py-4 cursor-pointer "
                disabled={Object.keys(errors).length > 0}
              >
                Aprovechar Oferta
              </button>
            </form>
            {submitted && ( // Add this conditional rendering block
              <p className="mt-4 text-orange-900">¡Formulario enviado con éxito! Pronto recibirás tu descuento.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-5 pb-5">
      <section className="flex flex-row justify-center">
        <div className="flex flex-col">
          <div className="mt-6 color-text-white max-w-sm">
            <p className="footer-title font-semibold md:text-lg hidden md:block">Siguenos en Nuestras Redes Sociales</p>
            <ul className="md:pt-5 flex justify-center gap-6">
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
          <div className="max-sm:text-xs md:text-sm gap-1.5 my-8 color-text-white flex justify-start items-center">
            <img className="w-[16px]" src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/copyright.svg" alt="" />
            <p className="">2023 Beautipol. Todos los derechos reservados.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

// Componente Principal
const News = () => {
  const navigate = useNavigate();

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <>
      <main className="flex flex-row justify-center">
        <section className="max-w-[1000px] flex flex-col p-6 text-center md:text-left">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="flex text-xl mb-8 mt-4">
              <li className="mr-2">
                <a onClick={redirect("/")} className="text-[--color-link-text] hover:underline font-semibold cursor-pointer">
                  Página Principal
                </a>
              </li>
              <li className="text-gray-700 font-bold">/</li>
              <li className="ml-2 font-bold">Novedades</li>
            </ol>
          </nav>
          <HeroSection />
          <ProductFeatures />
          <EmailSignupForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;
