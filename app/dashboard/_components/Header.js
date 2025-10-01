import Logo from "@/_components/Logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center rounded-xl">
      <Logo className="w-[146px] h-8" />

      <div
        className="flex justify-center gap-4
      max-custom-md:gap-0"
      >
        <button
          type="button"
          className="py-4 px-6 rounded-lg bg-custom-grey-100 flex justify-center items-center gap-2 cursor-pointer"
        >
          <Image
            src="/images/icon-links-header.svg"
            width={20}
            height={20}
            alt="Links button icon"
            priority
          />
          <span className="instrument-sans font-semibold text-base text-custom-purple-600">
            Links
          </span>
        </button>

        <button
          type="button"
          className="py-4 px-6 rounded-lg flex justify-center items-center gap-2 cursor-pointer"
        >
          <Image
            src="/images/icon-profile-details-header.svg"
            width={20}
            height={20}
            alt="Profile details button icon"
            priority
          />
          <span className="instrument-sans font-semibold text-base text-custom-grey-500">
            Profile Details
          </span>
        </button>
      </div>

      <button
        type="button"
        className="py-4 px-6 rounded-lg flex justify-center items-center cursor-pointer border border-custom-purple-600"
      >
        <span className="instrument-sans font-semibold text-base text-custom-purple-600">
          Preview
        </span>
      </button>
    </header>
  );
}
