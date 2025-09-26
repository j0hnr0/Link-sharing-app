"use client";

import Button from "@/_components/Button";
import Input from "@/_components/Input";
import InputContainer from "@/_components/InputContainer";
import InputErrorMessage from "@/_components/InputErrorMessage";
import Label from "@/_components/Label";
import { useForm } from "react-hook-form";

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

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

        <InputContainer error={errors.email}>
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
        </InputContainer>
        <InputErrorMessage error={errors.email?.message} />
      </div>

      <div className="mt-2.5">
        <Label htmlFor="password" error={errors.password?.message}>
          Create password
        </Label>

        <InputContainer error={errors.password}>
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
        </InputContainer>
        <InputErrorMessage error={errors.password?.message} />
      </div>

      <div className="mt-2.5">
        <Label htmlFor="new-password" error={errors.confirmPassword?.message}>
          Confirm password
        </Label>

        <InputContainer error={errors.confirmPassword}>
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
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
          />
        </InputContainer>
        <InputErrorMessage error={errors.confirmPassword?.message} />
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
