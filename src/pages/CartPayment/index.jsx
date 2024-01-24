import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button, Logo } from "../../components";
import { basicSchema, creditCardSchema } from "../../schemas";
import { sendPostRequest, storePayment } from "../../services";
import { resetCart } from "../../slices/cartSlice";
import { inputs } from "./form";

import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";


initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLICK_KEY);

const initialCheckBox = true; //estado inicial del checkbox

export default function CartPayment() {
  const initialization = {
    amount: 100,
  };

  const debug = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalUser = useSelector((state) => state.user.data);

  const [personalData, setPersonalData] = useState([]);
  //const [selectedCredit, setSelectedCredit] = useState(false);
  const [checkbox, setCheckbox] = useState(initialCheckBox);

  function getFormatDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  const handleOnSubmit = async (formData) => {
    console.log(formData);
    const body = {
      payment_date: getFormatDate(),
      payer_email: formData.payer.email,
      payer_document_type: formData.payer.identification.type,
      payer_document_number: formData.payer.identification.number,
      installments: formData.installments,
      issuer_id: formData.issuer_id,
      payment_method_id: formData.payment_method_id,
      token: formData.token,
      status: 'CREATED',
      transaction_amount: formData.transaction_amount,
      userId: 1,
    }

    // Mercado pago
    const response = await sendPostRequest(body, "payments/generate")
    console.log("response.data", response.data)
    
  };

  const handleCheckBoxChange = () => {
    setCheckbox(!checkbox); // cambia valor de checkbox
    if (!checkbox) {
      setValues({
        name: personalData.name,
        address: personalData.address,
        city: personalData.city,
        region: personalData.region,
        phoneNumber: personalData.phoneNumber,
      });
    } else {
      //checkbox desmarcado
      setValues({
        name: "",
        address: "",
        city: "",
        region: "",
        phoneNumber: "",
      });
    }
  };

  const { values, errors, touched, handleBlur, handleChange, setValues } =
    useFormik({
      initialValues: {
        name: "",
        address: "",
        city: "",
        region: "",
        phoneNumber: "",
      },
      validationSchema: debug ? undefined : basicSchema,
    });

  const formCreditCard = useFormik({
    initialValues: {
      creditCardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      cvv: "",
    },
    validationSchema: debug ? undefined : creditCardSchema,
  });

  function handlePayment() {
    dispatch(resetCart());
    navigate("/cart-message");
    window.location.reload();
  }

  async function initializeFormData() {
    if (globalUser) {
      const response = await sendPostRequest(
        {
          email: globalUser.email,
        },
        "users/get-by-email"
      );

      const foundUser = response.data;
      if (foundUser) {
        setPersonalData({
          id: foundUser.id,
          name: foundUser.name,
          address: foundUser.address,
          city: foundUser.city,
          region: foundUser.region,
          phoneNumber: foundUser.phoneNumber,
        });
      }
    }
  }

  useEffect(() => {
    initializeFormData();
  }, []);

  useEffect(() => {
    setValues({
      name: personalData.name,
      address: personalData.address,
      city: personalData.city,
      region: personalData.region,
      phoneNumber: personalData.phoneNumber,
    });
  }, [personalData]);

  return (
    <>
      <Logo />
      <div className="flex flex-col md:flex lg:flex-row">
        <section className="cart-info-left lg:w-[50%] flex flex-col items-center md:items-left px-12">
          <Breadcrumb />
          <p className="mb-5 font-bold text-lg ">Direccion de Facturacion </p>
          <form
            autoComplete="off"
            className="w-[300px] md:w-[400px] xl:w-[500px] mb-10 flex flex-col gap-2"
          >
            <div className="my-3 flex gap-1">
              <input
                checked={checkbox}
                onChange={handleCheckBoxChange}
                type="checkbox"
                id="checkboxAddress"
                name="checkboxAddress"
              />
              <label className="text-sm">
                Usar la misma direccion de Envio
              </label>
            </div>
            {inputs.map((input) => (
              <React.Fragment key={input.name}>
                <div className="p-2 border border-gray-700">
                  <input
                    className="w-full outline-none"
                    id={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    value={values[input.name] || ""}
                    onBlur={handleBlur}
                  />
                </div>
                {errors[input.name] && touched[input.name] && (
                  <p className="text-xs text-red-500">{errors[input.name]}</p>
                )}
              </React.Fragment>
            ))}
          </form>
        </section>

        <section className="lg:w-[50%] flex flex-col justify-start items-start px-5 pt-5 mb-12 md:px-10 m-auto">
          <CardPayment
            initialization={initialization}
            onSubmit={handleOnSubmit}
            customization={{
              paymentMethods: {
                maxInstallments: 1,
              },
            }}
          />
        </section>
      </div>
    </>
  );
}

/*

 <div className="flex flex-col gap-10 mt-0 mb-7">
              <div className="flex flex-col text-center">
                <p className="mb-5 font-bold text-lg text-center">Pago</p>
                <p className="">Selecciona metodo de pago</p>
              </div>
              <div className="flex gap-5">
                <div className="w-[70px] md:w-[100px] h-[40px]">
                  <img
                    id="american"
                    className={`cursor-pointer ${
                      selectedCredit === "american"
                        ? "border-2 rounded-sm border-teal-800 "
                        : ""
                    }`}
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/Payment-creditcards/amex.svg"
                    alt=""
                    onClick={() => handleCreditClick("american")}
                  />
                </div>
                <div className="w-[70px] md:w-[100px] h-[40px] flex">
                  <img
                    id="paypal"
                    className={`cursor-pointer ${
                      selectedCredit === "paypal"
                        ? "border-2 rounded-sm border-teal-800 "
                        : ""
                    }`}
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/Payment-creditcards/Paypal.svg"
                    alt=""
                    onClick={() => handleCreditClick("paypal")}
                  />
                </div>
                <div className="w-[70px] md:w-[100px] h-[40px] flex gap-1  ">
                  <img
                    className={`cursor-pointer ${
                      selectedCredit === "visa"
                        ? "border-2 rounded-sm border-teal-800 "
                        : ""
                    }`}
                    id="visa"
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/Payment-creditcards/Visa.svg"
                    alt=""
                    onClick={() => handleCreditClick("visa")}
                  />
                </div>
                <div className="w-[70px] md:w-[100px] h-[40px] flex">
                  <img
                    className={`cursor-pointer ${
                      selectedCredit === "mastercard"
                        ? "border-2 rounded-sm border-teal-800 "
                        : ""
                    }`}
                    id="mastercard"
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/Payment-creditcards/Masterrcard.svg"
                    alt=""
                    onClick={() => handleCreditClick("mastercard")}
                  />
                </div>
              </div>
            </div>

            <form
              autoComplete="off"
              className="w-full md:w-[500px]"
              onSubmit={handlePayment}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="creditCardNumber"
                >
                  Número de Tarjeta
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="creditCardNumber"
                  type="text"
                  placeholder="Número de Tarjeta"
                  onChange={formCreditCard.handleChange}
                  onBlur={formCreditCard.handleBlur}
                />
                {formCreditCard.errors.creditCardNumber &&
                  formCreditCard.touched.creditCardNumber && (
                    <p className="text-xs text-red-500 mt-3">
                      {formCreditCard.errors.creditCardNumber}
                    </p>
                  )}
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-1/2 px-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
                    htmlFor="expirationMonth"
                  >
                    Mes
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expirationMonth"
                    type="text"
                    placeholder="Mes"
                    onChange={formCreditCard.handleChange}
                    onBlur={formCreditCard.handleBlur}
                  />
                  {formCreditCard.errors.expirationMonth &&
                    formCreditCard.touched.expirationMonth && (
                      <p className="text-xs text-red-500 mt-3">
                        {formCreditCard.errors.expirationMonth}
                      </p>
                    )}
                </div>
                <div className="w-1/2 px-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
                    htmlFor="expirationYear"
                  >
                    Año
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expirationYear"
                    type="text"
                    placeholder="Año"
                    onChange={formCreditCard.handleChange}
                    onBlur={formCreditCard.handleBlur}
                  />
                  {formCreditCard.errors.expirationYear &&
                    formCreditCard.touched.expirationYear && (
                      <p className="text-xs text-red-500 mt-3">
                        {formCreditCard.errors.expirationYear}
                      </p>
                    )}
                </div>
              </div>

              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="cvv"
                >
                  CVV
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  type="text"
                  placeholder="CVV"
                  onChange={formCreditCard.handleChange}
                  onBlur={formCreditCard.handleBlur}
                />
                {formCreditCard.errors.cvv && formCreditCard.touched.cvv && (
                  <p className="text-xs text-red-500 mt-3">
                    {formCreditCard.errors.cvv}
                  </p>
                )}
              </div>
              <div className="justify-center flex">
                <div className="w-[185px] h-[50px] m-10 flex">
                  <Button
                    text="Pagar"
                    type="submit"
                    variant={
                      Object.keys(errors).length > 0 ||
                      Object.keys(formCreditCard.errors).length > 0
                        ? "disabled"
                        : "primary"
                    }
                    clickFunction={false}
                  />
                </div>
              </div>

              <p className="mt-2 text-xs text-justify">
                El precio total a pagar, incluidos los impuestos y gastos
                adicionales (si los hubiera), se indican claramente en la página
                de pago. Al hacer clic en "Pagar", usted autoriza el cargo
                correspondiente en su método de pago seleccionado.
              </p>
            </form>
          </section>



*/
