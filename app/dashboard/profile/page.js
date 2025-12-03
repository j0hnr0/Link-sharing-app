"use client";

import Image from "next/image";
import Input from "./_components/Input";
import EditorContainer from "../_components/EditorContainer";
import { useForm } from "react-hook-form";

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleForm() {
    console.log("kiki");
  }

  return (
    <EditorContainer>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-[60%]
          max-custom-md:w-full"
        noValidate
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

          <div className="mt-10 w-full p-6 bg-custom-grey-50 rounded-[12px]">
            <div
              className="flex justify-between items-center
          max-custom-lg:gap-2.5
          max-custom-md:gap-0
          max-custom-semism:flex-col max-custom-semism:justify-start max-custom-semism:items-start"
            >
              <p className="instrument-sans font-normal text-base text-custom-grey-500">
                Profile picture
              </p>

              <div
                className="w-full max-w-48 bg-custom-grey-100 py-[60px]
            max-custom-semism:py-[39px] max-custom-semism:max-w-[150px] max-custom-semism:mt-4"
              >
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

              <p
                className="instrument-sans font-normal text-xs text-custom-grey-500
            max-custom-semism:mt-6"
              >
                Image must be below 1024x1024px <br />
                Use PNG or JPG format.
              </p>
            </div>
          </div>

          <div className="mt-6 w-full p-6 bg-custom-grey-50 rounded-[12px]">
            <div
              className="flex justify-between items-center
          max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2"
            >
              <Input
                label="First name*"
                type="text"
                name="first-name"
                placeholder="e.g. John"
                error={errors.firstName?.message}
                {...register("firstName", {
                  required: "Can't be empty",
                })}
              />
            </div>

            {errors.firstName?.message && (
              <div className="mt-2 flex justify-end">
                <p className="text-end instrument-sans font-normal text-xs text-red-500">
                  {errors.firstName.message}
                </p>
              </div>
            )}

            <div
              className="mt-4 flex justify-between items-center
          max-custom-semism:mt-2 max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2"
            >
              <Input
                label="Last name*"
                type="text"
                name="last-name"
                placeholder="e.g. Appleseed"
                error={errors.lastName?.message}
                {...register("lastName", {
                  required: "Can't be empty",
                })}
              />
            </div>

            {errors.lastName?.message && (
              <div className="mt-2 flex justify-end">
                <p className="text-end instrument-sans font-normal text-xs text-red-500">
                  {errors.lastName.message}
                </p>
              </div>
            )}

            <div
              className="mt-4 flex justify-between items-center
          max-custom-semism:mt-2 max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2"
            >
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="e.g. email@example.com"
              />
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-b-xl py-6 px-10 border-t border-custom-grey-200
            max-custom-semism:p-4"
        >
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[85px] rounded-lg py-4 text-center bg-custom-purple-600 opacity-25 cursor-pointer
                  max-custom-semism:w-full"
            >
              <span className="instrument-sans font-semibold text-base text-white">
                Save
              </span>
            </button>
          </div>
        </div>
      </form>
    </EditorContainer>
  );
}
