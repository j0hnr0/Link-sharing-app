"use client";

import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Label from "@/_components/Label";
import clsx from "clsx";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleLoginForm() {
    console.log("login");
  }

  return (
    <form onSubmit={handleSubmit(handleLoginForm)} noValidate>
      <h1
        className="instrument-sans text-custom-grey-900 text-[32px] font-bold
            max-custom-sm:text-2xl"
      >
        Login
      </h1>
      <p className="instrument-sans font-normal text-base text-custom-grey-500">
        Add your details below to get back into the app
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
      </div>

      <div className="mt-6">
        <Label htmlFor="password" error={errors.password?.message}>
          Password
        </Label>

        <div
          className={clsx(
            `autocomplete-highlight mt-2 w-full border rounded-lg p-4 flex justify-between items-center`,
            {
              "border-custom-grey-200": !errors.password,
              "border-red-500": errors.password,
            }
          )}
        >
          <div className="flex justify-start items-center gap-4">
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
              placeholder="Enter your password"
              {...register("password", {
                required: "Can't be empty",
              })}
            />
          </div>
          {errors.password?.message && (
            <small className="block instrument-sans font-normal text-xs text-red-500">
              {errors.password.message}
            </small>
          )}
        </div>
      </div>

      <Button>Login</Button>
    </form>
  );
}
