export default function Input({ type, placeholder, ref, ...props }) {
  return (
    <input
      type={type}
      className="instrument-sans font-normal text-base text-custom-grey-900 w-full h-full focus:outline-none"
      placeholder={placeholder}
      ref={ref}
      {...props}
    />
  );
}
