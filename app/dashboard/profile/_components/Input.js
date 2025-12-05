import clsx from "clsx";

export default function Input({
  label,
  type,
  name,
  placeholder,
  error,
  defaultValue,
  ref,
  ...props
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="instrument-sans font-normal text-base text-custom-grey-500
        max-custom-semism:text-xs"
      >
        {label}
      </label>
      <div
        className={clsx(
          `w-full max-w-[424px] p-4 rounded-[8px] border bg-white
      max-custom-lg:max-w-[250px]
      max-custom-md:max-w-[424px]`,
          {
            "border-red-500": error,
            "border-custom-grey-200 focus-within:border-custom-purple-600 focus-within:shadow-[0_0_20px_4px_rgba(139,92,246,0.3)]":
              !error,
          }
        )}
      >
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue || ""}
          className="w-full h-full bg-transparent focus:outline-none instrument-sans font-normal text-base"
          ref={ref}
          {...props}
        />
      </div>
    </>
  );
}
