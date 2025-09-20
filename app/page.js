import Image from "next/image";
import Link from "next/link";
import Form from "./_components/Form";

export default function Home() {
  return (
    <main
      className="min-h-screen flex justify-center items-center bg-custom-grey-50
    max-custom-sm:p-8 max-custom-sm:min-h-0"
    >
      <div
        className="flex flex-col justify-center items-center gap-12
      max-custom-sm:gap-16 max-custom-sm:items-start max-custom-sm:w-full"
      >
        <Image
          src="/images/logo-devlinks-large.svg"
          width={182}
          height={40}
          alt="DevLinks Logo"
          priority
        />

        <div
          className="w-[476px] bg-white rounded-xl p-10
        max-custom-sm:bg-transparent max-custom-sm:w-full max-custom-sm:p-0"
        >
          <Form />

          <div className="mt-6 text-center">
            <p className="instrument-sans font-normal text-base text-custom-grey-500">
              Don&apos;t have an account?{" "}
              <br className="hidden max-custom-sm:block" />
              <span className="text-custom-purple-600">
                <Link href="/">Create account</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
