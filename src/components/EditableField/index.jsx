/* eslint-disable react/prop-types */
const EditableField = ({
  isEditable,
  type,
  value,
  onChange,
  inputClassName,
  labelClassName,
  error,
}) => {
  const errorClass = error ? "border-red-500" : "";

  if (isEditable) {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${inputClassName} ${errorClass}`}
      />
    );
  }

  return <label className={`${labelClassName}`}>{value}</label>;
};

export default EditableField;
