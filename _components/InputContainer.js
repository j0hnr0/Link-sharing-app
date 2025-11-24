import clsx from "clsx";

export default function InputContainer({ error, children }) {
  return (
    <div
      className={clsx(
        `autocomplete-highlight mt-2 w-full border rounded-lg p-4 flex justify-start items-center gap-4 
        focus-within:border-custom-purple-600 
        focus-within:shadow-[0_0_20px_4px_rgba(139,92,246,0.3)]`,
        {
          "border-custom-grey-200": !error,
          "border-red-500": error,
        }
      )}
    >
      {children}
    </div>
  );
}
