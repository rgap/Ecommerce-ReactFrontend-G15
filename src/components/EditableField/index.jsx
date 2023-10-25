/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditableField({
  initialValue,
  isEditing,
  type = "text",
}) {
  const [value, setValue] = useState(initialValue);

  return (
    <>
      {isEditing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-[--color-form-border] placeholder:text-sm w-full text-center md:text-start"
        />
      ) : (
        <span>{value}</span>
      )}
    </>
  );
}
