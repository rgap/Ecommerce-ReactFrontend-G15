import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../../components";
import { read } from "../../services";
import { inputs } from "./form";

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }
  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const errorsEmpty = {};

    inputs.forEach((input) => {
      const value = values[input.name];
      if (value === "") {
        errorsEmpty[input.name] = `Este campo no puede estar vacio`;
      }
    });

    setErrors(errorsEmpty);
    // Return true if there are no errors, otherwise return false
    return Object.keys(errorsEmpty).length === 0;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Only proceed with creating if the form is valid
    if (validateForm()) {
      // Fetch all users
      const users = await read("users");

      // Find the user with the matching email
      const user = users.find((user) => user.email === values.email);

      // Check if email exists and password matches
      if (user && user.password === values.password) {
        navigate("/");
      } else {
        setErrors({
          ...errors,
          email: "Invalid email or password",
          password: "Invalid email or password",
        });
      }
    }
  };

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] md:min-w-[380px]">
        <a
          className="mb-14 flex items-center cursor-pointer"
          onClick={redirect("/")}
        >
          <img
            className="w-5"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt=""
          />
          <span className="ml-5 text-[--color-main-text]">
            Volver a la página de inicio
          </span>
        </a>

        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Ingresa Con Tu Cuenta
        </h1>

        <form
          className="mb-5 flex flex-col gap-3"
          onSubmit={handleFormSubmit}
          autoComplete="off"
        >
          {inputs.map((input) => (
            <div key={input.name}>
              <TextField
                type={input.type ?? "text"}
                name={input.name}
                placeholder={input.placeholder}
                value={values[input.name]}
                onChange={handleInputChange}
              />
              <span className="text-red-500 mt-1 text-xs">
                {errors[input.name]}
              </span>
            </div>
          ))}

          <div className="h-10 mb-2">
            <a
              onClick={redirect("/reset-password")}
              className="text-base capitalize"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-bg-header-footer] hover:bg-[--color-button-text-hero] text-white text-sm capitalize leading-normal transition-transform duration-100">
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
            <a onClick={redirect("/register")} className="text-base underline">
              Crea una cuenta
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
