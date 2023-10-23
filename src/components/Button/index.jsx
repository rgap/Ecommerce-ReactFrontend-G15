export default function Button({
  text,
  type = "button",
  className,
  variant = "primary",
}) 
{
  const colors = {
    primary: "bg-[--color-cart-text-button-comp]",
    hover: "bg-[--color-bg-announcement-bar]",
    disabled: "",
    danger: "",
    warning: "",
    dark: "",
  };
  return (
      <button
        type={type}
        className={`w-full h-full cursor-pointer text-white text-sm capitalize hover:${colors["hover"]}  ${colors[variant]} ${className}`}> 
        {text}
      </button>
  );
}
