import clsx from "clsx";

export default function Label({ htmlFor, error, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(`instrument-sans font-normal text-xs`, {
        "text-custom-grey-900": !error,
        "text-red-500": error,
      })}
    >
      {children}
    </label>
  );
}
