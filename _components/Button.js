import clsx from "clsx";

export default function Button({ disabled, children }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={clsx(
        "mt-6 w-full rounded-lg py-4 text-center",
        {
          "bg-custom-purple-600 cursor-pointer": !disabled,
          "bg-custom-purple-300 cursor-not-allowed shadow-[0_0_20px_4px_rgba(139,92,246,0.3)]": disabled,
        }
      )}
    >
      <span className="instrument-sans text-base font-semibold text-white">
        {children}
      </span>
    </button>
  );
}
