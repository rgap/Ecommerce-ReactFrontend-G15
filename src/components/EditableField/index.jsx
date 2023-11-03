/* eslint-disable react/prop-types */
const EditableField = ({
  isEditable,
  type,
  value,
  onChange,
  inputClassName,
  labelClassName,
  disabled,
  error,
}) => {
  const errorClass = error ? "border-red-500" : "";

  if (isEditable) {
    return (
      <div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`${inputClassName} ${errorClass} outline-none p-1.5`}
          disabled={disabled}
        />
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </div>
    );
  }

  return <label className={`${labelClassName}`}>{value}</label>;
};

export default EditableField;
