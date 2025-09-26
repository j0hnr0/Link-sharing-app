export default function InputErrorMessage({ error }) {
  return (
    <>
      {error && (
        <div className="mt-2 flex justify-end">
          <small className="instrument-sans font-normal text-xs text-red-500">
            {error}
          </small>
        </div>
      )}
    </>
  );
}
