import { initMercadoPago } from "@mercadopago/sdk-react";

export const initializeMercadoPago = () => {
  initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLICK_KEY, {
    locale: "es-PE",
  });
};
