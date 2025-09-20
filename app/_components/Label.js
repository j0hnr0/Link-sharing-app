export default function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="instrument-sans font-normal text-xs text-custom-grey-900"
    >
      {children}
    </label>
  );
}
