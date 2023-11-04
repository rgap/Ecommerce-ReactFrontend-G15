import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../../components";
import { read, update } from "../../services";
import { inputsPasswordReset } from "./formPasswordReset";
import { inputsReset } from "./formReset";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isConfirmationLinkClicked, setIsConfirmationLinkClicked] =
    useState(false);

  const [resetValues, setResetValues] = useState({
    email: "",
  });

  const [resetErrors, setResetErrors] = useState({
    email: "",
  });

  const [resetPasswordValues, setResetPasswordValues] = useState({
    password: "",
    passwordConfirmation: "",
  });

  const [resetPasswordErrors, setResetPasswordErrors] = useState({
    password: "",
    passwordConfirmation: "",
  });

  const handleResetInputChange = (event) => {
    setResetValues({
      ...resetValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetPasswordInputChange = (event) => {
    setResetPasswordValues({
      ...resetPasswordValues,
      [event.target.name]: event.target.value,
    });
  };

  const validateResetForm = () => {
    const errors = {};

    const validations = {
      email: (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return `Formato de correo invalido`;
        }
      },
    };

    inputsReset.forEach((input) => {
      const value = resetValues[input.name];
      if (value === "") {
        errors[input.name] = `Este campo no puede estar vacio`;
      } else if (validations[input.name]) {
        const errorMessage = validations[input.name](value);
        if (errorMessage) {
          errors[input.name] = errorMessage;
        }
      }
    });

    setResetErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleResetFormSubmit = async (event) => {
    event.preventDefault();

    if (validateResetForm()) {
      setIsFormSubmitted(true);
    }
  };

  const validateResetPasswordForm = () => {
    const password = resetPasswordValues.password;

    const errors = {};

    const validations = {
      password: (value) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(value)) {
          return `Al menos 8 caracteres, incluyendo una letra y un número`;
        }
      },
      passwordConfirmation: (value) => {
        if (value !== password) {
          return `La contraseña no coincide`;
        }
      },
    };

    inputsPasswordReset.forEach((input) => {
      const value = resetPasswordValues[input.name];
      if (value === "") {
        errors[input.name] = `Este campo no puede estar vacio`;
      } else if (validations[input.name]) {
        const errorMessage = validations[input.name](value);
        if (errorMessage) {
          errors[input.name] = errorMessage;
        }
      }
    });

    setResetPasswordErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleResetPasswordFormSubmit = async (event) => {
    event.preventDefault();

    if (validateResetPasswordForm()) {
      console.log("handleResetPasswordFormSubmit = true");
      const users = await read("users");
      const user = users.find(
        (user) => user.email.toLowerCase() === resetValues.email.toLowerCase()
      );
      if (user) {
        await update(
          user.id,
          {
            password: resetPasswordValues.password,
          },
          "users"
        );
        navigate("/login");
      }
    }
  };

  function handleConfirmationLinkClick(event) {
    event.preventDefault();
    setIsConfirmationLinkClicked(true);
  }

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div
        className={`bg-white p-6 w-full max-w-[420px] ${
          isFormSubmitted && !isConfirmationLinkClicked
            ? "md:min-w-[600px]"
            : "md:min-w-[380px]"
        }`}
      >
        <a
          className="mb-14 flex items-center cursor-pointer"
          onClick={redirect("/login")}
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

        {isFormSubmitted && !isConfirmationLinkClicked ? (
          <div className="text-center">
            <span className="text-neutral-950 text-base leading-loose">
              Si es que existe una cuenta para beautipol.alpha.1@gmail.com,
              recibirás un correo electrónico con instrucciones para restablecer
              su contraseña. Si no te llega, asegúrate de revisar tu carpeta de
              spam.
            </span>
            <br />
            <a
              href="#"
              onClick={handleConfirmationLinkClick}
              className="mt-4 block"
            >
              Enlace enviado al correo
            </a>
          </div>
        ) : isConfirmationLinkClicked ? (
          <form
            autoComplete="off"
            onSubmit={handleResetPasswordFormSubmit}
            className="mb-5 flex flex-col gap-3"
          >
            <div className="text-center mb-5">
              <span className="text-neutral-950 text-base">
                Ingresa tu nueva contraseña
              </span>
            </div>

            {inputsPasswordReset.map((input) => (
              <div key={input.name}>
                <TextField
                  type={input.type ?? "text"}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={resetPasswordValues[input.name]}
                  onChange={handleResetPasswordInputChange}
                />
                <span className="text-red-500 mt-1 text-xs">
                  {resetPasswordErrors[input.name]}
                </span>
              </div>
            ))}

            <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100">
              Cambiar Contraseña
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleResetFormSubmit}
            autoComplete="off"
            className="mb-5 flex flex-col gap-3"
          >
            <div className="text-center mb-5">
              <span className="text-neutral-950 text-base">
                Ingresa tu correo electrónico para cambiar tu contraseña
              </span>
            </div>

            {inputsReset.map((input) => (
              <div key={input.name}>
                <TextField
                  type={input.type ?? "text"}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={resetValues[input.name]}
                  onChange={handleResetInputChange}
                />
                <span className="text-red-500 mt-1 text-xs">
                  {resetErrors[input.name]}
                </span>
              </div>
            ))}
            <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100">
              Iniciar Cambio de Contraseña
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
