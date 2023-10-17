export default function index({ isEditing, label, value, type = "text", id }) {
  return (
    <>
      <label className="font-semibold">{label}:</label>
      {isEditing ? (
        <input
          type={type}
          className="border border-[--color-form-border] placeholder:text-sm p-2 w-full min-w-[260px]"
          defaultValue={value}
          id={id}
          disabled={id === "country"}
        />
      ) : (
        <label className="block input-value" data-type={type}>
          {value}
        </label>
      )}
    </>
  );
}
