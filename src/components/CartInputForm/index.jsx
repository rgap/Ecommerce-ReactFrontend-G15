export default function CartInputForm({
    value,
    onChange,
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
        onChange={onChange}
        className={` ${className} `}
      />
    );
  }