"use client";

import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Label from "@/_components/Label";
import clsx from "clsx";
import { useForm } from "react-hook-form";

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleCreateForm() {
    console.log("create");
  }

  return (
    <form onSubmit={handleSubmit(handleCreateForm)} noValidate>
      <h1
        className="instrument-sans text-custom-grey-900 text-[32px] font-bold
                max-custom-sm:text-2xl"
      >
        Create Account
      </h1>
      <p className="instrument-sans font-normal text-base text-custom-grey-500">
        Let&apos;s get you started sharing your links!
      </p>

      <div className="mt-10">
        <Label htmlFor="email" error={errors.email?.message}>
          Email address
        </Label>

        <div
          className={clsx(
            `autocomplete-highlight mt-2 w-full border rounded-lg p-4 flex justify-start items-center gap-4`,
            {
              "border-custom-grey-200": !errors.email,
              "border-red-500": errors.email,
            }
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-email.svg"
            alt="Email Icon"
            width={16}
            height={16}
          />

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. alex@email.com"
            {...register("email", {
              required: "Can't be empty",
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
            <small className="instrument-sans font-normal text-xs text-red-500">
              {errors.email.message}
            </small>
          </div>
        )}
      </div>

      <div className="mt-2.5">
        <Label htmlFor="password" error={errors.password?.message}>
          Create password
        </Label>

        <div
          className={clsx(
            `autocomplete-highlight mt-2 w-full border rounded-lg p-4 flex justify-start items-center gap-4`,
            {
              "border-custom-grey-200": !errors.password,
              "border-red-500": errors.password,
            }
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-password.svg"
            alt="Email Icon"
            width={16}
            height={16}
          />

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: {
                hasLowercase: (value) =>
                  /[a-z]/.test(value) ||
                  "Password must contain at least one lowercase letter",
                hasUppercase: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must contain at least one uppercase letter",
                hasSpecialChar: (value) =>
                  /[^A-Za-z0-9]/.test(value) ||
                  "Password must contain at least one special character",
                hasDigit: (value) =>
                  /[0-9]/.test(value) ||
                  "Password must contain at least one digit",
              },
            })}
          />
        </div>
      </div>

      <div className="mt-2.5">
        <Label htmlFor="new-password">Confirm password</Label>

        <div className="autocomplete-highlight mt-2 w-full border border-custom-grey-200 rounded-lg p-4 flex justify-start items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-password.svg"
            alt="Email Icon"
            width={16}
            height={16}
          />

          <Input
            id="new-password"
            name="new-password"
            type="password"
            placeholder="At least 8 characters"
          />
        </div>
      </div>

      <div className="mt-2">
        <p className="instrument-sans font-normal text-xs text-custom-grey-500">
          Password must contain at least 8 characters
        </p>
      </div>

      <Button>Create new account</Button>
    </form>
  );
}
