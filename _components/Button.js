export default function Button({ disabled, children }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="mt-6 w-full rounded-lg py-4 text-center bg-custom-purple-600 cursor-pointer"
    >
      <span className="instrument-sans text-base font-semibold text-white">
        {children}
      </span>
    </button>
  );
}
