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
    disabled: "bg-gray-400",
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

  const hoverClass = variant !== "disabled" ? `hover:${colors["hover"]}` : "";

  return (
    <button
      onClick={clickFunction ? redirect(ruta) : undefined}
      type={type}
      className={`w-full h-full cursor-pointer text-white text-sm capitalize ${hoverClass} ${colors[variant]} ${className}`}
      disabled={variant == "disabled"}
    >
      {text}
    </button>
  );
}
