"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomizeLinks() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((prev) => !prev);
  }

  return (
    <div
      className="w-[60%]
        max-custom-md:w-full"
    >
      <div
        className="bg-white rounded-t-xl p-10
          max-custom-semism:p-6"
      >
        <h1
          className="instrument-sans font-bold text-[32px] text-custom-grey-900
            max-custom-semism:text-2xl"
        >
          Customize your links
        </h1>
        <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="mt-10 w-full rounded-lg border border-custom-purple-600 py-4 text-center cursor-pointer"
        >
          <span className="instrument-sans font-semibold text-base text-custom-purple-600">
            + Add new link
          </span>
        </button>

        {click ? (
          <div className="mt-6 p-6 rounded-xl bg-custom-grey-50">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <div className="flex flex-col justify-center items-start gap-1">
                  <div className="w-3 h-[1px] bg-custom-grey-500"></div>
                  <div className="w-3 h-[1px] bg-custom-grey-500"></div>
                </div>
                <p className="instrument-sans font-bold text-base text-custom-grey-500">
                  Link #1
                </p>
              </div>

              <button
                type="button"
                className="instrument-sans font-normal text-base text-custom-grey-500 cursor-pointer"
              >
                Remove
              </button>
            </div>

            <div className="mt-4">
              <small className="instrument-sans font-normal text-xs text-custom-grey-900">
                Platform
              </small>
              <select className="mt-2 w-full rounded-lg border border-custom-grey-200 bg-white p-4 focus:outline-none">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
        ) : (
          <div
            className="mt-6 w-full rounded-xl bg-custom-grey-50 py-[67px]
            max-custom-semism:py-[31px] max-custom-semism:px-6"
          >
            <Image
              src="/images/illustration-empty.svg"
              className="mx-auto
                max-custom-semism:w-[124px]"
              width={249}
              height={160}
              alt="A hand clicking on a phone"
            />

            <h1
              className="mt-10 text-center instrument-sans font-bold text-[32px] text-custom-grey-900
              max-custom-semism:text-2xl"
            >
              Let&apos;s get you started
            </h1>

            <div className="mt-6 max-w-[488px] mx-auto text-center">
              <p className="instrument-sans font-normal text-base text-custom-grey-500">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        className="bg-white rounded-b-xl py-6 px-10 border-t border-custom-grey-200
          max-custom-semism:p-4"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="w-[85px] rounded-lg py-4 text-center bg-custom-purple-600 opacity-25 cursor-pointer
                max-custom-semism:w-full"
          >
            <span className="instrument-sans font-semibold text-base text-white">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
