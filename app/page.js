import Image from "next/image";
import Link from "next/link";

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
          <form>
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
              <label
                htmlFor="email"
                className="instrument-sans font-normal text-xs text-custom-grey-900"
              >
                Email Address
              </label>

              <div className="autocomplete-highlight mt-2 w-full border border-custom-grey-200 rounded-lg p-4 flex justify-start items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icon-email.svg"
                  alt="Email Icon"
                  width={16}
                  height={16}
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="instrument-sans font-normal text-base text-custom-grey-900 w-full h-full focus:outline-none"
                  placeholder="e.g. alex@email.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="instrument-sans font-normal text-xs text-custom-grey-900"
              >
                Password
              </label>

              <div className="autocomplete-highlight mt-2 w-full border border-custom-grey-200 rounded-lg p-4 flex justify-start items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icon-password.svg"
                  alt="Email Icon"
                  width={16}
                  height={16}
                />

                <input
                  type="password"
                  name="password"
                  id="password"
                  className="instrument-sans font-normal text-base text-custom-grey-900 w-full h-full focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-lg py-4 text-center bg-custom-purple-600"
            >
              <span className="instrument-sans text-base font-semibold text-white">
                Login
              </span>
            </button>
          </form>

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
