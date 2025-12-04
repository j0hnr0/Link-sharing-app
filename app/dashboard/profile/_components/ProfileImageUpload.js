"use client";

import Image from "next/image";
import { useRef } from "react";

export default function ProfileImageUpload() {
  const fileInputRef = useRef(null);

  function handleFileClick() {
    fileInputRef.current?.click();
  }

  async function handleFileChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    // TODO: Upload file to server
    console.log("Selected file:", file);

    // You'll add upload logic here next
  }

  return (
    <div className="mt-10 w-full p-6 bg-custom-grey-50 rounded-[12px]">
      <div
        className="flex justify-between items-center
              max-custom-lg:gap-2.5
              max-custom-md:gap-0
              max-custom-semism:flex-col max-custom-semism:justify-start max-custom-semism:items-start"
      >
        <p className="instrument-sans font-normal text-base text-custom-grey-500">
          Profile picture
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <div
          onClick={handleFileClick}
          className="w-full max-w-48 bg-custom-grey-100 py-[60px] cursor-pointer
                max-custom-semism:py-[39px] max-custom-semism:max-w-[150px] max-custom-semism:mt-4"
        >
          <Image
            src="/images/icon-upload-image.svg"
            className="mx-auto"
            width={40}
            height={40}
            alt="Upload Image Icon"
          />
          <p className="mt-2 text-center instrument-sans font-semibold text-base text-custom-purple-600">
            + Upload Image
          </p>
        </div>

        <p
          className="instrument-sans font-normal text-xs text-custom-grey-500
                max-custom-semism:mt-6"
        >
          Image must be below 1024x1024px <br />
          Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
