export default function Input({ label, type, name, placeholder }) {
  return (
    <>
      <label
        htmlFor={name}
        className="instrument-sans font-normal text-base text-custom-grey-500"
      >
        {label}
      </label>
      <div className="w-full max-w-[424px] p-4 rounded-[8px] border border-custom-grey-200 bg-white">
        <input
          type={type}
          name={name}
          id={name}
          className="w-full h-full bg-transparent focus:outline-none instrument-sans font-normal text-base"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
