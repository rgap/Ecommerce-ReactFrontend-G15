/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditableField } from "../../components";
import {
  sendGetRequest,
  sendPostRequest,
  sendPutRequest,
} from "../../services";
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
  });
  const [paymentErrors, setPaymentErrors] = useState({
    cardNumber: "",
  });

  const hasErrors = (errors) => {
    return Object.values(errors).some((error) => error !== "");
  };

  const personalDataIsDisabled = hasErrors(personalErrors);
  const paymentDataIsDisabled = hasErrors(paymentErrors);

  const validateField = (form, field, value) => {
    if (field === "email" && field === "name" && !value.trim()) {
      return `Este campo no puede estar vacio`;
    }

    if (field === "name" && value.trim().length < 3) {
      return "Debe tener al menos 3 caracteres";
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return "Ingresa un correo valido";
      }
    }

    if (field === "cardNumber") {
      const cardNumberRegex = /^\d{16}$/;
      if (!cardNumberRegex.test(value.replace(/\s+/g, ""))) {
        return "Debe tener 16 dígitos";
      }
    }

    // if (field === "expirationDate") {
    //   const expirationDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    //   if (!expirationDateRegex.test(value.trim())) {
    //     return "Debe estar en formato MM/AA";
    //   }
    // }
    // if (field === "cvc") {
    //   const cvcRegex = /^\d{3,4}$/;
    //   if (!cvcRegex.test(value.trim())) {
    //     return "Debe tener 3 o 4 dígitos";
    //   }
    // }
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

      if (formName === "payment" && !isEditable) {
        if (field.name === "cardNumber") {
          displayValue = "•••";
        }
      }

      return (
        <div
          key={field.name}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content"
        >
          <label className="font-semibold text-center md:text-left flex-col self-center">
            {field.placeholder}
          </label>
          <EditableField
            isEditable={isEditable}
            type={field.type}
            value={displayValue}
            onChange={handleInputChange(formName, field.name)}
            inputClassName="border border-[--color-form-border] placeholder:text-sm w-full text-center md:text-start max-w-[400px] m-auto"
            labelClassName="block input-value text-center my-px"
            disabled={field.name == "country"}
            error={formErrors[field.name]}
          />
        </div>
      );
    });
  };

  async function initializeFormData() {
    const response = await sendPostRequest(
      {
        email: globalUser.email,
      },
      "users/get-by-email"
    );

    const foundUser = response.data;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePersonalFormSubmit = async (event) => {
    event.preventDefault();
    const isDataChanged = Object.keys(personalData).some(
      (key) => personalData[key] !== originalPersonalData[key]
    );

    if (isEditablePersonal && isDataChanged && !hasErrors(personalErrors)) {
      await sendPutRequest(userID, { ...personalData }, "users");
    } else {
      setOriginalPersonalData({ ...personalData });
    }
    setIsEditablePersonal(!isEditablePersonal);
  };

  const cancelEditModePersonal = (event) => {
    event.preventDefault();
    setPersonalData(originalPersonalData);
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
    const isDataChanged = Object.keys(paymentData).some(
      (key) => paymentData[key] !== originalPaymentData[key]
    );

    if (isEditablePayment && isDataChanged && !hasErrors(paymentErrors)) {
      await sendPutRequest(userID, { ...paymentData }, "users");
    } else {
      setOriginalPaymentData({ ...paymentData });
    }
    setIsEditablePayment(!isEditablePayment);
  };

  const cancelEditModePayment = (event) => {
    event.preventDefault();
    setPaymentData(originalPaymentData);
    setPaymentErrors({
      cardNumber: "",
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
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="flex text-xl mb-10 mt-2">
            <li className="mr-2">
              <a
                onClick={redirect("/")}
                className="text-[--color-link-text] hover:underline font-semibold"
              >
                Página Principal
              </a>
            </li>
            <li className="text-gray-700 font-bold">/</li>
            <li className="ml-2 font-bold">Perfil</li>
          </ol>
        </nav>

        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">
          Mi Cuenta
        </h1>

        {/* Personal Data Form */}

        <form
          className="mb-6 min-w-auto md:min-w-[510px]"
          autoComplete="off"
          onSubmit={handlePersonalFormSubmit}
        >
          <hr className="mb-3 h-[5px] bg-[--color-bg] border-0" />

          <div className="flex justify-between place-items-baseline items-center gap-3">
            <h2 className="text-lg sm:text-2xl mb-4 font-semibold">
              Datos de Cuenta
            </h2>
            {isEditablePersonal ? (
              <div className="flex gap-4">
                <button
                  className="mb-6 mt-2 items-center px-7 py-4 bg-[#B2767A] text-white text-sm capitalize leading-normal transition-transform duration-100"
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
              </div>
            ) : (
              <button
                className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                type="submit"
              >
                Cambiar
              </button>
            )}
          </div>

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
          <hr className="mb-3 h-[5px] bg-[--color-bg] border-0" />

          <div className="flex justify-between place-items-baseline items-center gap-3">
            <h2 className="text-lg sm:text-2xl	mb-4 font-semibold">
              Método de Pago
            </h2>
            {isEditablePayment ? (
              <div className="flex gap-4">
                <button
                  className="mb-6 mt-2 items-center px-7 py-4 bg-[#B2767A] text-white text-sm capitalize leading-normal transition-transform duration-100"
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
              </div>
            ) : (
              <button
                className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                type="submit"
              >
                Cambiar
              </button>
            )}
          </div>

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
            className="mb-6 mt-8 items-center px-7 py-4 bg-[brown] text-white text-sm capitalize leading-normal transition-transform duration-100"
            onClick={logOut}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </main>
  );
}
