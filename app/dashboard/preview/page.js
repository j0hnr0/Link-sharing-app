"use client";

import Image from "next/image";
import Link from "next/link";
import { useDropdown } from "../_context/DropdownContext";

export default function Preview() {
  const { getAllSelections, forms } = useDropdown();

  const formIds = forms.map((form) => form.id);

  const selections = getAllSelections(formIds);

  return (
    <main className="p-6">
      <div
        className="absolute -z-50 top-0 left-0 right-0 w-full h-[357px] rounded-b-4xl bg-custom-purple-600
      max-custom-semism:hidden"
      ></div>

      <header
        className="w-full p-4 rounded-[12px] bg-white flex justify-between
      max-custom-sm:px-0 max-custom-sm:gap-4"
      >
        <Link
          href="/dashboard/links"
          className="w-full max-w-[153px] bg-transparent py-4 rounded-[8px] border border-custom-purple-600 text-center
          max-custom-sm:max-w-none"
        >
          <p className="instrument-sans font-semibold text-base text-custom-purple-600">
            Back to Editor
          </p>
        </Link>

        <button
          type="button"
          className="w-full max-w-[127px] bg-custom-purple-600 rounded-[8px] py-4 text-center
          max-custom-sm:max-w-none"
        >
          <p className="instrument-sans font-semibold text-base text-white">
            Share Link
          </p>
        </button>
      </header>

      <div
        className="mt-[112px] w-full max-w-[349px] mx-auto py-12 px-14 bg-white rounded-3xl shadow-2xl
      max-custom-semism:mt-[50px] max-custom-semism:shadow-none max-custom-semism:py-0"
      >
        <div className="w-[104px] h-[104px] mx-auto rounded-full border-4 border-custom-purple-600">
          <Image
            src="/images/thorfinn.webp"
            className="w-full h-full rounded-full"
            width={104}
            height={104}
            alt="User's profile picture"
          />
        </div>

        <div className="mt-6 text-center">
          <h1 className="instrument-sans font-bold text-[32px] text-custom-grey-900">
            Thorfinn
          </h1>
          <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
            thorfinn@example.com
          </p>
        </div>

        <ul className="mt-[32px]">
          {selections.length === 0
            ? Array(5)
                .fill(null)
                .map((_, index) => (
                  <li
                    key={index}
                    className="mt-6 w-full h-[56px] rounded-[8px] bg-custom-grey-100"
                  ></li>
                ))
            : selections.map((selection) => (
                <li
                  key={selection.formId}
                  style={{ backgroundColor: selection.color }}
                  className="mt-6 w-full h-[56px] rounded-[8px] flex items-center justify-between px-4 text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/images/${selection.fileName}`}
                      width={20}
                      height={20}
                      alt={selection.alt}
                      className="brightness-0 invert"
                    />
                    <span className="instrument-sans text-base font-normal text-white">
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
    </main>
  );
}
