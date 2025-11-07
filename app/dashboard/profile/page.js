import Image from "next/image";

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

        {/* No responsive yet */}
        <div className="mt-10 w-full p-6 bg-custom-grey-50 rounded-[12px]">
          <div className="flex justify-between items-center">
            <p className="instrument-sans font-normal text-base text-custom-grey-500">
              Profile picture
            </p>

            <div className="w-full max-w-48 bg-custom-grey-100 py-[60px]">
              <Image
                src="/images/icon-upload-image.svg"
                className="mx-auto"
                width={40}
                height={40}
                alt="Upload Image Icon"
              />
              <p className="mt-2 text-center instrument-sans font-semibold text-base text-custom-purple-600">
                + Upload Image
              </p>
            </div>

            <p className="instrument-sans font-normal text-xs text-custom-grey-500">
              Image must be below 1024x1024px <br />
              Use PNG or JPG format.
            </p>
          </div>
        </div>

        <div className="mt-6 w-full p-6 bg-custom-grey-50 rounded-[12px]">
          <div className="flex justify-between items-center">
            <label
              htmlFor="first-name"
              className="instrument-sans font-normal text-base text-custom-grey-500"
            >
              First name*
            </label>
            <div className="w-full max-w-[424px] p-4 rounded-[8px] border border-custom-grey-200 bg-white">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="w-full h-full bg-transparent focus:outline-none instrument-sans font-normal text-base"
                placeholder="e.g. John"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <label
              htmlFor="last-name"
              className="instrument-sans font-normal text-base text-custom-grey-500"
            >
              Last name*
            </label>
            <div className="w-full max-w-[424px] p-4 rounded-[8px] border border-custom-grey-200 bg-white">
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="w-full h-full bg-transparent focus:outline-none instrument-sans font-normal text-base"
                placeholder="e.g. Appleseed"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <label
              htmlFor="email"
              className="instrument-sans font-normal text-base text-custom-grey-500"
            >
              Email
            </label>
            <div className="w-full max-w-[424px] p-4 rounded-[8px] border border-custom-grey-200 bg-white">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-full bg-transparent focus:outline-none instrument-sans font-normal text-base"
                placeholder="e.g. email@example.com"
              />
            </div>
          </div>
        </div>
        {/* No responsive yet */}
      </div>

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
