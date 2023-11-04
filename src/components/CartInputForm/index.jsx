/* eslint-disable react/prop-types */
export default function CartInputForm({
  value,
  handleInputChange,
  placeholder,
  className,
  type = "text",
  name,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      className={` ${className} `}
    />
  );
}
