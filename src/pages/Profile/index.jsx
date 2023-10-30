/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditableField } from "../../components";
import { read, update } from "../../services";
import { logOutUser } from "../../slices/userSlice";
import { inputsAccount, inputsPayment } from "./form";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const globalUser = useSelector((state) => state.user.data);
  const [userID, setUserID] = useState("");

  const [originalPersonalData, setOriginalPersonalData] = useState({});
  const [originalPaymentData, setOriginalPaymentData] = useState({});

  const [isEditablePersonal, setIsEditablePersonal] = useState(false);
  const [isEditablePayment, setIsEditablePayment] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    region: "",
    country: "",
  });
  const [personalErrors, setPersonalErrors] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    region: "",
    country: "",
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });
  const [paymentErrors, setPaymentErrors] = useState({
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });

  const hasErrors = (errors) => {
    return Object.values(errors).some((error) => error !== "");
  };

  const personalDataIsDisabled = hasErrors(personalErrors);
  const paymentDataIsDisabled = hasErrors(personalErrors);

  const validateField = (form, field, value) => {
    // General empty field validation
    if (field === "email" && field === "name" && !value.trim()) {
      return `Este campo no puede estar vacio`;
    }

    // Specific validation for the 'name' field
    if (field === "name" && value.trim().length < 3) {
      return "El nombre debe tener al menos 3 caracteres";
    }

    // Specific validation for the 'email' field
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return "Ingresa un correo valido";
      }
    }

    return "";
  };

  const handleInputChange = (form, field) => (event) => {
    const value = event.target.value;
    let error = validateField(form, field, value);

    if (form === "personal") {
      setPersonalData({ ...personalData, [field]: value });
      setPersonalErrors({ ...personalErrors, [field]: error });
    } else if (form === "payment") {
      setPaymentData({ ...paymentData, [field]: value });
      setPaymentErrors({ ...paymentErrors, [field]: error });
    }
  };

  const renderFields = (fields, isEditable, formData, formErrors, formName) => {
    return fields.map((field) => {
      let displayValue = formData[field.name];

      // Mask the value for specific payment fields when not editable
      if (formName === "payment" && !isEditable) {
        if (
          field.name === "cardNumber" ||
          field.name === "expirationDate" ||
          field.name === "cvc"
        ) {
          displayValue = "•••";
        }
      }

      return (
        <div
          key={field.name}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content"
        >
          <label className="font-semibold text-center md:text-left">
            {field.placeholder}
          </label>
          <EditableField
            isEditable={isEditable}
            type={field.type}
            value={displayValue}
            onChange={handleInputChange(formName, field.name)}
            inputClassName="border border-[--color-form-border] placeholder:text-sm w-full text-center md:text-start max-w-[400px] m-auto"
            labelClassName="block input-value text-center my-px"
            error={formErrors[field.name]}
          />
          {formErrors[field.name] && (
            <p className="text-red-500 text-xs">{formErrors[field.name]}</p>
          )}
        </div>
      );
    });
  };

  async function initializeFormData() {
    const users = await read("users");
    const foundUser = users.find(
      (user) => user.email.toLowerCase() === globalUser.email.toLowerCase()
    );

    if (foundUser) {
      setUserID(foundUser.id);
      setPersonalData((prev) => ({ ...prev, ...filterKeys(foundUser, prev) }));
      setPaymentData((prev) => ({ ...prev, ...filterKeys(foundUser, prev) }));
    }
  }

  function filterKeys(source, target) {
    const filtered = {};
    Object.keys(target).forEach((key) => {
      if (key in source) {
        filtered[key] = source[key];
      }
    });
    return filtered;
  }

  useEffect(() => {
    initializeFormData();
    // console.log("personalData", personalData);
    // console.log("paymentData", paymentData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePersonalFormSubmit = async (event) => {
    event.preventDefault();
    // Check if there have been changes
    const isDataChanged = Object.keys(personalData).some(
      (key) => personalData[key] !== originalPersonalData[key]
    );

    if (isEditablePersonal && isDataChanged && !hasErrors(personalErrors)) {
      // console.log("Submitting Personal Data:", personalData);
      // Add your submission logic here
      await update(userID, { ...personalData }, "users");
    } else {
      setOriginalPersonalData({ ...personalData }); // Save current data
    }
    setIsEditablePersonal(!isEditablePersonal);
  };

  const cancelEditModePersonal = (event) => {
    event.preventDefault();
    setPersonalData(originalPersonalData); // Restore original data
    setPersonalErrors({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      city: "",
      region: "",
      country: "",
    }); // Clear errors
    setIsEditablePersonal(!isEditablePersonal);
  };

  const handlePaymentFormSubmit = async (event) => {
    event.preventDefault();
    // Check if there have been changes
    const isDataChanged = Object.keys(paymentData).some(
      (key) => paymentData[key] !== originalPaymentData[key]
    );

    if (isEditablePayment && isDataChanged && !hasErrors(personalErrors)) {
      // console.log("Submitting Payment Data:", paymentData);
      await update(userID, { ...paymentData }, "users");
    } else {
      setOriginalPaymentData({ ...paymentData }); // Save current data
    }
    setIsEditablePayment(!isEditablePayment);
  };

  const cancelEditModePayment = (event) => {
    event.preventDefault();
    setPaymentData(originalPaymentData); // Restore original data
    setPaymentErrors({
      cardNumber: "",
      expirationDate: "",
      cvc: "",
    });
    setIsEditablePayment(!isEditablePayment);
  };

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

        {/* Personal Data Form */}

        <form
          className="mb-6 min-w-auto md:min-w-[510px]"
          autoComplete="off"
          onSubmit={handlePersonalFormSubmit}
        >
          <div className="flex justify-between place-items-baseline">
            <h2 className="text-base mb-4 font-semibold">
              Mis Datos Personales
            </h2>
            {isEditablePersonal ? (
              <>
                <button
                  className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                  type="submit"
                  onClick={cancelEditModePersonal}
                >
                  Cancelar
                </button>
                <button
                  className={`mb-6 mt-2 items-center px-7 py-4 text-white text-sm capitalize leading-normal transition-transform duration-100 
                ${
                  personalDataIsDisabled
                    ? "bg-gray-400"
                    : "bg-[--color-cart-text-button-comp-hover]"
                }`}
                  type="submit"
                  disabled={personalDataIsDisabled}
                >
                  Guardar
                </button>
              </>
            ) : (
              <button
                className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                type="submit"
              >
                Cambiar
              </button>
            )}
          </div>

          <hr className="mb-5" />

          <div
            id="personal"
            className="grid gap-4 md:gap-8 items-center mb-10 text-center md:text-start"
          >
            {renderFields(
              inputsAccount,
              isEditablePersonal,
              personalData,
              personalErrors,
              "personal"
            )}
          </div>
        </form>

        {/* Payment Data Form */}

        <form
          className="mb-6"
          autoComplete="off"
          onSubmit={handlePaymentFormSubmit}
        >
          <div className="flex justify-between place-items-baseline">
            <h2 className="text-base mb-4 font-semibold">Método de Pago</h2>
            {isEditablePayment ? (
              <>
                <button
                  className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                  type="submit"
                  onClick={cancelEditModePayment}
                >
                  Cancelar
                </button>

                <button
                  className={`mb-6 mt-2 items-center px-7 py-4 text-white text-sm capitalize leading-normal transition-transform duration-100 
                ${
                  paymentDataIsDisabled
                    ? "bg-gray-400"
                    : "bg-[--color-cart-text-button-comp-hover]"
                }`}
                  type="submit"
                  disabled={paymentDataIsDisabled}
                >
                  Guardar
                </button>
              </>
            ) : (
              <button
                className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                type="submit"
              >
                Cambiar
              </button>
            )}
          </div>

          <hr className="mb-5" />

          <div
            id="payment"
            className="grid gap-4 md:gap-8 items-center mb-10 text-center md:text-start"
          >
            {renderFields(
              inputsPayment,
              isEditablePayment,
              paymentData,
              paymentErrors,
              "payment"
            )}
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
