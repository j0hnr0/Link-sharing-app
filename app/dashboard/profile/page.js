export default function Profile() {
  return (
    <div
      className="w-[60%]
          max-custom-md:w-full"
    >
      <div
        className="bg-white rounded-t-xl p-10
            max-custom-semism:p-6"
      >
        <h1
          className="instrument-sans font-bold text-[32px] text-custom-grey-900
              max-custom-semism:text-2xl"
        >
          Profile Details
        </h1>
        <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      {/* No responsive yet */}
        
      {/* No responsive yet */}

      <div
        className="bg-white rounded-b-xl py-6 px-10 border-t border-custom-grey-200
            max-custom-semism:p-4"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="w-[85px] rounded-lg py-4 text-center bg-custom-purple-600 opacity-25 cursor-pointer
                  max-custom-semism:w-full"
          >
            <span className="instrument-sans font-semibold text-base text-white">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
