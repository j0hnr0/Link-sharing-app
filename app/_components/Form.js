import Input from "./Input";
import Label from "./Label";

export default function Form() {
  return (
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
        <Label htmlFor="email">Email Address</Label>

        <div className="autocomplete-highlight mt-2 w-full border border-custom-grey-200 rounded-lg p-4 flex justify-start items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-email.svg"
            alt="Email Icon"
            width={16}
            height={16}
          />

          <Input type="email" placeholder="e.g. alex@email.com" />
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="password">Password</Label>

        <div className="autocomplete-highlight mt-2 w-full border border-custom-grey-200 rounded-lg p-4 flex justify-start items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-password.svg"
            alt="Email Icon"
            width={16}
            height={16}
          />

          <Input type="password" placeholder="Enter your password" />
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
  );
}
