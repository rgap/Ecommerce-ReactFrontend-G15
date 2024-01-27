import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Logo } from "../../components";
import { basicSchema } from "../../schemas";
import { sendPostRequest } from "../../services";
import { resetCart } from "../../slices/cartSlice";
import { inputs } from "./form";

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLICK_KEY, {
  locale: "es-PE",
});

export default function CartPayment() {
  console.log("render CartPayment");
  const debug = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(true);
  const globalUser = useSelector((state) => state.user.data);
  const initialization = {
    amount: 10,
    payer: {
      email: globalUser.email,
    },
  };

  const customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
    },
    visual: {
      style: {
        theme: "default", // 'default' | 'dark' | 'bootstrap' | 'flat'
      },
    },
  };

  const handleOnSubmitMercadoPago = async (formData) => {
    const bodyOrder = {
      paymentDate: new Date(),
      payerEmail: formData.payer.email,
      payerDocumentType: formData.payer.identification.type,
      payerDocumentNumber: formData.payer.identification.number,
      installments: formData.installments,
      issuerId: formData.issuer_id,
      paymentMethodId: formData.payment_method_id,
      token: formData.token,
      status: "created",
      transactionAmount: formData.transaction_amount,
      userId: JSON.parse(localStorage.getItem("personalData")).id,
      cart: JSON.parse(localStorage.getItem("cart")),
    };
    // console.log(bodyOrder);

    // console.log("bodyOrder", bodyOrder);

    const response = await sendPostRequest(
      bodyOrder,
      "orders/create-order-mercadopago"
    );

    if (response.ok) {
      const purchaseBody = {
        payerEmail: bodyOrder.payerEmail,
        userId: JSON.parse(localStorage.getItem("personalData")).id,
        orderId: response.data.orderId,
      };
      dispatch(resetCart());
      // to load it twice
      // send email
      navigate("/cart-message", { state: { purchaseBody } });
      window.location.reload();
    }
  };

  const handleCheckBoxChange = () => {
    setCheckbox(!checkbox); // cambia valor de checkbox
    if (!checkbox) {
      setValues({
        name: JSON.parse(localStorage.getItem("personalData")).name,
        address: JSON.parse(localStorage.getItem("personalData")).address,
        city: JSON.parse(localStorage.getItem("personalData")).city,
        region: JSON.parse(localStorage.getItem("personalData")).region,
        phoneNumber: JSON.parse(localStorage.getItem("personalData"))
          .phoneNumber,
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

  // Redirigir a login si no hay usuario
  useEffect(() => {
    if (!globalUser) {
      navigate("/login");
    }
  }, [globalUser, navigate]);

  useEffect(() => {
    setValues({
      name: JSON.parse(localStorage.getItem("personalData")).name,
      address: JSON.parse(localStorage.getItem("personalData")).address,
      city: JSON.parse(localStorage.getItem("personalData")).city,
      region: JSON.parse(localStorage.getItem("personalData")).region,
      phoneNumber: JSON.parse(localStorage.getItem("personalData")).phoneNumber,
    });
  }, []);

  return (
    <>
      <Logo />
      <div className="flex flex-col md:flex lg:flex-row">
        <section className="cart-info-left lg:w-[50%] flex flex-col items-center md:items-left px-12">
          <Breadcrumb />

          <p className="text-xl text-center md:text-left font-bold capitalize leading-8 break-words mb-5 mt-8">
            Dirección de Facturación{" "}
          </p>

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
                Usar la misma dirección de Envio
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
            onSubmit={handleOnSubmitMercadoPago}
            initialization={initialization}
            customization={customization}
          />
        </section>
      </div>
    </>
  );
}
