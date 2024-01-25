import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button, Logo } from "../../components";
import { basicSchema, creditCardSchema } from "../../schemas";
import { sendPostRequest } from "../../services";
import { resetCart } from "../../slices/cartSlice";
import { inputs } from "./form";

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLICK_KEY, {
  locale: "es-PE",
});

const initialCheckBox = true; //estado inicial del checkbox

export default function CartPayment() {
  const initialization = {
    amount: 1200,
  };

  const debug = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalUser = useSelector((state) => state.user.data);

  const [personalData, setPersonalData] = useState([]);
  //const [selectedCredit, setSelectedCredit] = useState(false);
  const [checkbox, setCheckbox] = useState(initialCheckBox);

  const handleOnSubmit = async (formData) => {
    console.log("formData", formData);

    const body = {
      payment_date: new Date(),
      payer_email: formData.payer.email,
      payer_document_type: formData.payer.identification.type,
      payer_document_number: formData.payer.identification.number,
      installments: formData.installments,
      issuer_id: formData.issuer_id,
      payment_method_id: formData.payment_method_id,
      token: formData.token,
      status: "created",
      transaction_amount: formData.transaction_amount,
      userId: personalData.id,
    };

    //console.log("body",body)
    // Mercado pago
    const response = await sendPostRequest(body, "payments/generate");
    //console.log("response.data", response.data)
    dispatch(resetCart());
    navigate("/cart-message");
    window.location.reload();
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

  // Redirect if globalUser is not defined
  useEffect(() => {
    if (!globalUser) {
      navigate("/login"); // Redirect to the login page or any other appropriate page
    }
  }, [globalUser, navigate]);

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

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

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
