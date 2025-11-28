"use client";

import Link from "next/link";
import FormBackground from "@/_components/FormBackground";
import LoginForm from "./_components/LoginForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const searchParams = useSearchParams();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (searchParams.get("registered") === "true" && !hasShownToast.current) {
      hasShownToast.current = true;
      toast.success("Account created successfully! Please login.");
    }
  }, [searchParams]);

  return (
    <FormBackground>
      <div
        className="w-[476px] bg-white rounded-xl p-10
        max-custom-sm:bg-transparent max-custom-sm:w-full max-custom-sm:p-0"
      >
        <LoginForm />

        <div className="mt-6 text-center">
          <p className="instrument-sans font-normal text-base text-custom-grey-500">
            Don&apos;t have an account?{" "}
            <br className="hidden max-custom-sm:block" />
            <span className="text-custom-purple-600">
              <Link href="/create-account">Create account</Link>
            </span>
          </p>
        </div>
      </div>
    </FormBackground>
  );
}
