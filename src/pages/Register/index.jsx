import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton, TextField } from "../../components";
import { create, read } from "../../services";
import { saveUser } from "../../slices/userSlice";
import { inputs } from "./form";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
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

    const validations = {
      name: (value) => {
        if (!value.trim()) {
          return `No puede ser solo espacios en blanco`;
        } else if (value.trim().length < 3) {
          return `El nombre debe tener al menos 3 caracteres`;
        }
      },
      email: (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return `Formato de correo invalido`;
        }
      },
      password: (value) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(value)) {
          return `Debe tener al menos 8 caracteres, una letra y un número`;
        }
      },
    };

    inputs.forEach((input) => {
      const value = values[input.name];

      if (value === "") {
        errorsEmpty[input.name] = `Este campo no puede estar vacio`;
      } else if (validations[input.name]) {
        const errorMessage = validations[input.name](value);
        if (errorMessage) {
          errorsEmpty[input.name] = errorMessage;
        }
      }
    });

    setErrors(errorsEmpty);
    // Return true if there are no errors, otherwise return false
    return Object.keys(errorsEmpty).length === 0;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const debug = true;

    if (debug) {
      const user = await create(values, "users");
      dispatch(saveUser(user));
      navigate("/?showModal=true");
    }
    // Only proceed with creating if the form is valid
    else if (validateForm()) {
      // Fetch all users
      const users = await read("users");
      // Check if email already exists
      const emailExists = users.some((user) => user.email === values.email);
      if (emailExists) {
        // Update the errors state to show an email exists error
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Ya existe un usuario con ese correo",
        }));
      } else {
        const user = await create(values, "users");
        dispatch(saveUser(user));
        navigate("/?showModal=true");
      }
    }
  };

  const handleUserLogin = async (userData) => {
    // Fetch all users
    const users = await read("users");
    // Check if email already exists
    const foundUser = users.find((user) => user.email === userData.email);
    if (foundUser) {
      // Login
      dispatch(saveUser(foundUser));
      navigate("/");
    } else {
      // Register
      const user = await create(userData, "users");
      dispatch(saveUser(user));
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
          Crear Cuenta
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

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100">
            Registrarse
          </button>

          <div className="h-10 flex justify-center items-center mb-2">
            <p className="text-sm capitalize">ya tienes una cuenta?</p>
            <a
              onClick={redirect("/login")}
              className="pl-4 text-center text-sm capitalize cursor-pointer"
            >
              Ingresar
            </a>
          </div>
          <div className="flex flex-col items-center justify-center text-xs mb-6 text-center gap-6">
            <p>o entra con tu cuenta gmail</p>
            <GoogleLoginButton onUserLogin={handleUserLogin} />
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
