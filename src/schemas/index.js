import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(8, "Nombre es muy corto")
    .matches(
      /^[A-Za-z\s]+$/,
      "Nombre no puede contener números ni caracteres especiales"
    )
    .required("Campo nombre es obligatorio"),
  address: yup
    .string()
    .min(10, "Direccion es muy corta")
    .required("Campo direccion es obligatorio"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9()+]+$/, "Telefono solo puede contener números, +, ( y )")
    .required("Campo telefono es obligatorio"),
  region: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Region no puede contener números ni caracteres especiales"
    )
    .required("Campo ciudad es obligatorio"),
  city: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Ciudad no puede contener números ni caracteres especiales"
    )
    .required("Campo ciudad es obligatorio"),
});

export const creditCardSchema = yup.object().shape({
  creditCardNumber: yup
    .string()
    .matches(
      /^\d{16}$/,
      "El número de tarjeta de crédito debe tener 16 dígitos válidos"
    )
    .required("El número de tarjeta de crédito es obligatorio"),
    expirationMonth: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "El mes de vencimiento no es válido")
    .required("El mes de vencimiento es obligatorio"),
  expirationYear: yup
    .string()
    .matches(/^(20|2[1-9])\d{2}$/, "El año de vencimiento no es válido")
    .required("El año de vencimiento es obligatorio"),
  cvv: yup
    .string()
    .matches(/^\d{3,4}$/, "El CVV debe ser un número de 3 o 4 dígitos")
    .required("El CVV es obligatorio"),
});
