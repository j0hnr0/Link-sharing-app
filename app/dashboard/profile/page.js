"use client";

import Input from "./_components/Input";
import EditorContainer from "../_components/EditorContainer";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import ProfileImageUpload from "./_components/ProfileImageUpload";

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch("/api/profile-details/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create profile");
      }

      return data;
    },
    onSuccess: () => {
      // TODO: Show success message, redirect, etc.
      console.log("Profile created successfully!");
    },
  });

  function handleForm(data) {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };

    mutation.mutate(formData);
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

          <ProfileImageUpload />

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
                error={errors.email?.message}
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                  maxLength: {
                    value: 100,
                    message: "Please enter a valid email address",
                  },
                })}
              />
            </div>

            {errors.email?.message && (
              <div className="mt-2 flex justify-end">
                <p className="text-end instrument-sans font-normal text-xs text-red-500">
                  {errors.email.message}
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          className="bg-white rounded-b-xl py-6 px-10 border-t border-custom-grey-200
            max-custom-semism:p-4"
        >
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={clsx(
                "w-[85px] rounded-lg py-4 text-center max-custom-semism:w-full",
                {
                  "bg-custom-purple-600 cursor-pointer": !mutation.isPending,
                  "bg-custom-purple-300 cursor-not-allowed shadow-[0_0_20px_4px_rgba(139,92,246,0.3)]":
                    mutation.isPending,
                }
              )}
            >
              <span className="instrument-sans font-semibold text-base text-white">
                {mutation.isPending ? "Saving..." : "Save"}
              </span>
            </button>
          </div>
        </div>
      </form>
    </EditorContainer>
  );
}
