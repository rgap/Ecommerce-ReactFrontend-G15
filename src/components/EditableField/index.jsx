/* eslint-disable react/prop-types */
const EditableField = ({
  isEditable,
  type,
  value,
  onChange,
  className,
  error,
}) => {
  const errorClass = error ? "border-red-500" : "";

  if (isEditable) {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${className} ${errorClass}`}
      />
    );
  }

  return (
    <label className="block input-value text-center  my-px">{value}</label>
  );
};

export default EditableField;
