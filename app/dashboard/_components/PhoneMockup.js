"use client";

import Image from "next/image";
import { useDropdown } from "../context/DropdownContext";

export default function PhoneMockup({ forms }) {
  const { getAllSelections } = useDropdown();

  const formIds = forms.map((form) => form.id);

  const selections = getAllSelections(formIds);

  return (
    <div
      className="w-[40%] bg-white rounded-xl py-[116px]
        max-custom-md:hidden"
    >
      <div className="w-max max-h-[631px] mx-auto relative">
        <Image
          src="/images/phone-cover.png"
          width={307}
          height={631}
          alt="A Phone Mockup"
        />
        <div
          className="w-full max-w-[237px] h-[514px] mx-auto absolute top-[63px] left-1/2 -translate-x-1/2 overflow-y-auto
            [&::-webkit-scrollbar]:hidden 
            [-ms-overflow-style:'none'] 
            [scrollbar-width:'none']"
        >
          <Image
            src="/images/phone-header.png"
            width={237}
            height={158}
            alt="A placeholder for profile information."
          />

          <ul className="mt-[36px]">
            {selections.length === 0
              ? Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <li
                      key={index}
                      className="mt-5 w-full h-[44px] rounded-lg bg-custom-grey-100"
                    ></li>
                  ))
              : selections.map((selection) => (
                  <li
                    key={selection.formId}
                    style={{ backgroundColor: selection.color }}
                    className="mt-5 w-full h-[44px] rounded-lg flex items-center justify-between px-4 text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/images/${selection.fileName}`}
                        width={16}
                        height={16}
                        alt={selection.alt}
                        className="brightness-0 invert"
                      />
                      <span className="instrument-sans text-xs font-normal text-white">
                        {selection.text}
                      </span>
                    </div>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2.66669 8H13.3334M13.3334 8L8.00002 2.66667M13.3334 8L8.00002 13.3333"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
