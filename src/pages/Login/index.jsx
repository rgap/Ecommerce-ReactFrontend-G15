import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton, TextField } from "../../components";
import { create, read } from "../../services";
import { saveUser } from "../../slices/userSlice";
import { inputs } from "./form";

export default function Login() {
  const dispatch = useDispatch();
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
    const errors = {};

    const validations = {
      email: (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return `Formato de correo invalido`;
        }
      },
    };

    inputs.forEach((input) => {
      const value = values[input.name];
      if (value === "") {
        errors[input.name] = `Este campo no puede estar vacio`;
      } else if (validations[input.name]) {
        const errorMessage = validations[input.name](value);
        if (errorMessage) {
          errors[input.name] = errorMessage;
        }
      }
    });

    setErrors(errors);
    // Return true if there are no errors, otherwise return false
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Only proceed with creating if the form is valid
    if (validateForm()) {
      // Fetch all users
      const users = await read("users");
      // Find the user with the matching email
      const user = users.find(
        (user) => user.email.toLowerCase() === values.email.toLowerCase()
      );
      // Check if email exists and password matches
      if (user && user.password === values.password) {
        // login success
        dispatch(saveUser({ email: user.email }));
        navigate("/");
      } else {
        setErrors({
          ...errors,
          email: "Correo y / o password incorrecto",
          password: "Correo y / o password incorrecto",
        });
      }
    }
  };

  const handleGoogleLoginOrRegister = async (userGoogleData) => {
    // Fetch all users
    const users = await read("users");
    // Check if email already exists
    const foundUser = users.find((user) => user.email === userGoogleData.email);
    if (foundUser) {
      console.log("foundUser", foundUser);
      // Login success
      dispatch(saveUser({ email: foundUser.email }));
      navigate("/");
    } else {
      // Register
      const user = await create(userGoogleData, "users");
      dispatch(saveUser({ email: user.email }));
      navigate("/?showModal=true");
    }
  };

  return (
    <main className="bg-white flex justify-center items-center p-5">
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
              className="text-base capitalize cursor-pointer"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100">
            Ingresar
          </button>

          <div className="flex flex-col items-center justify-center text-xs mb-6 text-center gap-6">
            <p>o entra con tu cuenta gmail</p>
            <GoogleLoginButton onUserLogin={handleGoogleLoginOrRegister} />
          </div>

          <div className="text-center">
            <span className="text-neutral-950 text-base">¿Eres nuevo? </span>
            <a
              onClick={redirect("/register")}
              className="text-base underline cursor-pointer"
            >
              Crea una cuenta
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
