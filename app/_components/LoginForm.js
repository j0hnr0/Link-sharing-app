"use client";

import Button from "@/_components/Button";
import Input from "@/_components/Input";
import InputContainer from "@/_components/InputContainer";
import InputErrorMessage from "@/_components/InputErrorMessage";
import Label from "@/_components/Label";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/auth-provider";
import { useMutation } from "@tanstack/react-query";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const { login } = useAuth();

  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  function handleLoginForm(data) {
    loginMutation.mutate({
      email: data.email,
      password: data.password,
    });
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

      {loginMutation.isError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">Invalid email or password</p>
        </div>
      )}

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
          Password
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
            placeholder="Enter your password"
            {...register("password", {
              required: "Can't be empty",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </InputContainer>
        <InputErrorMessage error={errors.password?.message} />
      </div>

      <Button disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
