import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Logo,
  ProductShoppingCart,
} from "../../components";
import { basicSchema } from "../../schemas";
import { sendPostRequest, sendPutRequest } from "../../services";
import { counterProductos } from "../../slices/cartSlice";
import { inputs } from "./form";

export default function CartInfo() {
  const navigate = useNavigate();
  const globalUser = useSelector((state) => state.user.data);
  const globalCart = useSelector(counterProductos);
  const [personalData, setPersonalData] = useState([]);

  const total = globalCart.reduce((accumulator, product) => {
    const subtotal = product.quantity * product.price;
    return accumulator + subtotal;
  }, 0);

  const totalCart = total.toFixed(2);

  const onSubmit = async (values, actions) => {
    await sendPutRequest(personalData.id, values, "users");
    navigate("/cart-shipping");
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      region: "",
      phoneNumber: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  async function initializeFormData() {
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
    <main className="lg:flex">
      <section className="cart-info-left lg:w-[55%]">
        <Logo />

        {!globalUser ? (
          <section className="flex justify-center h-[50%] items-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg  break-words"> ¿Ya tienes una cuenta? </p>
              <div className="border flex w-[120px] h-[40px] justify-center items-center gap-1 flex-shrink-0 ">
                <Button
                  ruta="/login"
                  text="Ingresar"
                  type=""
                  variant="primary"
                  className="hover:cursor-pointer"
                />
              </div>
              <p className="text-lg text-center"> o </p>
              <p className="text-lg break-words">!Registrate con nosotros!</p>
              <div className="border flex w-[120px] h-[40px] justify-center items-center gap-1 flex-shrink-0 ">
                <Button
                  ruta="/register"
                  text="Registrarse"
                  type=""
                  variant="primary"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
          </section>
        ) : (
          <div className="flex flex-col items-center">
            <Breadcrumb />
            <p className="text-xl capitalize font-semibold leading-8 break-words mb-8">
              Dirección de Entrega
            </p>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="w-[300px] md:w-[350px] xl:w-[450px] mb-10 flex flex-col gap-2"
            >
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

              <div className="w-full flex mt-10 justify-between">
                <div className="flex w-[190px] h-[40px] items-center">
                  <img
                    className="w-6 h-6"
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                    alt=""
                  />
                  <span
                    onClick={redirect("/cart")}
                    className="text-sm leading-6 cursor-pointer hover:underline"
                  >
                    Regresar
                  </span>
                </div>
                <div className="flex justify-end">
                  <div className="w-[200px] h-[40px]">
                    <Button
                      ruta="/cart-shipping"
                      text="Continuar con Envio"
                      type="submit"
                      variant={
                        Object.keys(errors).length > 0 ? "disabled" : "primary"
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </section>

      <section className="max-lg:hidden cart-info-right min-h-screen lg:w-[45%] bg-[--color-bg] flex flex-col justify-start items-center">
        <div className="w-full flex justify-center">
          <span className="text-xl font-bold mt-10 mb-10">
            Carrito de Compra
          </span>
        </div>

        <div className="lg:w-[350px] xl:w-[450px]">
          {globalCart.map((product) => (
            <div className="md:mb-2" key={product.id}>
              <ProductShoppingCart
                productId={product.id}
                productImage={product.url}
                productTitle={product.name}
                productSize={product.size}
                productColor={product.color}
                productPrice={product.price}
                productQuantity={product.quantity}
                product={product}
                visible={true}
              />
            </div>
          ))}
          <div className="flex flex-col items-end mr-1 mt-5 mb-5 ">
            <p className="text-lg ">
              Subtotal: <span> S/ {totalCart} </span>
            </p>
            <p className="text-xs text-end">
              (*) El importe total que pagará sera calculado en la sección
              ENVIOS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
