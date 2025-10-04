import Logo from "@/_components/Logo";
import Image from "next/image";
import NavButton from "./NavButton";

export default function Header() {
  return (
    <header className="p-4 bg-white flex justify-between items-center rounded-xl">
      {/* Desktop Logo */}
      <Logo className="max-custom-semism:hidden block w-[146px] h-8" />

      {/* Mobile Logo */}
      <Image
        src="/images/logo-devlinks-small.svg"
        width={32}
        height={32}
        alt="Small Logo icon"
        priority
        className="max-custom-semism:block hidden"
      />

      <div
        className="flex justify-center gap-4
      max-custom-md:gap-0"
      >
        <NavButton
          imgSrc="/images/icon-links-header.svg"
          imgAlt="Links button icon"
          text="Links"
        />
        <NavButton
          imgSrc="/images/icon-profile-details-header.svg"
          imgAlt="Profile details button icon"
          text="Profile Details"
        />
      </div>

      <button
        type="button"
        className="py-4 px-6 rounded-lg flex justify-center items-center cursor-pointer border border-custom-purple-600
        max-custom-semism:p-4 "
      >
        {/* Mobile Logo */}
        <Image
          src="/images/icon-preview-header.svg"
          width={20}
          height={20}
          alt="Small Logo icon"
          priority
          className="max-custom-semism:block hidden"
        />
        <span className="max-custom-semism:hidden block instrument-sans font-semibold text-base text-custom-purple-600">
          Preview
        </span>
      </button>
    </header>
  );
}
