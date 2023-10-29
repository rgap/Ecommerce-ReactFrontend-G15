/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { read } from "../../services";
import { logOutUser } from "../../slices/userSlice";

export default function Profile() {
  const globalUser = useSelector((state) => state.user.data);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cartProductIDs: "",
    cartProductQuantities: "",
    phoneNumber: "",
    address: "",
    city: "",
    region: "",
    country: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });
  const [cardNumberDisplayed, setCardNumberDisplayed] = useState("•••");
  const [expirationDateDisplayed, setExpirationDateDisplayed] = useState("•••");
  const [cvcDisplayed, setCvcDisplayed] = useState("•••");

  async function setFormValues() {
    const users = await read("users");
    // Find the user with the specified email
    const foundUser = users.find((user) => user.email === globalUser.email);
    // Create a new object for updated values
    const updatedValues = {};
    // Iterate over the keys of the current values
    Object.keys(values).forEach((key) => {
      updatedValues[key] = foundUser[key];
    });
    setValues(updatedValues);
  }

  useEffect(() => {
    setFormValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  function logOut() {
    dispatch(logOutUser());
    navigate("/");
  }

  function changeToInputs(containerId) {
    const saveBtn = document.querySelector(`#button-save-${containerId}`);
    const changeBtn = document.querySelector(`#button-change-${containerId}`);

    document
      .querySelectorAll(`#${containerId} label.input-value`)
      .forEach((label) => {
        const input = document.createElement("input");
        input.setAttribute("value", label.textContent);
        input.className =
          "border border-[--color-form-border] placeholder:text-sm w-full text-center md:text-start";
        input.type = label.getAttribute("data-type");
        if (label.id == "country") input.disabled = true;
        input.id = label.id;
        label.replaceWith(input);
      });

    changeBtn.style.display = "none";
    saveBtn.style.display = "block";

    setCardNumberDisplayed(values.cardNumber);
    setExpirationDateDisplayed(values.expirationDate);
    setCvcDisplayed(values.cvc);
  }

  function changeToLabels(containerId) {
    const saveBtn = document.querySelector(`#button-save-${containerId}`);
    const changeBtn = document.querySelector(`#button-change-${containerId}`);
    const inputs = document.querySelectorAll(`#${containerId} input`);

    inputs.forEach((input) => {
      const label = document.createElement("label");
      label.textContent = input.value;
      label.className = "block input-value";
      label.setAttribute("data-type", input.type);
      label.id = input.id;
      input.replaceWith(label);
    });

    saveBtn.style.display = "none";
    changeBtn.style.display = "block";

    setCardNumberDisplayed("•••");
    setExpirationDateDisplayed("•••");
    setCvcDisplayed("•••");
  }

  return (
    <main className="bg-white flex justify-center items-center p-5 h-fit">
      <div className="bg-white p-6 w-screen md:w-fit max-w-[550px] md:min-w-[380px]">
        <a
          className="mb-7 flex items-center cursor-pointer"
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
          Mi Cuenta
        </h1>
        <form className="mb-6 min-w-auto md:min-w-[510px]" autoComplete="off">
          <div className="flex justify-between place-items-baseline">
            <h2 className="text-base mb-4 font-semibold">
              Mis Datos Personales
            </h2>
            <button
              id="button-change-personal"
              className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
              onClick={(event) => {
                event.preventDefault();
                changeToInputs("personal");
              }}
            >
              Cambiar
            </button>
            <button
              id="button-save-personal"
              className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100 hidden"
              onClick={(event) => {
                event.preventDefault();
                changeToLabels("personal");
              }}
            >
              Guardar
            </button>
          </div>

          <hr className="mb-5" />
          <div
            id="personal"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center mb-10 text-center md:text-start"
          >
            <label className="font-semibold">Correo Electrónico</label>
            <label className="block input-value" data-type="email">
              {values.email}
            </label>

            <label className="font-semibold">Nombre Completo</label>
            <label className="block input-value" data-type="text">
              {values.name}
            </label>

            <label className="font-semibold">Teléfono</label>
            <label className="block input-value" data-type="tel">
              {values.phoneNumber}
            </label>

            <label className="font-semibold">Dirección</label>
            <label className="block input-value" data-type="text">
              {values.address}
            </label>

            <label className="font-semibold">Ciudad</label>
            <label className="block input-value" data-type="text">
              {values.city}
            </label>

            <label className="font-semibold">Región</label>
            <label className="block input-value" data-type="text">
              {values.region}
            </label>
            <label className="font-semibold">País</label>
            <label id="country" className="block input-value" data-type="text">
              {values.country}
            </label>
          </div>
        </form>

        <form className="mb-6" autoComplete="off">
          <div className="flex justify-between place-items-baseline">
            <h2 className="text-base mb-4 font-semibold">Método de Pago</h2>
            <button
              id="button-change-payment"
              className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
              onClick={(event) => {
                event.preventDefault();
                changeToInputs("payment");
              }}
            >
              Cambiar
            </button>
            <button
              id="button-save-payment"
              className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100 hidden"
              onClick={(event) => {
                event.preventDefault();
                changeToLabels("payment");
              }}
            >
              Guardar
            </button>
          </div>

          <hr className="mb-5" />
          <div
            id="payment"
            className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-center mb-10 md:text-start"
          >
            <div className="text-center flex flex-col gap-4">
              <label className="font-semibold">Tarjeta</label>
              <label className="block input-value" data-type="text">
                {/* Visa ••• 3011 */}
                {cardNumberDisplayed}
              </label>
            </div>
            <div className="text-center flex flex-col gap-4">
              <label className="font-semibold">Expiración</label>
              <label className="block input-value" data-type="text">
                {/* 12/23 */}
                {expirationDateDisplayed}
              </label>
            </div>
            <div className="text-center flex flex-col gap-4">
              <label className="font-semibold">CVC</label>
              <label className="block input-value" data-type="text">
                {/* ••• */}
                {cvcDisplayed}
              </label>
            </div>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            className="mb-6 mt-8 items-center px-7 py-4 bg-[--color-cart-text-button-comp] text-white text-sm capitalize leading-normal transition-transform duration-100"
            onClick={logOut}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </main>
  );
}
