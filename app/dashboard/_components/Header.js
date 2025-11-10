"use client";

import Logo from "@/_components/Logo";
import Image from "next/image";
import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
import IconLinksHeader from "../_svg-components/IconLinksHeader";
import IconProfileDetailsHeader from "../_svg-components/IconProfileDetailsHeader";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

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
        className="max-custom-semism:block hidden"
      />

      <div
        className="flex justify-center gap-4
      max-custom-md:gap-0"
      >
        <NavButton
          href="/dashboard/links"
          Icon={IconLinksHeader}
          text="Links"
          isActive={pathname === "/dashboard/links"}
        />
        <NavButton
          href="/dashboard/profile"
          Icon={IconProfileDetailsHeader}
          text="Profile Details"
          isActive={pathname === "/dashboard/profile"}
        />
      </div>

      <Link
        href="/dashboard/preview"
        className="py-4 px-6 rounded-lg flex justify-center items-center cursor-pointer border border-custom-purple-600
        max-custom-semism:p-4 "
      >
        {/* Mobile Logo */}
        <Image
          src="/images/icon-preview-header.svg"
          width={20}
          height={20}
          alt="Small Logo icon"
          className="max-custom-semism:block hidden"
        />
        <span className="max-custom-semism:hidden block instrument-sans font-semibold text-base text-custom-purple-600">
          Preview
        </span>
      </Link>
    </header>
  );
}
