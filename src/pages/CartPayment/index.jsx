import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Logo } from "../../components";
import { basicSchema } from "../../schemas";
import { sendPostRequest } from "../../services";
import { counterProductos, resetCart } from "../../slices/cartSlice";
import { capitalize } from "../../utils/utils";
import { inputs } from "./form";

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLICK_KEY, {
  locale: "es-PE",
});

export default function CartPayment() {
  const debug = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const globalUser = useSelector((state) => state.user.data);
  // Calcular el total de nuevo
  const totalAmount = useSelector(counterProductos).reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  // const onError = async (error) => console.log(error);
  // const onReady = async () => console.log("ready");

  const shippingCosts = {
    regular: "12.00",
    rapido: "20.00",
  };
  const getShippingCost = (option) => shippingCosts[option] || "0.00";
  const savedShippingOption = localStorage.getItem("shippingOption");
  const totalShipping = getShippingCost(savedShippingOption);

  const initialization = {
    amount: totalAmount,
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

  useEffect(() => {
    const fetchUserParams = async () => {
      try {
        const response = await sendPostRequest(
          { email: globalUser.email },
          "users/get-by-email"
        );
        const userDetails = {
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          region: response.data.region,
          phoneNumber: response.data.phoneNumber,
        };
        setUserDetails(userDetails);
        setValues(userDetails);
      } catch (error) {
        console.error("Error fetching user params:", error);
      }
    };

    if (globalUser && globalUser.email) {
      fetchUserParams();
    }
  }, [globalUser]);

  async function handleOnSubmitMercadoPago(formData) {
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
      shippingMethod: savedShippingOption,

      shippingName: userDetails.name,
      shippingAddress: userDetails.address,
      shippingCity: userDetails.city,
      shippingRegion: userDetails.region,
      shippingPhoneNumber: userDetails.phoneNumber,

      billingName: values.name,
      billingAddress: values.address,
      billingCity: values.city,
      billingRegion: values.region,
      billingPhoneNumber: values.phoneNumber,

      userId: userDetails.id,
      cart: JSON.parse(localStorage.getItem("cart")),
    };
    // console.log("bodyOrder", bodyOrder);
    console.log(JSON.stringify(bodyOrder, null, 2));

    const response = await sendPostRequest(
      bodyOrder,
      "orders/create-mercadopago-order"
    );

    if (response.ok) {
      const purchaseBody = {
        payerEmail: bodyOrder.payerEmail,
        userId: userDetails.id,
        orderId: response.data.order.id,
      };
      dispatch(resetCart());
      // send emails
      await sendPostRequest(bodyOrder, "orders/send-order-email-to-user");
      await sendPostRequest(bodyOrder, "orders/send-order-email-to-admin");
      // redirect to confirmation / error
      navigate("/cart-message", { state: { purchaseBody } });
      window.location.reload();
    }
  }

  const handleCheckBoxChange = () => {
    setCheckbox(!checkbox); // cambia valor de checkbox
    if (!checkbox) {
      setValues(userDetails);
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

  // Redirigir a login si no hay usuario
  useEffect(() => {
    if (!globalUser) {
      navigate("/login");
    }
  }, [globalUser, navigate]);

  function redirect(route) {
    return async (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <main>
      <Logo />
      <div className="flex flex-col md:flex lg:flex-row">
        <section className="cart-info-left lg:w-[50%] flex flex-col items-center md:items-left px-12">
          <Breadcrumb />

          <p className="text-xl text-center md:text-left font-bold capitalize leading-8 break-words mb-5 mt-8">
            Resumen del Carrito
          </p>

          <section className="text-center mb-5">
            <ul className="mb-4">
              {useSelector(counterProductos).map((product, index) => (
                <li key={index} className="mb-2">
                  {product.title} - {product.quantity} x S/{" "}
                  {parseFloat(product.price).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="font-bold">
              Tipo de Envio: {capitalize(savedShippingOption)}
            </p>
            <p className="font-bold">
              Envio: S/ {parseFloat(totalShipping).toFixed(2)}
            </p>
            <p className="font-bold">
              Total: S/ {parseFloat(totalAmount).toFixed(2)}
            </p>
          </section>

          <p className="text-xl text-center md:text-left font-bold capitalize leading-8 break-words mb-5 mt-8">
            Dirección de Facturación
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

            <div
              className="flex h-[40px] items-center gap-3 cursor-pointer my-8 justify-center md:justify-normal"
              onClick={redirect("/cart-shipping")}
            >
              <img
                className="w-6 h-6"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                alt=""
              />
              <span className="text-sm leading-6 hover:underline">
                Regresar
              </span>
            </div>
          </form>
        </section>

        <section className="lg:w-[50%] flex flex-col justify-start items-start px-5 pt-5 mb-12 md:px-10 ">
          <button onClick={redirect("/cart-payment")} className="mb-5"></button>
          {/* Conditional rendering of CardPayment */}
          {Object.keys(userDetails).length > 0 && (
            <CardPayment
              onSubmit={handleOnSubmitMercadoPago}
              initialization={initialization}
              customization={customization}
              // onReady={onReady}
              // onError={onError}
            />
          )}
        </section>
      </div>
    </main>
  );
}
