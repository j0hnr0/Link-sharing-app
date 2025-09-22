import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Label from "@/_components/Label";

export default function CreateForm() {
  return (
    <form>
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
        <Label htmlFor="email">Email address</Label>

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
        <Label htmlFor="password">Create password</Label>

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

      <Button>Create new account</Button>
    </form>
  );
}
