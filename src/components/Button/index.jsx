/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Button({
  text,
  type = "button",
  className,
  variant = "primary",
  ruta,
  clickFunction = true,
}) {
  const colors = {
    primary: "bg-[--color-cart-text-button-comp]",
    hover: "bg-[--color-cart-text-button-comp-hover]",
    disabled: "",
    danger: "",
    warning: "",
    dark: "",
  };
  const navigate = useNavigate();
  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
    };
  }

  return (
    <button
      onClick={clickFunction ? redirect(ruta) : undefined}
      type={type}
      className={`w-full h-full cursor-pointer text-white text-sm capitalize hover:${colors["hover"]}  ${colors[variant]} ${className}`}
    >
      {text}
    </button>
  );
}
