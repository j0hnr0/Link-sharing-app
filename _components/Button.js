export default function Button({ children }) {
  return (
    <button
      type="button"
      className="mt-6 w-full rounded-lg py-4 text-center bg-custom-purple-600"
    >
      <span className="instrument-sans text-base font-semibold text-white">
        {children}
      </span>
    </button>
  );
}
