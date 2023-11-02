import * as yup from "yup";

const phoneRegExp = /^[0-9()+]+$/;

export const basicSchema = yup.object().shape({
    name: yup.string().min(8,'Nombre es muy corto').required("Campo nombre requerido"),
    address: yup.string().min(10,'Direccion es muy corta').required("Campo direccion es requerido"),
    phoneNumber: yup.string().matches(phoneRegExp,'Telefono solo puede contener números, +, ( y )').required("Campo telefono es requerido"),
    region: yup.string().matches(/^[A-Za-z\s]+$/, 'Region no puede contener números ni caracteres especiales').required('Campo ciudad es requerido'),
    city: yup.string().matches(/^[A-Za-z\s]+$/, 'Ciudad no puede contener números ni caracteres especiales').required('Campo ciudad es requerido'),
})