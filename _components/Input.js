export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      name={type}
      id={type}
      className="instrument-sans font-normal text-base text-custom-grey-900 w-full h-full focus:outline-none"
      placeholder={placeholder}
    />
  );
}
